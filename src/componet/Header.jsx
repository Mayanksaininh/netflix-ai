import { signOut } from "firebase/auth";
import {auth} from "../utils/Firebase"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () =>{
  const Navigate = useNavigate()
  const user = useSelector((store) => store.user)
  const handleSignOut = () =>{
    signOut(auth).then(() => {
  // Sign-out successful.
  Navigate("/")
}).catch((error) => {
  // An error happened.
  Navigate("/error")
});
  }
    return <div className="bg-gradient-to-b from-black/90 to-black/20 h-16 flex items-center px-4">
      <img
      className="h-14"
      src = "https://cisurveys.decipherinc.com/survey/selfserve/53b/logo_2020.png"  alt = "Logo"></img>
      { user && <div className="ml-auto">
      <div>
        <button onClick={handleSignOut}
        className="text-white bg-red-500 hover:bg-red-700 px-2 py-1 text-sm rounded">Sign Out</button>
      </div>
      </div>}
      </div>
}

export default Header 