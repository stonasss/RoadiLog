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
        <div className="fixed inset-0 bg-cyan-800 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">

            <div className="flex flex-col">
                <div className="close text-white text-xl flex justify-end hover:cursor-pointer" onClick={() => onClose()}>
                    x
                </div>

                <form onSubmit={userRegister} className="flex flex-col justify-center items-center">

                    <div className="flex flex-col">
                        <label htmlFor='name'>Username</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Username"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required />
                    </div>

                    <div className="flex flex-col my-4">
                        <label htmlFor='email'>Email</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor='image'>Image</label>
                        <input
                            type="text"
                            id="image"
                            placeholder="Url"
                            value={image}
                            onChange={e => setImage(e.target.value)} />
                    </div>

                    <div className="flex flex-col my-4">
                        <label htmlFor='password'>Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="rounded-full bg-cyan-200 w-[110px] h-[30px] text-sm"
                        >Register</button>
                    </div>

                </form>
            </div>
        </div>
    )
}