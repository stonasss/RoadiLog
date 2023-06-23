import axios from "axios";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export async function loadMerch(): Promise<any> {
    const { userData, setMerchData } = useContext(UserContext);
    const userToken = userData.token.token;

    // get POSTS from user
    await axios
        .get(`http://localhost:4000/merch/${userData.image.id}`, {
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
        })
        .then((res) => {
            setMerchData(res.data.userPosts);
        })
        .catch((err) => {
            alert(err.message);
        });
}
