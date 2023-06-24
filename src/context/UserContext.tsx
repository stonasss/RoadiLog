import { useState, createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const UserContext = createContext<any>({});
export default UserContext;

export function UserProvider({ children }: any) {
    const [userData, setUserData] = useLocalStorage('userData', {});

    const [postData, setPostData] = useState([]);
    const [projectData, setProjectData] = useState([]);
    const [merchData, setMerchData] = useState([]);

    const [postId, setPostId] = useLocalStorage('postId', {})
    const [postTitle, setPostTitle] = useState('');
    const [postDescription, setPostDescription] = useState('');
    const [postLink, setPostLink] = useState('');

    const [projectId, setProjectId] = useLocalStorage('projectId', {})
    const [projectName, setProjectName] = useState('')
    const [projectInstruments, setProjectInstruments] = useState('')
    const [projectDescription, setProjectDescription] = useState('')

    const [merchId, setMerchId] = useLocalStorage('merchId', {})
    const [merchImage, setMerchImage] = useState('')
    const [merchTitle, setMerchTitle] = useState('')
    const [merchPrice, setMerchPrice] = useState('')

    const [reset, setReset] = useState(false)

    return (
        <UserContext.Provider value={{
            //for profile pic & token
            userData,
            setUserData,

            //for editing posts
            postId,
            setPostId,
            postTitle,
            setPostTitle,
            postDescription,
            setPostDescription,
            postLink,
            setPostLink,

            //for editing projects
            projectId,
            setProjectId,
            projectName,
            setProjectName,
            projectInstruments,
            setProjectInstruments,
            projectDescription,
            setProjectDescription,

            //for editing merch
            merchId,
            setMerchId,
            merchImage,
            setMerchImage,
            merchTitle,
            setMerchTitle,
            merchPrice,
            setMerchPrice,

            //post feed
            postData,
            setPostData,

            //project feed
            projectData,
            setProjectData,

            //merch feed
            merchData,
            setMerchData,

            //for reloading the feed
            reset,
            setReset
        }}>
            {children}
        </UserContext.Provider>
    )
}
