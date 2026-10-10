import React from "react";

import logo1 from "../img/Generale/logo1.png";

const Loading = () => {
    return(

        <div className="sfondoLoading">
        <div align="center">
        <img className="logoload" src={logo1} alt="Vlecvi" data-aos="fade" data-aos-duration="9000" />
        <h1 className="nameload" data-aos="fade" data-aos-duration="9000">Vlecvi</h1>
        </div>
        </div>
       
    )
}

export default Loading;