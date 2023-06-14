import { useState } from 'react';
import MainPageHeader from "../components/MainPageHeader";
import RegisterModal from '../components/RegisterModal';
import LoginModal from '../components/LoginModal';

export default function HomePage() {
    const [loginModal, setLoginModal] = useState<any>(false);
    const [registerModal, setRegisterModal] = useState<any>(false);

    return (
        <>
            <div className="App w-screen h-screen bg-cyan-300">
                <MainPageHeader EnableRegister={setRegisterModal} EnableLogin={setLoginModal} />
            </div>
            <RegisterModal RegisterShown={registerModal} onClose={() => setRegisterModal(false)} />
            <LoginModal LoginShown={loginModal} onClose={() => setLoginModal(false)} />
        </>
    )
}