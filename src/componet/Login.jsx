
import Header from "./Header"
import LoginPage from "./loginPage";
import { BacKGround_Image } from "../utils/Constant";

const Login = () =>{
   return (
    <div className="relative w-full h-screen">

      {/* Background Image */}
      <img
        src={BacKGround_Image}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
   

      {/* Header on top of image */}
      <div className="relative z-10 ">
        <Header />
      </div>
      <div className="relative z-10 ">
        <LoginPage />
      </div>

    </div>
  );
}

export default Login 
