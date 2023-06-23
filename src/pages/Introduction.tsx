import { useState } from 'react';
import MainPageHeader from "../components/MainPageHeader";
import RegisterModal from '../components/AuthComponents/RegisterModal';
import LoginModal from '../components/AuthComponents/LoginModal';

export default function Introduction() {
    const [loginModal, setLoginModal] = useState<any>(false);
    const [registerModal, setRegisterModal] = useState<any>(false);

    return (
        <>
            <div className="App w-full min-h-screen pb-8 bg-gradient-to-r from-cyan-500 via-cyan-200 to-cyan-500">
                <MainPageHeader EnableRegister={setRegisterModal} EnableLogin={setLoginModal} SwitchLogOut={false} EnableLogOut={false} />
                <RegisterModal RegisterShown={registerModal} onClose={() => setRegisterModal(false)} />
                <LoginModal LoginShown={loginModal} onClose={() => setLoginModal(false)} />
            </div>
        </>
    )
}