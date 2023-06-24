import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { useNavigate } from 'react-router-dom';

type LogoutInfo = {
    LogoutShown: any,
    onClose: any,
}

export default function LogoutModal({ LogoutShown, onClose }: LogoutInfo) {
    const { setUserData } = useContext(UserContext);
    const navigate = useNavigate();

    if (!LogoutShown) return null;

    async function logout() {
        setUserData(null);
        navigate('/');
        onClose();
    }

    return (
        <div className="fixed z-50 inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
            <div className="relative flex flex-col bg-gradient-to-r from-cyan-400 to-cyan-600 p-8 rounded-xl">
                <div className="close absolute top-1 right-4 text-white text-xl flex justify-end hover:cursor-pointer" onClick={() => onClose()}>
                    x
                </div>

                <button onClick={logout} className="text-xl font-bold">Leaving?</button>
            </div>
        </div>
    )
}