import { useState, useContext } from 'react';
import UserContext from '../../context/UserContext';
import axios from 'axios';

export default function ProjectSection(): any {
    return (
        <div className="container m-auto pt-20 max-w-xl items-center">
            <div className="header flex flex-row border-b-2 border-slate-700 pb-1 pr-6">
                <h1 className="title absolute border-slate-700 pl-2 text-xl font-black text-sky-800">Projects</h1>
                <div className="add relative left-full bottom-1 text-2xl hover:cursor-pointer">
                    <h2 className="text-cyan-900">+</h2>
                </div>
            </div>

            <div className="container flex flex-row">
                <div className="header mt-6 pr-6 mr-4 border-r-4 border-slate-600">
                    <h1 className="band mb-2 font-light border-l-8 pl-2 border-slate-700">milk & honey</h1>
                    <h2 className="instruments left-3/4 mr-4 font-light text-slate-700">Guitarrist, Drummer, Vocalist, Lyricist</h2>
                </div>

                <p className="description bg-cyan-900 rounded-2xl w-80 mt-6 p-4 font-medium text-sm text-cyan-100">My multi-instrumentalist nature spawned due to this project. Since 2016 I've been embracing DIY in multiple meanings throughout the making of multiple songs and two albums.</p>

            </div>

            <div className="container flex flex-row">
                <div className="header mt-6 pr-6 mr-4 border-r-4 border-slate-600">
                    <h1 className="band mb-2 font-light border-l-8 pl-2 border-slate-700">Um Quarto &#40;¼&#41;</h1>
                    <h2 className="instruments left-3/4 mr-4 font-light text-slate-700">Drummer, Vocalist, Lyricist</h2>
                </div>

                <p className="description bg-cyan-900 rounded-2xl w-80 mt-6 p-4 font-medium text-sm text-cyan-100">Midwest-emo band with some math rock, lyrics in portuguese. Also some sprinkles of brazillian culture here and there. Debut album soon!</p>

            </div>

            <div className="container flex flex-row">
                <div className="header mt-6 pr-6 mr-4 border-r-4 border-slate-600">
                    <h1 className="band mb-2 font-light border-l-8 pl-2 border-slate-700">these atoms are liars</h1>
                    <h2 className="instruments left-3/4 mr-4 font-light text-slate-700">Guitarrist, Drummer, Vocalist, Lyricist, Bassist</h2>
                </div>

                <p className="description bg-cyan-900 rounded-2xl w-80 mt-6 p-4 font-medium text-sm text-cyan-100">Emoviolence band with an unfinished yet-to-be-recorded EP I wrote back in 2018. Intend to have some mathcore influences as well.</p>

            </div>
        </div>
    )
}