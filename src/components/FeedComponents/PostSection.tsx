import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import Edit from '../../assets/pencil-outline-edit.svg';

export default function PostSection({ EnablePost, EnableEditPost, postData }: any) {
    const {
        setPostId, 
        setPostTitle, 
        setPostDescription, 
        setPostLink,
    } = useContext(UserContext)

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
                {postData.length === 0 ? <div className="empty mt-4 p-8 text-opacity-60 text-base text-center text-stone-600 font-serif font-thin">Nothing here yet, show us what you got!</div> : 
                    postData.map((post: any) => 

                        <div key={post.id}>
                            <div className='top relative'>
                                <div className="header mt-6 flex flex-row">
                                    <h1 className="title w-1/2 font-light border-l-8 pl-2 border-slate-700">{post.title}</h1>
                                    <h2 className="date absolute w-32 bottom-0 left-3/4 font-light text-slate-700">{post.createdAt.slice(0, 10)}</h2>
                                </div>

                                <img 
                                    src={Edit} 
                                    className='absolute cursor-pointer bottom-0 right-2 w-6'
                                    onClick={() => {
                                        setPostId(post.id)
                                        setPostTitle(post.title)
                                        setPostDescription(post.description)
                                        setPostLink(post.link)
                                        EnableEditPost(true)
                                    }}
                                />
                            </div>

                            <p className="description bg-cyan-400 rounded-2xl p-4 mt-4 font-normal text-cyan-900">{post.description}</p>

                            <div className="link mt-4 mb-12 border-r-8 border-slate-700">
                                <a 
                                    className="relative left-3/4 font-extrabold"
                                    href={post.link}
                                >Check this out!</a>
                            </div>
                        </div>

                    )
                }

            </div>
        </div>
    )
}