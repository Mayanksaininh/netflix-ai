import { useState  , useRef} from "react"
import vallidateData from "../utils/Validate"
import {createUserWithEmailAndPassword  , signInWithEmailAndPassword} from "firebase/auth";
import {auth } from "../utils/Firebase"

const LoginPage = ()=> {
 const [IsSignInform,setIsSignInform] = useState(true)
 const [ErrorMessage ,setErrorMessage] = useState(null)

    const email = useRef(null)
    const password = useRef(null)

 const handleButtonClick = () =>{
  //  vallidate the form data 
 const msg = vallidateData(email.current.value , password.current.value)  
 if (msg) {
     setErrorMessage(msg);   // ✅ store error
    return;
  }
  setErrorMessage(null);  
  // console.log("Form Submitted Successfully ✅") 
  if(!IsSignInform) {
    // sign up logic
    
    createUserWithEmailAndPassword (auth, email.current.value , password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + "-" + errorMessage)
  });
  }
  else{
    // sign in logic
    signInWithEmailAndPassword(auth, email.current.value , password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });
  }
 }

  const toggleSignInform = () =>{
   setIsSignInform(!IsSignInform)
  }

  return (
    <div className="bg-black/50 p-6 rounded-xl shadow-md w-full max-w-md mx-auto mt-8 px-6 pt-8">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">{IsSignInform ? "Sign In Your account" : "Sign Up Your account"}</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form 
          
           method="POST" className="space-y-6"
          onSubmit={(e) => {
          e.preventDefault();
          handleButtonClick();
           }}>
             {!IsSignInform  &&  (
              <div>
              <label htmlFor="Name" className="block text-sm/6 font-medium text-gray-100">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id=" Full Name"
                  name="Name"
                  type="Name"
                  required
                  autoComplete = "name"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div> 
          ) }
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">
                Email address
              </label>
              <div className="mt-2">
                <input
                ref = {email}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">
                  Password
                </label>
               
              </div>
              <div className="mt-2">
                <input
                ref = {password}
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
                
              </div>
            </div>

            <div>
             {ErrorMessage && (
               <p className="text-red-500 text-sm text-center font-bold ">
                 {ErrorMessage}
               </p>
                )}
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
               
              >
                {IsSignInform ? "Sign in" : "Sign Up "}
              </button>
            </div>
           <p className="text-center tracking-tight text-white cursor-pointer" onClick={toggleSignInform}> {IsSignInform ? "New User? Sign Up Now..." : "Already user, Sign In Now..."}</p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage