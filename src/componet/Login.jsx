import { Form } from "react-router-dom";
import Header from "./Header"

const Login = () =>{
   return (
    <div className="relative w-full h-screen">

      {/* Background Image */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/4371a395-0e42-46ae-be36-5755eebc638b/web/IN-en-20260209-TRIFECTA-perspective_3a6d8659-ddfe-4547-9584-dce64c02c230_small.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
     <Form/>

      {/* Header on top of image */}
      <div className="relative z-10 ">
        <Header />
      </div>

    </div>
  );
}

export default Login 
