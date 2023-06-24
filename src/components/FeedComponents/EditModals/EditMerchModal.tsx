import { useContext } from "react";
import UserContext from "../../../context/UserContext";
import axios from "axios";

type MerchInfo = {
    EditMerchShown: any,
    onClose: any,
}

export default function EditMerchModal({ EditMerchShown, onClose }: MerchInfo) {
    const {
        userData,
        merchId,
        merchImage,
        setMerchImage,
        merchTitle,
        setMerchTitle,
        merchPrice,
        setMerchPrice,
        reset,
        setReset
    } = useContext(UserContext)

    const userToken = userData.token.token

    if (!EditMerchShown) return null;

    async function editMerch(e: any) {
        e.preventDefault();
        const body = { image: merchImage, title: merchTitle, price: merchPrice };
        await axios.put(`http://localhost:4000/merch/${merchId}`, body, {
            headers: {
                Authorization: `Bearer ${userToken}`
            }
        })
            .then(() => {
                setReset(!reset)
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

                <form onSubmit={editMerch} className="flex flex-col justify-center items-center">
                    <div className="flex flex-col mt-3">
                        <label className="text-base mb-1" htmlFor='url'>Product Image</label>
                        <input
                            type="text"
                            id="image"
                            className="rounded-lg p-2 placeholder:text-xs"
                            placeholder=""
                            value={merchImage}
                            onChange={e => setMerchImage(e.target.value)}
                            required />
                    </div>

                    <div className="flex flex-col my-4">
                        <label className="text-base mb-1" htmlFor='title'>Name of Product</label>
                        <input
                            type="text"
                            id="title"
                            className="rounded-lg p-2 placeholder:text-xs"
                            placeholder=""
                            value={merchTitle}
                            onChange={e => setMerchTitle(e.target.value)}
                            required />
                    </div>

                    <div className="flex flex-col my-4">
                        <label className="text-base mb-1" htmlFor='price'>Price</label>
                        <input
                            type="text"
                            id="price"
                            className="rounded-lg p-2 placeholder:text-xs"
                            placeholder=""
                            value={merchPrice}
                            onChange={e => setMerchPrice(e.target.value)}
                            required />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="rounded-full mt-4 font-bold bg-cyan-200 w-[110px] h-[30px] text-sm"
                        >Update Merch</button>
                    </div>
                </form>
            </div>
        </div>
    )

}