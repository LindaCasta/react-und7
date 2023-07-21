import { useContext } from "react";
import SignContext from "../context/SignContext";

const ContactUs = () =>{
    const {setStep} = useContext();
    return (
        <main>
            <h3>Contact Us</h3>
            <div className="card">
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
                        <label htmlFor="message">Message</label>
                        <input type="message" id="message"/>
                        <p className="error">Required text</p>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="subject">Subject of interest</label>
                        <select id="subject">
                            <option value="">Select your topic of interest</option>
                            <option value="react">React</option>
                            <option value="vue">Vue</option>
                            <option value="angular">AngularJS</option>
                        </select>
                        <p className="error">Required</p>
                    </fieldset>.
                    <button type="sent">Send</button>
                    </form>
            </div>
            <p>
                Already have an account {""}
                <span onClick={()=>{
                    setStep("contactus");
                }}
                >
                    Contac Us
                </span>
            </p>
        </main>
    );
};

export default ContactUs;