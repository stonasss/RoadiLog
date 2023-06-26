import { useState, useContext } from "react";
import UserContext from "../../../context/UserContext";
import axios from "axios";

type MerchInfo = {
    MerchShown: any;
    onClose: any;
};

export default function MerchModal({ MerchShown, onClose }: MerchInfo) {
    const [image, setImage] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [price, setPrice] = useState<string>("");

    const { userData, reset, setReset } = useContext(UserContext);
    const userToken = userData.token.token;

    if (!MerchShown) return null;

    async function submitMerch(e: any) {
        e.preventDefault();
        const body = { image, title, price };
        await axios
            .post(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/merch/new`, body, {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
            })
            .then(() => {
                setImage("");
                setTitle("");
                setPrice("");
                setReset(!reset);
                onClose();
            })
            .catch((err) => {
                alert(err.message);
                onClose();
            });
    }

    return (
        <div className="fixed inset-0 bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
            <div className="flex flex-col bg-gradient-to-r from-cyan-400 to-cyan-600 p-8 rounded-xl">
                <div
                    className="close relative bottom-7 left-4 text-white text-xl flex justify-end hover:cursor-pointer"
                    onClick={() => onClose()}
                >
                    <p className="absolute text-sky-100">x</p>
                </div>

                <form
                    onSubmit={submitMerch}
                    className="flex flex-col justify-center items-center"
                >
                    <div className="flex flex-col mt-3">
                        <label className="text-base mb-1" htmlFor="image">
                            Picture
                        </label>
                        <input
                            type="text"
                            id="image"
                            className="rounded-lg p-2 placeholder:text-xs"
                            placeholder=""
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex flex-col my-4">
                        <label className="text-base mb-1" htmlFor="title">
                            Product Name
                        </label>
                        <input
                            type="text"
                            id="title"
                            className="rounded-lg p-2 placeholder:text-xs"
                            placeholder=""
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex flex-col my-4">
                        <label className="text-base mb-1" htmlFor="price">
                            Price
                        </label>
                        <input
                            type="text"
                            id="price"
                            className="rounded-lg p-2 placeholder:text-s"
                            placeholder="Numbers only please!"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="rounded-full mt-4 font-bold bg-cyan-200 w-[110px] h-[30px] text-sm"
                        >
                            Send Merch
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
