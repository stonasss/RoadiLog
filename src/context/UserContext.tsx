import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const UserContext = createContext<any>({});
export default UserContext;

export function UserProvider({ children }: any) {
    const [userInfo, setUserInfo] = useLocalStorage('userInfo', {});

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    )
}
