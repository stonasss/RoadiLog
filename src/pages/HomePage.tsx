import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import MainPageHeader from "../components/MainPageHeader";
import LogoutModal from '../components/AuthComponents/LogoutModal';
import PostSection from '../components/FeedComponents/PostSection';
import ProjectSection from '../components/FeedComponents/ProjectSection';
import MerchSection from '../components/FeedComponents/MerchSection';
import PostModal from '../components/FeedComponents/SubmissionModals/PostModal';
import ProjectModal from '../components/FeedComponents/SubmissionModals/ProjectModal';
import MerchModal from '../components/FeedComponents/SubmissionModals/MerchModal';
import EditPostModal from '../components/FeedComponents/EditModals/EditPostModal';
import UserContext from '../context/UserContext';
import EditProjectModal from '../components/FeedComponents/EditModals/EditProjectModal';

export default function HomePage() {
    const { 
        userData,
        postData,
        projectData,
        merchData,
        setPostData,
        setProjectData,
        setMerchData,
        setPostId, 
        setPostTitle, 
        setPostDescription, 
        setPostLink,
        setProjectId,
        setProjectName,
        setProjectInstruments,
        setProjectDescription,
        reset,
    } = useContext(UserContext)
    const userToken = userData.token.token

    const [logoutModal, setLogoutModal] = useState<any>(false)
    const [postModal, setPostModal] = useState<any>(false)
    const [editPostModal, setEditPostModal] = useState<any>(false)
    const [editProjectModal, setEditProjectModal] = useState<any>(false)
    const [projectModal, setProjectModal] = useState<any>(false)
    const [merchModal, setMerchModal] = useState<any>(false)

    function emptyInfo() {
        setEditPostModal(false)
        setEditProjectModal(false)
        setPostId('')
        setProjectId('')
        setPostTitle('')
        setProjectName('')
        setPostDescription('')
        setProjectInstruments('')
        setPostLink('')
        setProjectDescription('')
    }

    useEffect(() => {
        async function getPostData() { 
            await axios
                .get(`http://localhost:4000/posts/${userData.image.id}`, {
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                    },
                })
                .then((res) => {
                    setPostData(res.data.userPosts)
                })
        }

        async function getProjectData() {
            await axios
                .get(`http://localhost:4000/projects/${userData.image.id}`, {
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                    },
            })
                .then((res) => {
                    setProjectData(res.data.userProjects);
            })
        }

        async function getMerchData() {
            await axios
                .get(`http://localhost:4000/merch/${userData.image.id}`, {
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                    },
            })
                .then((res) => {
                    setMerchData(res.data.userMerch);
            })
        }
        getPostData()
        getProjectData()
        getMerchData()

    }, [reset])


    return (
        <>
            <div className="App w-full min-h-screen pb-8 bg-gradient-to-r from-cyan-500 via-cyan-200 to-cyan-500">
                <MainPageHeader EnableRegister={false} EnableLogin={false} SwitchLogOut={true} EnableLogOut={setLogoutModal} />
                    <LogoutModal LogoutShown={logoutModal} onClose={() => setLogoutModal(false)} />

                <PostSection 
                    EnablePost={setPostModal} 
                    EnableEditPost={setEditPostModal} 
                    postData={postData}
                />
                    <PostModal PostShown={postModal} onClose={() => setPostModal(false)} />
                    <EditPostModal 
                        EditPostShown={editPostModal} 
                        onClose={() => emptyInfo()} 
                    />

                <ProjectSection 
                    EnableProject={setProjectModal} 
                    EnableEditProject={setEditProjectModal}
                    projectData={projectData}
                />
                    <ProjectModal ProjectShown={projectModal} onClose={() => setProjectModal(false)} />
                    <EditProjectModal 
                        EditProjectShown={editProjectModal}
                        onClose={() => emptyInfo()}
                    />

                <MerchSection 
                    EnableMerch={setMerchModal} 
                    merchData={merchData}
                />
                    <MerchModal MerchShown={merchModal} onClose={() => setMerchModal(false)} />
            </div>
        </>
    )
}