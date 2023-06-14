type UserProps = {
    EnableRegister: any,
    EnableLogin: any,
}

export default function MainPageHeader({ EnableRegister, EnableLogin }: UserProps) {
    return (
        <div className="header fixed bg-cyan-600 w-screen h-10 flex">
            <div className="flex mx-auto space-x-96 items-center">
                <h1 className="title font-sans font-bold text-white text-lg">RoadiLog</h1>
                <div className="container font-sans flex space-x-4 text-base text-slate-50">

                    <button 
                        className="register hover:text-slate-400 hover:cursor-pointer"
                        onClick={() =>EnableRegister(true)}
                    >
                        Sign Up
                    </button>

                    <button 
                        className="login hover:text-slate-400 hover:cursor-pointer"
                        onClick={() => EnableLogin(true)}
                    >
                        Sign In
                    </button>

                </div>
            </div>
        </div>
    )
}