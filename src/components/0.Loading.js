import React from "react";

import logo1 from "../img/Generale/logo1.png";
import { Fade } from "react-reveal";

const Loading = () => {
    return(

        <div className="sfondoLoading">
        <div align="center">
            <Fade duration={9000}>
        <img className="logoload" src={logo1} alt="Vlecvi" />
        <h1 className="nameload">Vlecvi</h1>
            </Fade>
        </div>
        </div>
       
    )
}

export default Loading;