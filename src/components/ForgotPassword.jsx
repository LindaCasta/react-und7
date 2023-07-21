import { useContext } from "react";
import { useFormik } from "formik";
import SignContext from "../context/SignContext";
import { forgotPasswordShema } from "../schemas/forgotPasswordShema";

const ForgotPassword= ()=>{
    const { setStep} =useContext(SignContext);

    const onSubmit = async (values, actions)=>{
        console.log(values);
        console.log(actions);

        //Simula el envio de datos al backend
        await new Promise((resolve) =>setTimeout(resolve,2000));
        
        //Tiene acceso a los datos del formulario
        console.log(
            "%Exito!",
            "color: YellowGreen",
            `Se ha enviado su password a la cuenta ${values.email}!`
        );

        //Limpia el formulario
        actions.resetForm();
    }
    const { values, 
        errors, 
        handleChange, 
        handleBlur, 
        handleSubmit}
        = useFormik({
        initialValues:{
            email:"",
        },
        validationSchema: forgotPasswordShema, 
        onSubmit,
    });

    
    return(
        <main>
            <h3>Forgot Password?</h3>
            <div className= "card">
                <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                    <fieldset>
                        <label htmlFor="email">Email</label>
                        <input 
                        type="email" 
                        id="email" 
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoFocus
                        className={ errors.email? "error-message" : ""}
                        />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                        <p className="error-message">Valid email requerid</p>
                    </fieldset>
                    <button disabled={isSubmitting} type="submit">
                        Remember me</button>
                </form>
            </div>
            <p>Already have account? {" "}
                <span 
                onClick={()=>{
                setStep("signin");
                }}
                >
                Sign In!
                </span>
            </p>
        </main> 
    );
};
export default ForgotPassword