import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const UserContext = createContext<any>({});
export default UserContext;

export function UserProvider({ children }: any) {
    const [userData, setUserData] = useLocalStorage('userData', {});
    const [postData, setPostData] = useLocalStorage('postData', {});
    const [projectData, setProjectData] = useLocalStorage('projectData', {});
    const [merchData, setMerchData] = useLocalStorage('merchData', {});

    return (
        <UserContext.Provider value={{ 
            userData,
            setUserData,
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
