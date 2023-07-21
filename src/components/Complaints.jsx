import { useContext } from "react";
import SignContext from "../context/SignContext";

const ContactUs = () =>{
    const {setStep} = useContext();
    return (
        <main>
            <h3>Complaints and Claims</h3>
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
                        <label htmlFor="subject">Claim Type</label>
                        <select id="subject">
                            <option value="">Select your type claim</option>
                            <option value="claim">Claim</option>
                            <option value="complaint">Complaint</option>
                            <option value="congratulations">Congratulation</option>
                        </select>
                        <p className="error">Required</p>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="message">Message</label>
                        <input type="message" id="message"/>
                        <p className="error">Required text</p>
                    </fieldset>
                    <button type="sent">Send</button>
                    </form>
            </div>
            <p>
                Already have an account {""}
                <span onClick={()=>{
                    setStep("complaints");
                }}
                >
                    Contac Us
                </span>
            </p>
        </main>
    );
};

export default ContactUs;