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
                        <img src="/images/sonet_carousel/cluster.png" alt="game"/>
                    </div>
                    <div className="col text" data-aos='fade-left'>
                        <h3> 0.7 cm (4.2”) Color Instrument Cluster</h3>
                        <p> Offers detailed car information so that you are always in charge </p>
                    </div>
                </div>
                <div className="row" >
                    <div className="col text1" data-aos='fade-right'>
                        <h3> Wireless Smartphone Charger</h3>
                        <p> For charging a compatible smartphone wirelessly on the pad </p>
                    </div>
                    <div className="col" data-aos='fade-left'> 
                        <img src="/images/sonet_carousel/charge.png" alt="connected"/>
                    </div>
                </div>
                <div className="row" >
                    <div className="col" data-aos='fade-right'> 
                        <img src="/images/sonet_carousel/bose.png"/>
                    </div>
                    <div className="col text" data-aos='fade-left'>
                        <h3> BOSE Premium Sound System with LED Sound Mood Lights</h3>
                        <p> Let your favourite tracks calm you through the chaos on streets</p>
                    </div>
                </div>
                <div className="row" >
                    <div className="col text1" data-aos='fade-right'>
                        <h3> Boss Seat</h3>
                        <p> Enhance your journey with the Boss seat – where comfort meets control. </p>
                    </div>
                    <div className="col" data-aos='fade-left'> 
                        <img src="/images/sonet_carousel/seat.png" alt="connected"/>
                    </div>
                </div>
                <div className="row" >
                    <div className="col" data-aos='fade-right'> 
                        <img src="/images/sonet_carousel/display.png"/>
                    </div>
                    <div className="col text" data-aos='fade-left'>
                        <h3> 26.03 cm (10.25”) HD Touchscreen Navigation</h3>
                        <p> Enables you to stay in command when it comes to finding your way effortlessly</p>
                    </div>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Specs;