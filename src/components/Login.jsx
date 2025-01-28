import { useState } from "react"
import Header from "./Header"
const Login=()=>{

    const [isSignInForm,setIsSignInForm] = useState(true);
    
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm)
    }

    return(
        <div>
            <Header/>
            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg" alt="bg-image"/>
            </div>
            <form className="absolute w-3/12 h-auto flex items-center justify-center left-0 right-0 my-40 mx-auto">
            <div className="w-full p-8 bg-gray-800 bg-opacity-50 border border-gray-600 rounded flex flex-col items-center">
                <h1 className="font-bold text-3xl text-white mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                   {!isSignInForm && ( <input type="text" placeholder="Full Name"
                    className="w-full p-3 mb-4 bg-gray-700 bg-opacity-50 border border-gray-600 rounded text-white focus:outline-none"/>)}
                <input 
                    type="text" 
                    placeholder="Email Address" 
                    className="w-full p-3 mb-4 bg-gray-700 bg-opacity-50 border border-gray-600 rounded text-white focus:outline-none"
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="w-full p-3 mb-4 bg-gray-700 bg-opacity-50 border border-gray-600 rounded text-white focus:outline-none"
                />
                <button className="w-full p-3 mb-4 bg-red-600 bg-opacity-80 text-white rounded hover:bg-red-700 hover:bg-opacity-100">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="p-3 mb-4 text-white cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now..."}</p>
            </div>
            </form>

        </div>
    )
}

export default Login