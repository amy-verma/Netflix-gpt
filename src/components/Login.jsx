import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../util/userSlice";
import { auth } from "../utils/firebase";
import { BG_URL, USER_AVATAR } from "../util/constants";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const dispatch = useDispatch();

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick = () => {
        //validete the form data
        const message = checkValidData(
            email.current.value,
            password.current.value
            // console.log(email.current.value)
            // console.log(password)
        );
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            //sign Up Logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL:USER_AVATAR,
                    })
                        .then(() => {
                            const { uid, email, displayName, photoURL } =
                                auth.currentUser;
                            dispatch(
                                addUser({
                                    uid: uid,
                                    email: email,
                                    displayName,
                                    photoURL,
                                })
                            );
                            
                            // Profile updated!
                            // ...
                        })
                        .catch((error) => {
                            setErrorMessage(error.message);
                        });

                    //console.log(user);

                    //
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                    //
                });
        } else {
            //sign in logic
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // console.log(user);
                    

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
    };

    return (
        <div>
            <Header />
            <div className="relative h-screen bg-no-repeat bg-cover">
                 <img src={BG_URL}/>
                
            </div>
            <form 
                onSubmit={(e) => e.preventDefault()}
                className="absolute w-3/12 top-[36%] left-[35%] flex items-center justify-center smx-auto"
            >
                <div className="w-full p-8 bg-gray-800 bg-opacity-50 border border-gray-600 rounded flex flex-col items-center">
                    <h1 className="font-bold text-3xl text-white mb-6">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </h1>
                    {!isSignInForm && (
                        <input
                            ref={name}
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-3 mb-4 bg-gray-700 bg-opacity-50 border border-gray-600 rounded text-white focus:outline-none"
                        />
                    )}
                    <input
                        ref={email}
                        type="text"
                        placeholder="Email Address"
                        className="w-full p-3 mb-4 bg-gray-700 bg-opacity-50 border border-gray-600 rounded text-white focus:outline-none"
                    />
                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 mb-4 bg-gray-700 bg-opacity-50 border border-gray-600 rounded text-white focus:outline-none"
                    />
                    <button
                        className="w-full p-3 mb-4 bg-red-600 bg-opacity-80 text-white rounded hover:bg-red-700 hover:bg-opacity-100"
                        onClick={handleButtonClick}
                    >
                        {isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
                    <p className="text-red-500 font-bold text-lg">
                        {errorMessage}
                    </p>
                    <p
                        className="p-3 mb-4 text-white cursor-pointer"
                        onClick={toggleSignInForm}
                    >
                        {isSignInForm
                            ? "New to Netflix? Sign Up Now"
                            : "Already registered? Sign In Now..."}
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
