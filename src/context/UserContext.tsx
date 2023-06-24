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
    const [postDescription, setPostDescription] = useState([]);
    const [postLink, setPostLink] = useState([]);

    const [reset, setReset] = useState(false)

    return (
        <UserContext.Provider value={{
            userData,
            setUserData,

            postId,
            setPostId,
            postTitle,
            setPostTitle,
            postDescription,
            setPostDescription,
            postLink,
            setPostLink,

            postData,
            setPostData,
            projectData,
            setProjectData,
            merchData,
            setMerchData,

            reset,
            setReset
        }}>
            {children}
        </UserContext.Provider>
    )
}
