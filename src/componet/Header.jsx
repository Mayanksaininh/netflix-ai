import { signOut } from "firebase/auth";
import {auth} from "../utils/Firebase"
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import { addUSer, removeUser } from "../utils/UserSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LOGO } from "../utils/Constant";

const Header = () =>{
  const dispatch = useDispatch()
  const Navigate = useNavigate()
  const user = useSelector((store) => store.user)
  const handleSignOut = () =>{
    signOut(auth).then(() => {
  // Sign-out successful.
  
}).catch((error) => {
  // An error happened.
  Navigate("/error")
});
}


useEffect(() =>{
  const unsbuscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
   
    const {uid , email, dispalyName } = user;
    dispatch(addUSer({uid: uid, email: email, dispalyName: dispalyName}))

    // ...
    Navigate("/browse")
  } else {
    // User is signed out
    dispatch(removeUser()) 
    Navigate("/")
  }
});
// unsubscribe when component unmount 
return () => unsbuscribe

}, [])


    return <div className="bg-gradient-to-b from-black/90 to-black/20 h-16 flex items-center px-4">
      <img
      className="h-14"
      src = {LOGO}  alt = "Logo"></img>
      { user && <div className="ml-auto">
      <div>
        <button onClick={handleSignOut}
        className="text-white bg-red-500 hover:bg-red-700 px-2 py-1 text-sm rounded">Sign Out</button>
      </div>
      </div>}
      </div>
}

export default Header 