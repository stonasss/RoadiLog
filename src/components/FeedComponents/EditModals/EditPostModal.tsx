import { useState, useContext } from 'react';
import UserContext from '../../../context/UserContext';
import axios from 'axios';
import { loadPosts } from '../../../hooks/loadPosts';

type PostInfo = {
    EditPostShown: any,
    onClose: any,
}

export default function EditPostModal({ EditPostShown, onClose }: PostInfo) {
    const { userData, setPostData, postId, postTitle, postDescription, postLink } = useContext(UserContext)
    const userToken = userData.token.token

    const [title, setTitle] = useState<string>(postTitle);
    const [description, setDescription] = useState<string>(postDescription);
    const [link, setLink] = useState<string>(postLink);

    if (!EditPostShown) return null;

    async function editPost(e: any) {
        e.preventDefault();
        const body = { title, description, link };
        await axios.put(`http://localhost:4000/posts/${postId}`, body, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        })
            .then((res) => {
                setPostData(res.data)
                setTitle('');
                setDescription('');
                setLink('');
                loadPosts();
                onClose();
            })
            .catch((err) => {
                alert(err.message);
                onClose();
            })
    }

    return (
        <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
            <div className="flex flex-col bg-gradient-to-r from-cyan-400 to-cyan-600 p-8 rounded-xl">
                <div className="close relative bottom-7 left-4 text-white text-xl flex justify-end hover:cursor-pointer" onClick={() => onClose()}>
                    <p className="absolute text-sky-100">x</p>
                </div>

                <form onSubmit={editPost} className="flex flex-col justify-center items-center">
                    <div className="flex flex-col mt-3">
                        <label className="text-base mb-1" htmlFor='title'>Subject</label>
                        <input
                            type="text"
                            id="title"
                            className="rounded-lg p-2 placeholder:text-xs"
                            placeholder=""
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col my-4">
                        <label className="text-base mb-1" htmlFor='description'>Description</label>
                        <input
                            type="text"
                            id="description"
                            className="rounded-lg p-2 placeholder:text-xs"
                            placeholder=""
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            required />
                    </div>

                    <div className="flex flex-col my-4">
                        <label className="text-base mb-1" htmlFor='link'>Link</label>
                        <input
                            type="text"
                            id="link"
                            className="rounded-lg p-2 placeholder:text-xs"
                            placeholder=""
                            value={link}
                            onChange={e => setLink(e.target.value)}
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="rounded-full mt-4 font-bold bg-cyan-200 w-[110px] h-[30px] text-sm"
                        >Send Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}