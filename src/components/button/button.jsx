import React from "react";
import "./button.styles.scss";

const Button=({props})=> {
    return (
        <button class="button">{props}</button>
    )
}

export default Button