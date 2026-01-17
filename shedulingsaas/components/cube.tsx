'use client'

import Starfield from "react-starfield";

const Cube = () => {

    return(
        
        <div className="tech float prevent-select flex min-h-screen flex-col items-center justify-center">
            <div className="master-cube">
                <div className="outside back"></div>
                <div className="outside right"></div>
                <div className="outside left"></div>
                <div className="outside top"></div>
                <div className="outside bottom"></div>
                <div className="outside front"></div>
            </div>
        </div>
        
    )
}

export default Cube;