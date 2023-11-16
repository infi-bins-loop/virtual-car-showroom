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
                        <img src="/images/carens_carousel/purifier_carens.jpg" alt="game"/>
                    </div>
                    <div className="col text" data-aos='fade-left'>
                        <h3> Smart Pure Air Purifier</h3>
                        <p> Clean cabin-air with protection from harmful virus and bacteria.</p>
                    </div>
                </div>
                <div className="row" >
                    <div className="col text1" data-aos='fade-right'>
                        <h3> Stay Connected </h3>
                        <p> Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop. </p>
                    </div>
                    <div className="col" data-aos='fade-left'> 
                        <img src="/images/carens_carousel/charge_carens.jpg" alt="connected"/>
                    </div>
                </div>
                <div className="row" >
                    <div className="col" data-aos='fade-right'> 
                        <img src="/images/carens_carousel/speaker_carens.jpg"/>
                    </div>
                    <div className="col text" data-aos='fade-left'>
                        <h3> Your Best Audio System </h3>
                        <p>Set the mood right and make every journey epic with an unparalleled audio experience by BOSE Premium Sound System with 8 Speakers  </p>
                    </div>
                </div>
                <div className="row" >
                    <div className="col text1" data-aos='fade-right'>
                        <h3>26.03 cm (10.25’’) HD Touchscreen Navigation</h3>
                        <p>The ideal and futuristic way to stay entertained, navigate, and stay connected with the world.</p>
                    </div>
                    <div className="col" data-aos='fade-left'> 
                        <img src="/images/carens_carousel/display_carens.jpg" alt="connected"/>
                    </div>
                </div>
                <div className="row" >
                    <div className="col" data-aos='fade-right'> 
                        <img src="/images/carens_carousel/seats_carens.jpg"/>
                    </div>
                    <div className="col text" data-aos='fade-left'>
                        <h3> Ventilated Front Seats </h3>
                        <p>Keep it cool as it gets hot outside with the Ventilated Front Seats that make you feel like you are in steering your way through.  </p>
                    </div>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Specs;