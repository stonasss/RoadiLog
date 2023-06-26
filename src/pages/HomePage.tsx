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
import EditMerchModal from '../components/FeedComponents/EditModals/EditMerchModal';

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

        setMerchId,
        setMerchImage,
        setMerchTitle,
        setMerchPrice,

        reset,
    } = useContext(UserContext)

    const userToken = userData.token.token

    const [logoutModal, setLogoutModal] = useState<any>(false)

    const [postModal, setPostModal] = useState<any>(false)
    const [projectModal, setProjectModal] = useState<any>(false)
    const [merchModal, setMerchModal] = useState<any>(false)

    const [editPostModal, setEditPostModal] = useState<any>(false)
    const [editProjectModal, setEditProjectModal] = useState<any>(false)
    const [editMerchModal, setEditMerchModal] = useState<any>(false)


    function emptyInfo() {
        setEditPostModal(false)
        setEditProjectModal(false)
        setEditMerchModal(false)

        setPostId('')
        setProjectId('')
        setMerchId('')

        setPostTitle('')
        setProjectName('')
        setMerchImage('')

        setPostDescription('')
        setProjectInstruments('')
        setMerchTitle('')

        setPostLink('')
        setProjectDescription('')
        setMerchPrice('')
    }


    useEffect(() => {
        async function getPostData() { 
            await axios
                .get(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/posts/${userData.image.id}`, {
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                    },
                })
                .then((res) => {
                    const posts = res.data.userPosts.reverse()
                    setPostData(posts)
                })
        }

        async function getProjectData() {
            await axios
                .get(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/projects/${userData.image.id}`, {
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                    },
            })
                .then((res) => {
                    const projects = res.data.userProjects.reverse()
                    setProjectData(projects);
            })
        }

        async function getMerchData() {
            await axios
                .get(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/merch/${userData.image.id}`, {
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                    },
            })
                .then((res) => {
                    const merch = res.data.userMerch.reverse()
                    setMerchData(merch);
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
                    postData={postData} />

                    <PostModal PostShown={postModal} onClose={() => setPostModal(false)} />
                    <EditPostModal 
                        EditPostShown={editPostModal} 
                        onClose={() => emptyInfo()} />

                <ProjectSection 
                    EnableProject={setProjectModal} 
                    EnableEditProject={setEditProjectModal}
                    projectData={projectData}
                />
                    <ProjectModal ProjectShown={projectModal} onClose={() => setProjectModal(false)} />
                    <EditProjectModal 
                        EditProjectShown={editProjectModal}
                        onClose={() => emptyInfo()} />

                <MerchSection 
                    EnableMerch={setMerchModal}
                    EnableEditMerch={setEditMerchModal}
                    merchData={merchData}
                />
                    <MerchModal MerchShown={merchModal} onClose={() => setMerchModal(false)} />
                    <EditMerchModal 
                        EditMerchShown={editMerchModal}
                        onClose={() => emptyInfo()} />
            </div>
        </>
    )
}