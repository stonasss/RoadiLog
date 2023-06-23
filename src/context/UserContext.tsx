import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const UserContext = createContext<any>({});
export default UserContext;

export function UserProvider({ children }: any) {
    const [userData, setUserData] = useLocalStorage('userData', {});

    const [postData, setPostData] = useLocalStorage('postData', []);
    const [projectData, setProjectData] = useLocalStorage('projectData', []);
    const [merchData, setMerchData] = useLocalStorage('merchData', []);

    const [postId, setPostId] = useLocalStorage('postId', {})
    const [postTitle, setPostTitle] = useLocalStorage('postTitle', {})
    const [postDescription, setPostDescription] = useLocalStorage('postDescription', {})
    const [postLink, setPostLink] = useLocalStorage('postLink', {})

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
            setMerchData
        }}>
            {children}
        </UserContext.Provider>
    )
}
