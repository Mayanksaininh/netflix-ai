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
import { changeLanguage } from "../utils/configSlice";

const Header = () =>{
  const dispatch = useDispatch()
  const Navigate = useNavigate()
  const user = useSelector((store) => store.user)
  const showGPTsearch = useSelector((store) => store.GPT.showGPTsearch)
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

const handleLanguageChange = (e)=>{
  dispatch(changeLanguage(e.target.value))
}


    return <div className="bg-gradient-to-b from-black/90 to-black/20 h-16 flex items-center justify-between px-4 bg-black sm:bg-black md: bg-black flex-wrap">
      <img
      className="h-6 md:h-9"
      src = {LOGO}  alt = "Logo"></img>
      { user && ( <div className="ml-auto">
      <div className="flex items-center gap-1">
        { showGPTsearch && <select className="bg-gray-800 text-white px-2 py-1 text-sm rounded"
         onClick={handleLanguageChange}>
          {supported_lang.map((lang) => (<option key={lang.identifire} value={lang.identifire}>{lang.name}</option>))}
        </select>}
        <button className="text-white bg-purple-600 px-2 py-1 text-sm md:px-3 md:text-base rounded"
        onClick={handleGPTsearchClick}>
          {showGPTsearch ? "Browse page" : "Ask AI"}
          </button>
        <button onClick={handleSignOut}
        className="text-white bg-red-500 px-2 py-1 text-sm md:px-3 md:text-base rounded">Sign Out</button>
      </div>
      </div> )}
      </div>
}

export default Header 