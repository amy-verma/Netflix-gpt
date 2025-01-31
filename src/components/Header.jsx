import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header=()=>{

  const navigate=useNavigate();
  const user=useSelector(store=>store.user);

    const handleSignOut=()=>{
        signOut(auth).then(() => {
          // Sign-out successful.
          navigate("/")
        }).catch((error) => {
          console.log(error)
          // An error happened.
          navigate("/error`")
        });
    }

    return(
        <div className="absolute left-0 right-0 flex bg-gradient-to-br from-black z-10 rounded-none">
          {/* //<img className="w-44" src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="logo"/> */}
          {/* <img className="w-44" src="../public/images/logo.png" alt="logo"/> */}
          <h2 className="font-bold w-screen text-red-600 text-5xl pl-2 my-10">WATCHFLIX</h2>
         {user &&  (<div className="flex items-center mr-3">
            <img className="w-auto h-12" src={user?.photoURL} alt="logout-logo"/>
            <button className="text-white font-bold" onClick={handleSignOut}>(Sign Out)</button>
          </div>)}
        </div>  
      )
}

export default Header