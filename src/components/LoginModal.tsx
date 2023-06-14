import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type LoginInfo = {
    LoginShown: any,
    onClose: any,
}

export default function LoginModal({ LoginShown, onClose }: LoginInfo) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();

    if (!LoginShown) return null;
    
    async function userLogin(e: any) {
        e.preventDefault();
        const body = { email, password };
        await axios.post(`http://localhost:4000/login`, body)
            .then((res) => {
                setUserData(res.data)
                setEmail('');
                setPassword('');
                onClose();
                navigate('/home');
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

                <form onSubmit={userLogin} className="flex flex-col justify-center items-center">
                    <div className="flex flex-col mt-3">
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
                            className="rounded-full mt-4 font-bold bg-cyan-200 w-[110px] h-[30px] text-sm"
                        >Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}