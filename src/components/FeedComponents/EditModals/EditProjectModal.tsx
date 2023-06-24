import { useContext } from "react";
import UserContext from "../../../context/UserContext";
import axios from "axios";

type ProjectInfo = {
    EditProjectShown: any,
    onClose: any,
}

export default function EditProjectModal({ EditProjectShown, onClose }: ProjectInfo) {
    const {
        userData,
        projectId,
        projectName,
        setProjectName,
        projectInstruments,
        setProjectInstruments,
        projectDescription,
        setProjectDescription,
        reset,
        setReset
    } = useContext(UserContext)

    const userToken = userData.token.token

    if (!EditProjectShown) return null;

    async function editProject(e: any) {
        e.preventDefault();
        const body = { name: projectName, instruments: projectInstruments, description: projectDescription };
        await axios.put(`http://localhost:4000/projects/${projectId}`, body, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        })
            .then(() => {
                setReset(!reset)
                onClose();
            })
            .catch((err) => {
                alert(err.message);
                onClose();
            })
    }

    return (
        <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
            <div className="flex flex-col bg-gradient-to-r from-cyan-400 to-cyan-600 p-8 rounded-xl">
                <div className="close relative bottom-7 left-4 text-white text-xl flex justify-end hover:cursor-pointer" onClick={() => onClose()}>
                    <p className="absolute text-sky-100">x</p>
                </div>

                <form onSubmit={editProject} className="flex flex-col justify-center items-center">
                    <div className="flex flex-col mt-3">
                        <label className="text-base mb-1" htmlFor='name'>Project/Band</label>
                        <input
                            type="text"
                            id="name"
                            className="rounded-lg p-2 placeholder:text-xs"
                            placeholder=""
                            value={projectName}
                            onChange={e => setProjectName(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col my-4">
                        <label className="text-base mb-1" htmlFor='instruments'>Instruments</label>
                        <input
                            type="text"
                            id="instruments"
                            className="rounded-lg p-2 placeholder:text-xs"
                            placeholder=""
                            value={projectInstruments}
                            onChange={e => setProjectInstruments(e.target.value)}
                            required />
                    </div>

                    <div className="flex flex-col my-4">
                        <label className="text-base mb-1" htmlFor='description'>Description</label>
                        <input
                            type="text"
                            id="description"
                            className="rounded-lg p-2 placeholder:text-xs"
                            placeholder=""
                            value={projectDescription}
                            onChange={e => setProjectDescription(e.target.value)}
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="rounded-full mt-4 font-bold bg-cyan-200 w-[110px] h-[30px] text-sm"
                        >Update Project</button>
                    </div>
                </form>
            </div>
        </div>
    )

}