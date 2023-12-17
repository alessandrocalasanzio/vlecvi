import React from "react";
import { css } from "@emotion/react";


import PulseLoader from "react-spinners/PulseLoader";
import HashLoader from "react-spinners/HashLoader";

import logo from "../img/LogoVlecvi.png";
import logo1 from "../img/logo1.png";
import load from "../img/load.jpg";
import { Fade } from "react-reveal";
const override = css`
  display: block;
 
`;

const Loading = () => {
    return(
       
        <div className="sfondoLoading">
        <div align="center">
            <Fade duration={9000}>
        <img className="logoload" src={logo1}/>
        <h1 className="nameload">Vlecvi</h1>
            </Fade>
        </div>
        </div>
       
    )
}

export default Loading;