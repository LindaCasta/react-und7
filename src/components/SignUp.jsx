import { useContext } from "react";
import {Formik} from "formik";
import SignContext from "../context/SignContext";

const initialValues = {
    fullName: "",
    email:"",
    password:"",
    confirm:"",
    framework: "",
    terms:false,
};

const SignUp = () =>{
    const {setStep} = useContext();
    return (
        <main>
            <h3>Registration Form</h3>
            <div className="card">
                <Formik initialValues={initialValues}>
                <form autocomplete="off">
                    <fieldset>
                        <label htmlFor="fullName">Full name</label>
                        <input type="text" id="fullName"/>
                        <p className="error">Required</p>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                        <p className="error">Valid email required</p>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"/>
                        <p className="error">Password required</p>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="confirm">Confirm password</label>
                        <input type="password" id="confirm"/>
                        <p className="error">Required</p>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="framework">Favorite framework</label>
                        <select id="framework">
                            <option value="">Select you Framework</option>
                            <option value="react">React</option>
                            <option value="vue">Vue</option>
                            <option value="angular">AngularJS</option>
                        </select>
                        <p className="error">Required</p>
                    </fieldset>.
                    <fieldset>
                        <label htmlFor="terms">
                            <input type="checkbox" id="terms"/>Acept terms and conditions
                        </label>
                        <p className="error">Required</p>
                    </fieldset>
                    <button type="submit">register</button>
                    </form>
                    </Formik>
            </div>
            <p>
                Already have an account {""}
                <span onClick={()=>{
                    setStep("signin");
                }}
                >
                    Sign in
                </span>
            </p>
        </main>
    );
};

export default SignUp;