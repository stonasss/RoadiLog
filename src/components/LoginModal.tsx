import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';
//import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type LoginInfo = {
    LoginShown: any,
    onClose: any,
}

export default function LoginModal({ LoginShown, onClose }: LoginInfo) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { setUserData } = useContext(UserContext);
    //const navigate = useNavigate();

    if (!LoginShown) return null;
    
    async function userLogin(e: any) {
        e.preventDefault();
        const body = { email, password };
        await axios.post(`${process.env.VITE_REACT_APP_API_BASE_URL}/login`, body)
            .then((res) => {
                setUserData(res.data)
                onClose();
                setEmail('');
                setPassword('');
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
                            type="text"
                            id="email"
                            placeholder="Password"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
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