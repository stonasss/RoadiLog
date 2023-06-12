type UserProps = {
    EnableRegister: any,
    EnableLogin: any,
}

export default function MainPageHeader({ EnableRegister, EnableLogin }: UserProps) {
    return (
        <div className="header bg-cyan-600 w-screen h-10 flex justify-around items-center">
            <h1 className="title font-sans font-bold text-lg">RoadiLog</h1>
            <div className="container font-sans flex space-x-4 text-base text-slate-50">

                <h1 
                    className="register hover:text-slate-400 hover:curser-pointer"
                    onClick={() => EnableRegister(true)}
                >
                    Sign Up
                </h1>
                <h2 
                    className="login hover:text-slate-400 hover:curser-pointer"
                    onClick={() => EnableLogin(true)}
                >
                    Sign In
                </h2>

            </div>
        </div>
    )
}