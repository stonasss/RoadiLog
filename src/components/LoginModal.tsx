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
                <div className="close text-white text-xl flex justify-end hover:cursor-pointer" onClick={() => onClose()}>
                    x
                </div>

                <form onSubmit={userLogin} className="flex flex-col justify-center items-center">
                    <div className="flex flex-col">
                        <label htmlFor='email'>Email</label>
                        <input
                            type="text"
                            id="email"
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required />
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
                        >Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}