import { useContext, useState } from "react"
import UserContext from "../../context/UserContext"

export default function MerchSection({ EnableMerch, EnableEditMerch, merchData }: any) {
    const {
        setMerchId,
        setMerchImage,
        setMerchTitle,
        setMerchPrice
    } = useContext(UserContext)

    const [userMerch, setUserMerch] = useState<any[]>([]);
    setUserMerch(merchData)

    return (
        <div className="container m-auto pt-20 pb-52 max-w-xl items-center">
            <div className="header flex flex-row border-b-2 border-slate-700 pb-1 pr-6">
                <h1 className="title absolute border-slate-700 pl-2 text-xl font-black text-sky-800">Merch</h1>
                <div className="add relative left-full bottom-1 text-2xl hover:cursor-pointer">
                    <button
                        className="text-cyan-900"
                        onClick={() => EnableMerch(true)}
                    >
                        +
                    </button>
                </div>
            </div>

            <div className="container flex flex-wrap ml-10">

            {userMerch.length === 0 ? <div className="empty mt-4 p-8 text-base text-opacity-60 text-center text-stone-600 font-serif font-thin">Nothing here yet, show us what you got!</div> : 
                userMerch.map(merch =>

                    <div key={merch.id}>
                        <div className="product flex flex-col mt-6 pr-6 mr-4 justify-center items-center">
                            <div className="edit">
                                <img 
                                    className="image mb-2 w-60 font-light pl-2 pr-6 hover:opacity-60 hover:cursor-pointer hover:" 
                                    src={merch.image}
                                    onClick={() => {
                                        setMerchId(merch.id)
                                        setMerchImage(merch.image)
                                        setMerchTitle(merch.title)
                                        setMerchPrice(merch.price)
                                        EnableEditMerch(true)
                                    }}/>
                            </div>
                            <h2 className="title left-3/4 mr-4 font-extrabold text-sm text-slate-700">{merch.title}</h2>
                            <p>R$ {merch.price}</p>
                        </div>
                    </div>

                )
            }

            </div>
        </div>
    )
}