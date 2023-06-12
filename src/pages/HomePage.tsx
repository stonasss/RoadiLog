import { useState } from 'react';
import MainPageHeader from "../components/MainPageHeader";
import RegisterModal from '../components/RegisterModal';
import LoginModal from '../components/LoginModal';

export default function HomePage() {
    const [loginState, setLoginState] = useState<any>(false);
    const [registerState, setRegisterState] = useState<any>(false);

    return (
        <>
            <div className="App w-screen h-screen bg-cyan-300">
                <MainPageHeader EnableLogin={setLoginState} EnableRegister={setRegisterState} />
            </div>
            <RegisterModal RegisterShown={registerState} onClose={() => setRegisterState(false)} />
            <LoginModal LoginShown={loginState} onClose={() => setLoginState(false)} />
        </>
    )
}