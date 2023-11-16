import React, {useState,useEffect} from "react";
import ReactPlayer from 'react-player';
import { Wrapper } from "./sonet.style";
import AOS from 'aos';
import "aos/dist/aos.css";
import Section from "../Section";
import Interior from "../Interior_Specs_Sonet";
import Specs from "../Spec_sonet";
import Header from "../Header";
import Footer from "../Footer";

const images = [
    {
      src: '/images/sonet_carousel/blue.png',
      alt: 'Image 1',
      description: 'Imperial Blue'
    },
    {
      src: '/images/sonet_carousel/red.png',
      alt: 'Image 2',
      description: 'Intense Red'
    },
    {
      src: '/images/sonet_carousel/black.png',
      alt: 'Image 3',
      description: 'Aurora Black Pearl'
    },
    {
        src: '/images/sonet_carousel/white.png',
        alt: 'Image 2',
        description: 'Glacier White Pearl'
    },
    {
        src: '/images/sonet_carousel/silver.png',
        alt: 'Image 3',
        description: 'Sparkling Silver'
    },
    {
        src: '/images/sonet_carousel/grey.png',
        alt: 'Image 2',
        description: 'Gravity Grey'
    }
  ];

const SONET = () =>{
    document.title = "SONET | KIA";
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
                title="SONET" 
                backgroundImg="sonet2.jpeg" 
                arrow="true" 
                range='18-19'
                speed='6'
                top='180'
                hp='85'
            />
            <br /><br />
            <div className="video">
                <h1 className="h2" data-aos='fade-right'>Launch - India</h1>
                <br />
                <p style={{maxWidth: 800}}>We bring to you a whole new wild species to rule this urban jungle, Kia Sonet!
With its aggressive design and latest first-in-class features, we’re ready to take your experience to
The Next Level of Wild</p>
                <br />
                <ReactPlayer url='https://youtu.be/LjD7MjzjG0k?si=K6TQtWVcX7amqENd' />
            </div>
            <br /><br />
            <div className="carousel">
                <h1 className="h2" data-aos='fade-up'>Exterior Design</h1>
                <br />
                <img className="images" src={src} alt={alt} width="900px" height="400px"/>
                <br />
                <button onClick={handleChangeImage} className="colorbtn">{description}</button>
                <p style={{fontSize: 'small',marginTop: 5}}>Click the button to see all available colours.</p>
                <br /><br />
            </div>
            <div className="features">
                <p className="title">Features</p>
                <br />
                <ul data-aos='fade-right'>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Heartbeat Led Headlamps and Tail Lamps</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>All Wheel Disc Brakes</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>R 16 - 40.64 Cm (16’’) Crystal Cut Alloys</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Kia Connect Controlled Smart Pure Air Purifier#</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Highline Tyre Pressure Monitoring System</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Electric Sunroof</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Rear Door Sunshade Curtain</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>OTA Map & System Update</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>392 l Boot Space</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Electronic Stability Control (ESC)</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Anti-lock Brake System (ABS) with Electronic Brake-force Distribution (EBD)</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Hill Assist Control (HAC)</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Brake-force Assist System</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Front and Rear Parking Sensors</li>
                </ul>
            </div>
            <Interior/>
            <Specs/>
            <Footer />
        </Wrapper>
    )
}

export default SONET;