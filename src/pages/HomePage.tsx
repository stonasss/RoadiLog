import { useState } from 'react';
import MainPageHeader from "../components/MainPageHeader";
import LogoutModal from '../components/AuthComponents/LogoutModal';
import PostSection from '../components/FeedComponents/PostSection';
import ProjectSection from '../components/FeedComponents/ProjectSection';
import MerchSection from '../components/FeedComponents/MerchSection';
import PostModal from '../components/FeedComponents/SubmissionModals/PostModal';
import ProjectModal from '../components/FeedComponents/SubmissionModals/ProjectModal';
import MerchModal from '../components/FeedComponents/SubmissionModals/MerchModal';

export default function HomePage() {
    const [logoutModal, setLogoutModal] = useState<any>(false)
    const [postModal, setPostModal] = useState<any>(false)
    const [projectModal, setProjectModal] = useState<any>(false)
    const [merchModal, setMerchModal] = useState<any>(false)

    return (
        <>
            <div className="App w-full min-h-screen pb-8 bg-gradient-to-r from-cyan-500 via-cyan-200 to-cyan-500">
                <MainPageHeader EnableRegister={false} EnableLogin={false} SwitchLogOut={true} EnableLogOut={setLogoutModal} />
                    <LogoutModal LogoutShown={logoutModal} onClose={() => setLogoutModal(false)} />
                <PostSection EnablePost={setPostModal} />
                    <PostModal PostShown={postModal} onClose={() => setPostModal(false)} />
                <ProjectSection EnableProject={setProjectModal} />
                    <ProjectModal ProjectShown={projectModal} onClose={() => setProjectModal(false)} />
                <MerchSection EnableMerch={setMerchModal} />
                    <MerchModal MerchShown={merchModal} onClose={() => setMerchModal(false)} />
            </div>
        </>
    )
}