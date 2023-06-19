import { useState } from 'react'
import axios from 'axios';

type RegisterInfo = {
    RegisterShown: any,
    onClose: any,
}

export default function RegisterModal({ RegisterShown, onClose }: RegisterInfo) {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    
    if (!RegisterShown) return null;

    function userRegister(e: any) {
        e.preventDefault();
        let body = { name, email, image, password };

        axios.post(`http://localhost:4000/register`, body)
            .then(() => {
                setName('');
                setEmail('');
                setImage('');
                setPassword('');
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
                <div className="close relative bottom-7 left-4 text-xl flex justify-end hover:cursor-pointer" onClick={() => onClose()}>
                    <p className="absolute text-sky-100">x</p>
                </div>

                <form onSubmit={userRegister} className="flex flex-col justify-center items-center">

                    <div className="flex flex-col mt-3">
                        <label className="text-base mb-1" htmlFor='name'>Username</label>
                        <input
                            type="text"
                            id="name"
                            className="rounded-lg p-2 placeholder:text-xs"
                            placeholder="Username"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required />
                    </div>

                    <div className="flex flex-col my-4">
                        <label className="text-base mb-1" htmlFor='email'>Email</label>
                        <input
                            type="text"
                            id="email"
                            className="rounded-lg p-2 placeholder:text-xs"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-base mb-1" htmlFor='image'>Image</label>
                        <input
                            type="text"
                            id="image"
                            className="rounded-lg p-2 placeholder:text-xs"
                            placeholder="Url"
                            value={image}
                            onChange={e => setImage(e.target.value)} />
                    </div>

                    <div className="flex flex-col my-4">
                        <label className="text-base mb-1" htmlFor='password'>Password</label>
                        <input
                            type="password"
                            id="password"
                            className="rounded-lg p-2 placeholder:text-xs"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="rounded-full mt-4 font-bold text-cyan-950 bg-cyan-200 w-[110px] h-[30px] text-sm"
                        >Register</button>
                    </div>

                </form>
            </div>
        </div>
    )
}