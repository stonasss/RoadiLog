import { useState, useContext, useEffect } from 'react';
import UserContext from '../../context/UserContext';
import axios from 'axios';

export default function ProjectSection(): any {
    const { userData } = useContext(UserContext)
    const [userProjects, setUserProjects] = useState([])

    async function loadFeed(): Promise<any> {
        await axios.get(`http://localhost:4000/projects/${userData.image.id}`, userData.token)
            .then((res) => {
                setUserProjects(res.data.userProjects)
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    useEffect(() => {
        loadFeed()
    }, [userData]);

    return (
        <div className="container m-auto pt-20 max-w-xl items-center">
            <div className="header flex flex-row border-b-2 border-slate-700 pb-1 pr-6">
                <h1 className="title absolute border-slate-700 pl-2 text-xl font-black text-sky-800">Projects</h1>
                <div className="add relative left-full bottom-1 text-2xl hover:cursor-pointer">
                    <h2 className="text-cyan-900">+</h2>
                </div>
            </div>

            <div className="container flex flex-col">

                {userProjects.map(project => 
                <>
                    <div className="header mt-6 pr-6 mr-4 border-slate-600">
                        <h1 className="band mb-2 font-light border-l-8 pl-2 border-slate-700">{project.name}</h1>
                        <h2 className="instruments left-3/4 mr-4 font-light text-slate-700">{project.instruments}</h2>
                    </div>

                    <div>
                        <p className="description bg-cyan-900 rounded-2xl w-full mt-6 p-4 font-medium text-sm text-cyan-100">{project.description}</p>
                    </div>
                </>
                )}
            </div>

        </div>
    )
}