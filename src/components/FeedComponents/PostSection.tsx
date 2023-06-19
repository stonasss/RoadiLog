import { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/UserContext';
import axios from 'axios';

export default function PostSection(): any {
    const { userData } = useContext(UserContext)
    const [userPosts, setUserPosts] = useState([])

    async function loadFeed(): Promise<any> {
        await axios.get(`http://localhost:4000/posts/${userData.image.id}`, userData.token)
            .then((res) => {
                setUserPosts(res.data.userPosts)
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    useEffect(() => {
        loadFeed()
    }, [userData]);

    return (
        <div className="container m-auto pt-20 max-w-xl items-center">
            <div className="header flex flex-row border-b-2 border-slate-700 pb-1 pr-6">
                <h1 className="title absolute border-slate-700 pl-2 text-xl font-black text-sky-800">Posts</h1>
                <div className="add relative left-full bottom-1 text-2xl hover:cursor-pointer">
                    <h2 className="text-cyan-900">+</h2>
                </div>
            </div>

            <div className="container">
                
                {userPosts.map(post => 
                <>
                    <div className="header mt-6 flex flex-row" key={post}>
                        <h1 className="title absolute font-light border-l-8 pl-2 border-slate-700">{post.title}</h1>
                        <h2 className="date relative left-3/4 font-light text-slate-700">19/06/2023</h2>
                    </div>

                    <p className="description bg-cyan-400 rounded-2xl p-4 mt-4 font-normal text-cyan-900">{post.description}</p>

                    <div className="link mt-4 border-r-8 border-slate-700">
                        <a 
                            className="relative left-3/4 font-extrabold"
                            href={post.link}
                        >Check this out!</a>
                    </div>
                </>
                )}

            </div>
        </div>
    )
}