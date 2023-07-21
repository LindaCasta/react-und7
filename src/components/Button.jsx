import React from "react";
import propTypes from "prop-types";
import "../styles/components/_button.scss"


const getStyles= (...args) =>["button", ...args].filter(Boolean). join("");

const Button=  ({children, type}) =>{

    return <button className={getStyles(type)}>{children}</button>
        
};


Button.propTypes = {
    children: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["primary", "secondary", tertiary])
};

export default Button;