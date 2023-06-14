import { useState } from 'react';
import MainPageHeader from "../components/MainPageHeader";
import LogoutModal from '../components/LogoutModal';

export default function HomePage() {
    const [logoutModal, setLogoutModal] = useState<any>(false)

    return (
        <>
            <div className="App w-screen h-screen bg-cyan-300">
                <MainPageHeader EnableRegister={false} EnableLogin={false} SwitchLogOut={true} EnableLogOut={setLogoutModal}/>
            </div>
            <LogoutModal LogoutShown={logoutModal} onClose={() => setLogoutModal(false)} />
        </>
    )
}