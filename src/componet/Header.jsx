import { signOut } from "firebase/auth";
import {auth} from "../utils/Firebase"
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import { addUSer, removeUser } from "../utils/UserSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LOGO, supported_lang } from "../utils/Constant";
import { toggleGPTSearchView } from "../utils/GPTSlice";
import lang from "../utils/languageConstant";

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
   
    const {uid , email, displayName } = user;
    dispatch(addUSer({uid: uid, email: email, displayName: displayName}))

    // ...
    Navigate("/browse")
  } else {
    // User is signed out
    dispatch(removeUser()) 
    Navigate("/")
  }
});
// unsubscribe when component unmount 
return () => unsbuscribe()

}, [])

const handleGPTsearchClick = () =>{
  // Toggle GPT search button
  dispatch(toggleGPTSearchView())
}


    return <div className="bg-gradient-to-b from-black/90 to-black/20 h-16 flex items-center px-4 bg-black">
      <img
      className="h-14"
      src = {LOGO}  alt = "Logo"></img>
      { user && ( <div className="ml-auto">
      <div>
        <select className="bg-gray-800 text-white px-2 py-1 rounded mr-3">
          {supported_lang.map((lang) => (<option key={lang.identifire} value={lang.identifire}>{lang.name}</option>))}
        </select>
        <button className="text-white bg-purple-600 hover:bg-purple-800 px-3 py-1 text-base mr-3 rounded" 
        onClick={handleGPTsearchClick}>Ask AI</button>
        <button onClick={handleSignOut}
        className="text-white bg-red-500 hover:bg-red-700 px-2 py-1 text-sm rounded">Sign Out</button>
      </div>
      </div> )}
      </div>
}

export default Header 