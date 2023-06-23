import { useState, useContext } from 'react';
import UserContext from '../../../context/UserContext';
import axios from 'axios';

type ProjectInfo = {
    ProjectShown: any,
    onClose: any,
}

export default function ProjectModal({ ProjectShown, onClose }: ProjectInfo) {
    const [name, setName] = useState<string>('');
    const [instruments, setInstruments] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const { userData, setProjectData } = useContext(UserContext)
    const userToken = userData.token.token

    if (!ProjectShown) return null;

    async function submitProject(e: any) {
        e.preventDefault();
        const body = { name, instruments, description };
        await axios.post(`http://localhost:4000/projects/new`, body, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        })
            .then((res) => {
                setProjectData(res.data)
                setName('');
                setInstruments('');
                setDescription('');
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

                <form onSubmit={submitProject} className="flex flex-col justify-center items-center">
                    <div className="flex flex-col mt-3">
                        <label className="text-base mb-1" htmlFor='title'>Project/Band</label>
                        <input
                            type="text"
                            id="project"
                            className="rounded-lg p-2 placeholder:text-xs"
                            placeholder=""
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required />
                    </div>

                    <div className="flex flex-col my-4">
                        <label className="text-base mb-1" htmlFor='instruments'>Instruments</label>
                        <input
                            type="text"
                            id="instruments"
                            className="rounded-lg p-2 placeholder:text-xs"
                            placeholder=""
                            value={instruments}
                            onChange={e => setInstruments(e.target.value)}
                            required />
                    </div>

                    <div className="flex flex-col my-4">
                        <label className="text-base mb-1" htmlFor='description'>Description</label>
                        <input
                            type="text"
                            id="description"
                            className="rounded-lg p-2 placeholder:text-xs"
                            placeholder=""
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="rounded-full mt-4 font-bold bg-cyan-200 w-[110px] h-[30px] text-sm"
                        >Send Project</button>
                    </div>
                </form>
            </div>
        </div>
    )
}