import { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/UserContext';
import axios from 'axios';

export default function PostSection({ EnablePost }: any) {
    const { userData, postData } = useContext(UserContext)
    const [userPosts, setUserPosts] = useState([])
    const userToken = userData.token.token

    async function loadFeed(): Promise<any> {
        await axios.get(`http://localhost:4000/posts/${userData.image.id}`, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        })
            .then((res) => {
                setUserPosts(res.data.userPosts)
                console.log(userPosts)
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    useEffect(() => {
        loadFeed()
    }, [postData]);

    return (
        <div className="container m-auto pt-20 pb-1 max-w-xl items-center">
            <div className="header flex flex-row border-b-2 border-slate-700 pb-1 pr-6">
                <h1 className="title absolute border-slate-700 pl-2 text-xl font-black text-sky-800">Posts</h1>
                <div className="add relative left-full bottom-1 text-2xl hover:cursor-pointer">
                    <button 
                        className="text-cyan-900"
                        onClick={() => EnablePost(true)}
                    >
                        +
                    </button>
                </div>
            </div>

            <div className="container">
                {userPosts.length === 0 ? <div className="empty mt-4 p-8 text-opacity-60 text-base text-center text-stone-600 font-serif font-thin">Nothing here yet, show us what you got!</div> : 
                    userPosts.map(post => 
                    <>
                        <div className="header mt-6 flex flex-row" key={post}>
                            <h1 className="title absolute font-light border-l-8 pl-2 border-slate-700">{post.title}</h1>
                            <h2 className="date relative left-3/4 font-light text-slate-700">19/06/2023</h2>
                        </div>

                        <p className="description bg-cyan-400 rounded-2xl p-4 mt-4 font-normal text-cyan-900">{post.description}</p>

                        <div className="link mt-4 mb-12 border-r-8 border-slate-700">
                            <a 
                                className="relative left-3/4 font-extrabold"
                                href={post.link}
                            >Check this out!</a>
                        </div>
                    </>
                    )
                }

            </div>
        </div>
    )
}