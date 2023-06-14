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
    const { setUserInfo } = useContext(UserContext);
    //const navigate = useNavigate();

    if (!LoginShown) return null;
    
    async function userLogin(e: any) {
        e.preventDefault();
        const body = { email, password };
        await axios.post(`${process.env.VITE_REACT_APP_API_BASE_URL}/login`, body)
            .then((res) => {
                setUserInfo(res.data)
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
        <div className="fixed inset-0 bg-cyan-200/75 bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="flex flex-col">
                <div className="close text-gray text-base flex justify-end hover:cursor-pointer" onClick={() => onClose()}>
                    x
                </div>

                <form onSubmit={userLogin} className="w-[700px] h-[850px]">
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