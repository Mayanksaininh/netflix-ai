import Browse from "./Browse"
import Login from "./Login"
import { createBrowserRouter} from "react-router";
import { RouterProvider} from "react-router/dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUSer, removeUser } from "../utils/UserSlice";
import { useEffect } from "react";
import Error from "./Error";

const Body = ()=>{
  const dispatch = useDispatch()
   const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path : "/browse",
    element : <Browse/>
  },
  {
    path : "/error",
    element : <Error/>
  }
]);

useEffect(() =>{
  onAuthStateChanged(auth, (user) => {
  if (user) {
   
    const {uid , email, dispalyName } = user;
    dispatch(addUSer({uid: uid, email: email, dispalyName: dispalyName}))

    // ...
  } else {
    // User is signed out
    dispatch(removeUser()) 
  }
});
}, [])


    return <div>
         <RouterProvider router={approuter} />
 </div>
    
}

export default Body 