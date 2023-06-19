import { useState, useContext, useEffect } from 'react';
import UserContext from '../../context/UserContext';
import axios from 'axios';

export default function MerchSection(): any {
    const { userData } = useContext(UserContext)
    const [userMerch, setUserMerch] = useState([])

    async function loadFeed(): Promise<any> {
        await axios.get(`http://localhost:4000/merch/${userData.image.id}`, userData.token)
            .then((res) => {
                setUserMerch(res.data.userMerch)
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    useEffect(() => {
        loadFeed()
    }, [userData])

    return (
        <div className="container m-auto pt-20 max-w-xl items-center">
            <div className="header flex flex-row border-b-2 border-slate-700 pb-1 pr-6">
                <h1 className="title absolute border-slate-700 pl-2 text-xl font-black text-sky-800">Merch</h1>
                <div className="add relative left-full bottom-1 text-2xl hover:cursor-pointer">
                    <h2 className="text-cyan-900">+</h2>
                </div>
            </div>

            <div className="container flex flex-wrap ml-8">

            {userMerch.map(merch =>
            <>
                <div className="product flex flex-col mt-6 pr-6 mr-4 justify-center items-center">
                    <img className="image mb-2 w-60 font-light pl-2 pr-6" src={merch.image}/>
                    <h2 className="title left-3/4 mr-4 font-extrabold text-sm text-slate-700">{merch.title}</h2>
                    <p>R$ {merch.price}</p>
                </div>
            </>
            )}

            </div>
        </div>
    )
}