import { useState, useContext, useEffect } from 'react';
import UserContext from '../../context/UserContext';
import axios from 'axios';

export default function ProjectSection({ EnableProject }: any) {
    const { userData, projectData } = useContext(UserContext)
    const [userProjects, setUserProjects] = useState([])
    const userToken = userData.token.token

    async function loadFeed(): Promise<any> {
        await axios.get(`http://localhost:4000/projects/${userData.image.id}`, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        })
            .then((res) => {
                setUserProjects(res.data.userProjects)
                console.log(userProjects)
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    useEffect(() => {
        loadFeed()
    }, [projectData]);

    return (
        <div className="container m-auto pt-20 max-w-xl items-center">
            <div className="header flex flex-row border-b-2 border-slate-700 pb-1 pr-6">
                <h1 className="title absolute border-slate-700 pl-2 text-xl font-black text-sky-800">Projects</h1>
                <div className="add relative left-full bottom-1 text-2xl hover:cursor-pointer">
                    <button
                        className="text-cyan-900"
                        onClick={() => EnableProject(true)}
                    >
                        +
                    </button>
                </div>
            </div>

            <div className="container flex flex-col mb-12">

            {userProjects.length === 0 ? <div className="empty mt-4 p-8 text-opacity-60 text-base text-center text-stone-600 font-serif font-thin">Nothing here yet, show us what you got!</div> : 
                userProjects.map(project => 
                <>
                    <div className="header mt-6 pr-6 mr-4 border-slate-600">
                        <h1 className="band mb-2 font-light border-l-8 pl-2 border-slate-700">{project.name}</h1>
                        <h2 className="instruments left-3/4 mr-4 font-light text-slate-700">{project.instruments}</h2>
                    </div>

                    <div>
                        <p className="description bg-cyan-900 rounded-2xl w-full mt-6 p-4 font-medium text-sm text-cyan-100">{project.description}</p>
                    </div>
                </>
                )
            }
            </div>

        </div>
    )
}