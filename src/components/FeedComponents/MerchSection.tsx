import { useState, useContext } from 'react';
import UserContext from '../../context/UserContext';
import axios from 'axios';

export default function MerchSection(): any {
    return (
        <div className="container m-auto pt-20 max-w-xl items-center">
            <div className="header flex flex-row border-b-2 border-slate-700 pb-1 pr-6">
                <h1 className="title absolute border-slate-700 pl-2 text-xl font-black text-sky-800">Merch</h1>
                <div className="add relative left-full bottom-1 text-2xl hover:cursor-pointer">
                    <h2 className="text-cyan-900">+</h2>
                </div>
            </div>

            <div className="container flex flex-wrap ml-8">
                <div className="product flex flex-col mt-6 pr-6 mr-4 justify-center items-center">
                    <img className="image mb-2 w-60 font-light pl-2 pr-6" src="https://f4.bcbits.com/img/a0617124739_16.jpg"/>
                    <h2 className="title left-3/4 mr-4 font-extrabold text-sm text-slate-700">The Dying Dog 12" Vinyl</h2>
                    <p>R$ 50</p>
                </div>

                <div className="product flex flex-col mt-6 pr-6 mr-4 justify-center items-center">
                    <img className="image mb-2 w-60 font-light pl-2 pr-6" src="https://f4.bcbits.com/img/a0650041480_16.jpg"/>
                    <h2 className="title left-3/4 mr-4 font-extrabold text-sm text-slate-700">The Yellow Blanket 12" Vinyl</h2>
                    <p>R$ 40</p>
                </div>

                <div className="product flex flex-col mt-6 pr-6 mr-4 justify-center items-center">
                    <img className="image mb-2 w-60 font-light pl-2 pr-6" src="https://f4.bcbits.com/img/a1263509245_16.jpg"/>
                    <h2 className="title left-3/4 mr-4 font-extrabold text-sm text-slate-700">Ao Vivo @ Estúdio Jukebox 7" Vinyl</h2>
                    <p>R$ 30</p>
                </div>

                <div className="product flex flex-col mt-6 pr-6 mr-4 justify-center items-center">
                    <img className="image mb-2 w-60 font-light pl-2 pr-6" src="https://f4.bcbits.com/img/a3399805468_16.jpg"/>
                    <h2 className="title left-3/4 mr-4 font-extrabold text-sm text-slate-700">Do Que Somos Capazes 7" Vinyl</h2>
                    <p>R$ 20</p>
                </div>

            </div>
        </div>
    )
}