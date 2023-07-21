import { useState} from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword"
import SignContext from "./context/SignContext";
import ContactUs from "./components/ContactUs";
import Complaints from "./components/Complaints";
import Button from "./components/Button";


function App() {
  const [step, setStep] = useState("signup");
    return (
      <SignContext.Provider value={{step, setStep}} >
        <div className = "container">
         {step=== "signin" && <SignIn/>}
         {step=== "signup" && <SignUp />}
         {step === "forgotpassword"&&  <ForgotPassword />}
         {step=== "contactus" && <ContactUs/>}
         {step === "complaints" && <Complaints/>}
        </div>
        <Button>Learn React</Button>
      </SignContext.Provider>
  );
}

export default App;
