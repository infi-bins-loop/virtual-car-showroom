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
                        <img src="/images/seltos_carousel/display_seltos.jpg" alt="game"/>
                    </div>
                    <div className="col text" data-aos='fade-left'>
                        <h3> Intuitive 26.03 cm (10.25’’) HD Touchscreen Navigation + Full Digital Cluster with 26.04 cm (10.25”) Color LCD MID </h3>
                        <p> Explore limitless possibilities with the Intuitive 26.03 cm HD Touchscreen and Digital Cluster.</p>
                    </div>
                </div>
                <div className="row" >
                    <div className="col text1" data-aos='fade-right'>
                        <h3> Comfortable Front Ventilated Seats with 8-way Power Driver’s Seat </h3>
                        <p> Indulge in luxury with Comfortable Front Ventilated Seats. Experience continuous airflow and embrace comfort, transforming each drive into rejuvenation. </p>
                    </div>
                    <div className="col" data-aos='fade-left'> 
                        <img src="/images/seltos_carousel/seats_seltos.png" alt="connected"/>
                    </div>
                </div>
                <div className="row" >
                    <div className="col" data-aos='fade-right'> 
                        <img src="/images/seltos_carousel/ac_seltos.png"/>
                    </div>
                    <div className="col text" data-aos='fade-left'>
                        <h3> Remote AC control </h3>
                        <p> Experience the future of climate control with the Intelligent Dual Zone AC. With Remote AC Control in the Seltos, your comfort begins the moment you step in, helping you stay ahead of the weather for a more welcoming experience.</p>
                    </div>
                </div>
                <div className="row" >
                    <div className="col text1" data-aos='fade-right'>
                        <h3>Voice Controlled Window Function </h3>
                        <p> Experience the future of control with Voice Controlled Window Function. A simple command brings the world to your fingertips, making every journey effortless and truly hands-free. </p>
                    </div>
                    <div className="col" data-aos='fade-left'> 
                        <img src="/images/seltos_carousel/window.png" alt="connected"/>
                    </div>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Specs;