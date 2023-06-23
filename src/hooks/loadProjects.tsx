import axios from "axios";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export async function loadProjects(): Promise<any> {
    const { userData, projectData, setProjectData } = useContext(UserContext);
    const userToken = userData.token.token;
    console.log(projectData)

    // get PROJECTS from user
    await axios
        .get(`http://localhost:4000/projects/${userData.image.id}`, {
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
        })
        .then((res) => {
            setProjectData(res.data.userProjects);
            console.log(projectData)
        })
        .catch((err) => {
            alert(err.message);
        });
}
