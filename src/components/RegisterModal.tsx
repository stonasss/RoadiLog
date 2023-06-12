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
        const body = { name, email, image, password };

        axios.post(`${process.env.VITE_REACT_APP_API_BASE_URL}/register`, body)
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
        <div className="fixed bg-cyan-200/50 overflow-y-auto h-full w-full flex justify-center items-center">

            <div className="flex flex-col">
                <div className="close text-gray text-base flex justify-end" onClick={() => onClose()}>
                    x
                </div>

                <form onSubmit={userRegister} className="w-[700px] h-[850px]">

                    <div>
                        <label htmlFor='name'>Username</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Username"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required />
                    </div>

                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required />
                    </div>

                    <div>
                        <label htmlFor='image'>Image</label>
                        <input
                            type="text"
                            id="image"
                            placeholder="Url"
                            value={image}
                            onChange={e => setImage(e.target.value)}
                            required />
                    </div>

                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required />
                    </div>

                    <div>
                        <button
                            type="submit"
                        >Register</button>
                    </div>

                </form>
            </div>
        </div>
    )
}