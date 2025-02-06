import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../util/userSlice";
import { toggleGptSearchView } from "../util/gptSlice";
import { SUPPORTED_LNGUAGES } from "../util/constants";
import lang from "../util/languageConstants";
import { changeLanguage } from "../util/configSlice";

const Header = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                console.log(error);
                // An error happened.
                navigate("/error`");
            });
    };
    // eslint-disable-next-line no-unused-vars
    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLanguageChange = (e) => {
        // console.log(e.target.value);
        dispatch(changeLanguage(e.target.value))
    };

    return (
        <div className="absolute left-0 right-0 flex bg-gradient-to-br from-black z-10 rounded-none">
            {/* //<img className="w-44" src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="logo"/> */}
            {/* <img className="w-44" src="../public/images/logo.png" alt="logo"/> */}
            <h2 className="font-bold w-screen text-red-600 text-3xl pl-2 my-10">
                WATCHFLIX
            </h2>
            {user && (
                <div className="flex items-center ml-auto space-x-4 mr-16">
                    <select
                        onChange={handleLanguageChange}
                        className="p-2 m-2 bg-gray-900 text-white"
                    >
                        {SUPPORTED_LNGUAGES.map((lang) => (
                            <option
                                key={lang.identifier}
                                value={lang.identifier}
                            >
                                {lang.name}
                            </option>
                        ))}
                    </select>
                    <button
                        onClick={handleGptSearchClick}
                        className="text-white py-1 px-4  my-2 bg-purple-800 rounded-xl whitespace-nowrap"
                    >
                        GPT Search
                    </button>
                    <img
                        className="w-12 h-12"
                        src={user?.photoURL}
                        alt="logout-logo"
                    />
                    <button
                        className="text-white font-bold whitespace-nowrap"
                        onClick={handleSignOut}
                    >
                        (Sign Out)
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
