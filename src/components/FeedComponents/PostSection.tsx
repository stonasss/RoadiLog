import { useState, useContext } from 'react';
import UserContext from '../../context/UserContext';
import axios from 'axios';

export default function PostSection(): any {
    return (
        <div className="container m-auto pt-20 max-w-xl items-center">
            <div className="header flex flex-row border-b-2 border-slate-700 pb-1 pr-6">
                <h1 className="title absolute border-slate-700 pl-2 text-xl font-black text-sky-800">Posts</h1>
                <div className="add relative left-full bottom-1 text-2xl hover:cursor-pointer">
                    <h2 className="text-cyan-900">+</h2>
                </div>
            </div>

            <div className="container">
                <div className="header mt-6 flex flex-row">
                    <h1 className="title absolute font-light border-l-8 pl-2 border-slate-700">New milk & honey single</h1>
                    <h2 className="date relative left-3/4 font-light text-slate-700">19/06/2023</h2>
                </div>

                <p className="description bg-cyan-400 rounded-2xl p-4 mt-4 font-normal text-cyan-900">This new song should scratch that acoustic emo itch for anyone wondering if they would ever manage to do so in 2023.</p>

                <div className="link mt-4 border-r-8 border-slate-700">
                    <a 
                        className="relative left-3/4 font-extrabold"
                        href="https://milkemohoney.bandcamp.com/track/my-kind-of-animal"
                    >Check this out!</a>
                </div>
            </div>
        </div>
    )
}