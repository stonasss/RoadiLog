import axios from "axios";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export async function loadPosts(): Promise<any> {
    const { userData, setPostData } = useContext(UserContext);
    const userToken = userData.token.token;

    // get POSTS from user
    await axios
        .get(`http://localhost:4000/posts/${userData.image.id}`, {
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
        })
        .then((res) => {
            setPostData(res.data.userPosts);
        })
        .catch((err) => {
            alert(err.message);
        });
}
