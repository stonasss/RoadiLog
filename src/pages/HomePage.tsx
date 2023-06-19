import { useState } from 'react';
import MainPageHeader from "../components/MainPageHeader";
import LogoutModal from '../components/AuthComponents/LogoutModal';
import PostSection from '../components/FeedComponents/PostSection';
import ProjectSection from '../components/FeedComponents/ProjectSection';
import MerchSection from '../components/FeedComponents/MerchSection';

export default function HomePage() {
    const [logoutModal, setLogoutModal] = useState<any>(false)

    return (
        <>
            <div className="App w-full pb-8 bg-gradient-to-r from-cyan-500 via-cyan-200 to-cyan-500">
                <MainPageHeader EnableRegister={false} EnableLogin={false} SwitchLogOut={true} EnableLogOut={setLogoutModal}/>
                <LogoutModal LogoutShown={logoutModal} onClose={() => setLogoutModal(false)} />
                <PostSection />
                <ProjectSection />
                <MerchSection />
            </div>
        </>
    )
}