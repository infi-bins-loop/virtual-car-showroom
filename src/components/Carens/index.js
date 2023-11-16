import React, {useState,useEffect} from "react";
import ReactPlayer from 'react-player';
import { Wrapper } from "./carens.style";
import AOS from 'aos'
import "aos/dist/aos.css";
import Section from "../Section";
import Interior from "../Interior_Specs_Carens";
import Specs from "../Spec_Carens";
import Header from "../Header";
import Footer from "../Footer";

const images = [
    {
      src: '/images/carens_carousel/blue.png',
      alt: 'Image 1',
      description: 'Imperial Blue'
    },
    {
      src: '/images/carens_carousel/red.png',
      alt: 'Image 2',
      description: 'Intense Red'
    },
    {
      src: '/images/carens_carousel/black.png',
      alt: 'Image 3',
      description: 'Aurora Black Pearl'
    },
    {
        src: '/images/carens_carousel/white.png',
        alt: 'Image 2',
        description: 'Glacier White Pearl'
    },
    {
        src: '/images/carens_carousel/silver.png',
        alt: 'Image 3',
        description: 'Sparkling Silver'
    },
    {
        src: '/images/carens_carousel/grey.png',
        alt: 'Image 2',
        description: 'Gravity Grey'
    }
  ];

const CARENS = () =>{
    document.title = "CARENS | KIA";
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
                title="CARENS" 
                backgroundImg="carens1.jpg" 
                arrow="true" 
                range='16-20'
                speed='6'
                hp='160'
                top='174'
            />
            <br /><br />
            <div className="video">
                <h1 className="h2" data-aos='fade-right'>Launch - India</h1>
                <br />
                <p style={{maxWidth: 800}}>Future calls out to those who are from a different world. The Kia Carens is hi-tech by design and inspiring by nature. It is futuristic sophistication clothed in bold and edgy armor with many class-leading features. So get ready to step into a different world.</p>
                <br />
                <ReactPlayer url='https://www.youtube.com/watch?v=uedB66CQw_I' />
            </div>
            <br /><br />
            <div className="carousel">
                <h1 className="h2" data-aos='fade-up'>Exterior Design</h1>
                <br />
                <img className="images" src={src} alt={alt} width="800px" height="400px"/>
                <br />
                <button onClick={handleChangeImage} className="colorbtn">{description}</button>
                <p style={{fontSize: 'small',marginTop: 5}}>Click the button to see all available colours.</p>
                <br /><br />
            </div>
            <div className="features">
                <p className="title">Features</p>
                <br />
                <ul data-aos='fade-right'>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Star Map LED Headlamps and Tail Lamps</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>All Wheel Disc Brakes</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>R16 – 40.62 cm (16’’) Dual Tone Crystal Cut Alloy Wheels</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>ESC, VSM, BAS, HAC, DBC & ABS</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Highline Tyre Pressure Monitoring System</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Voice Controlled Sky Light Sunroof</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Kia Connect Skill on Amazon Alexa</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>OTA Map & System Update</li>
                </ul>
            </div>
            <Interior/>
            <Specs/>
            <Footer />
        </Wrapper>
    )
}

export default CARENS;