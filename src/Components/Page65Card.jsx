import React from "react";
import ellipse249 from "../images/page65/Ellipse 249.svg"
import accenture from "../images/page65/Accenture-logo 1.png"
const Page65Card = () =>{
    return(

        <div className=" flex flex-column justify-items-center items-center w-80 h-80 rounded-2xl border-orange-200 border-2">
            <div className="self-start">
                <h3>Full-Time</h3>
            </div>

            <img className="w-20 h-20 mt-12" src={ellipse249}/>
            <h2>Smit Thakkar</h2>
            <h3>2017-2022</h3>
            <img className="w-20 h-12" src={accenture}/>
            <h3>Company Name : Accenture</h3>
            <h3>Role :  Associate Developement Manager</h3>

        </div>



    );
}

export default Page65Card

