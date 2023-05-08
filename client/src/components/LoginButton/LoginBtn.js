import React from "react";
import { useNavigate } from "react-router-dom";
import "../Hero/hero.css";

const LoginBtn = () => {
    const navigate = useNavigate();
    return(
        <>
            <button className="navbarBtn" onClick={() => navigate("/loginreg")}>Login/Register</button>
        </>

    )
}

export default LoginBtn;