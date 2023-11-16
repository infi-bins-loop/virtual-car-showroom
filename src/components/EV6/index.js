import React, {useState,useEffect} from "react";
import ReactPlayer from 'react-player';
import { Wrapper } from "./ev6.style";
import AOS from 'aos'
import "aos/dist/aos.css";
import Section from "../Section";
import Interior from "../Interior_Specs_ev6";
import Specs from "../Spec_ev6";
import Header from "../Header";
import Footer from "../Footer";

const images = [
    {
      src: '/images/ev6_carousel/blue.png',
      alt: 'Image 1',
      description: 'Yatch Blue'
    },
    {
      src: '/images/ev6_carousel/red.png',
      alt: 'Image 2',
      description: 'Runway Red'
    },
    {
      src: '/images/ev6_carousel/black.png',
      alt: 'Image 3',
      description: 'Aurora Black Pearl'
    },
    {
        src: '/images/ev6_carousel/white.png',
        alt: 'Image 2',
        description: 'Snow White Pearl'
    },
    {
        src: '/images/ev6_carousel/silver.png',
        alt: 'Image 3',
        description: 'Moonscape'
    }
  ];


const EV6 = () =>{

    document.title = "EV6 | KIA";
    const [imageIndex, setImageIndex] = useState(0);

    const handleChangeImage = () => {
        setImageIndex((imageIndex + 1) % images.length);
    };
    useEffect(() => {
        AOS.init({duration: 1400});
    }, []);
    const { src, alt, description } = images[imageIndex];
    return(
        <Wrapper>
            <Header/>
            <Section 
                title="EV6" 
                backgroundImg="ev62.jpeg" 
                arrow="true" 
                range='708'
                speed='8'
                hp='260'
                top='320'
            />
            <br /><br />
            <div className="video">
                <h1 className="h2" data-aos='fade-right'>Launch - India</h1>
                <br />
                <p style={{maxWidth: 800}}>The Electric is in the engineering but the EV6 stands for so much more.
It emotes the excitement that comes from its performance.
The powerful all-electric motor’s 605 Nm torque gives instantaneous acceleration,
while a low centre of gravity offers sporty handling, making the EV6 an absolute pleasure to drive.</p>
                <br />
                <ReactPlayer url='https://youtu.be/0z6zcR8UnxA?si=hY_9jFMCnvqyt_zP' />
            </div>
            <br /><br />
            <div className="carousel">
                <h1 className="h2" data-aos='fade-up'>Exterior Design</h1>
                <br />
                <img className="images" src={src} alt={alt} width="1000px" height="400px"/>
                <br />
                <button onClick={handleChangeImage} className="colorbtn">{description}</button>
                <p style={{fontSize: 'small',marginTop: 5}}>Click the button to see all available colours.</p>
                <br /><br />
            </div>
            <div className="features">
                <p className="title">Features</p>
                <br />
                <ul data-aos='fade-right'>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Long distance of 708 km</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Ultra-fast charging with 800V from 10% to 80% in 18 mins</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>High performance of 0-100 kmph in 5.2 secs</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Connected LED Tail Lamps with Sequential Indicators</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>R19 - 48.74 cm (19") Crystal-Cut Alloy Wheels</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>31.24 cm (12.3") Curved Touchscreen Navigation</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Electric Global Modular Platform (E-GMP)</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Vehicle to Load (V2L)</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Surround View Monitoring</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>EV Remote Charging Control</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Smart Power Tailgate</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Shift by Wire</li>
                </ul>
            </div>
            <Interior/>
            <Specs/>
            <Footer bottom='bottom'/>
        </Wrapper>
    )
}

export default EV6;