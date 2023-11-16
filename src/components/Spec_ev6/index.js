import React,{ useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";

import { Wrapper,Content } from "./spec.style";

const Specs = () =>{

    useEffect(() => {
        AOS.init({duration: 1400});
        AOS.refresh();
    }, []);


    return(
        <Wrapper>
            <Content>
                <div className="row" >
                    <div className="col" data-aos='fade-right'> 
                        <img src="/images/ev6_carousel/mode.png" alt="game"/>
                    </div>
                    <div className="col text" data-aos='fade-left'>
                        <h3> Drive Modes </h3>
                        <p> Choose from Normal, Sport or Eco drive modes. Each mode provides a significant performance change to suit the requirement along with a unique driver interface. </p>
                    </div>
                </div>
                <div className="row" >
                    <div className="col text1" data-aos='fade-right'>
                        <h3> Sustainable Material </h3>
                        <p> The upholstery makes use of sustainable suede and vegan leather while the cabin uses adbundant recycled and durable materials.</p>
                    </div>
                    <div className="col" data-aos='fade-left'> 
                        <img src="/images/ev6_carousel/seats.png" alt="connected"/>
                    </div>
                </div>
                <div className="row" >
                    <div className="col" data-aos='fade-right'> 
                        <img src="/images/ev6_carousel/roof.png"/>
                    </div>
                    <div className="col text" data-aos='fade-left'>
                        <h3> Wide Electric Sunroof </h3>
                        <p> The roomy dimensions of the KIA EV6 seem to expand with the wide sunroof. </p>
                    </div>
                </div>
                <div className="row" >
                    <div className="col text1" data-aos='fade-right'>
                        <h3> Body Coloured Exterior Flush Door Handles - Automatic </h3>
                        <p> The seamlessly designed auto-door handles are hidden inside the door and pop-out as you approach it with the smart key.</p>
                    </div>
                    <div className="col" data-aos='fade-left'> 
                        <img src="/images/ev6_carousel/handle.png" alt="connected"/>
                    </div>
                </div>
                <div className="row" >
                    <div className="col" data-aos='fade-right'> 
                        <img src="/images/ev6_carousel/aerodynamics.png"/>
                    </div>
                    <div className="col text" data-aos='fade-left'>
                        <h3> Aerodynamics </h3>
                        <p> The super sleek design with active air flaps and aerodynamic enhancements make EV6 move quickly and efficiently. </p>
                    </div>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Specs;