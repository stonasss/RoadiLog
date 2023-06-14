type UserProps = {
    EnableRegister: any,
    EnableLogin: any,
    SwitchLogOut: any,
    EnableLogOut: any,
}

export default function MainPageHeader({ EnableRegister, EnableLogin, SwitchLogOut, EnableLogOut }: UserProps) {

    return (
            <div className="header fixed bg-gradient-to-r from-cyan-500 to-blue-500 w-screen h-14 flex">
                <div className="flex mx-auto space-x-96 items-center">
                    <h1 className="title font-sans font-bold text-white text-lg">RoadiLog</h1>
            {!SwitchLogOut ? (
                <>
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
                </>
            ) : (
                <>
                    <div className="container font-sans flex space-x-4 text-base text-slate-50">

                        <button 
                            className="login hover:text-slate-400 hover:cursor-pointer"
                            onClick={() => EnableLogOut(true)}
                        >
                            Log out
                        </button>

                    </div>
                </>
            )}
                </div>
            </div>
    )
}