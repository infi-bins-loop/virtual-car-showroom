import React, {useState,useEffect} from "react";
import ReactPlayer from 'react-player';
import { Wrapper,Content } from "./seltos.style";
import AOS from 'aos';
import "aos/dist/aos.css";
import Section from "../Section";
import Interior from "../Interior_Specs_Seltos";
import Specs from "../Spec_seltos";
import Header from "../Header";
import Footer from "../Footer";

const images = [
    {
      src: '/images/seltos_carousel/blue.png',
      alt: 'Image 1',
      description: 'Imperial Blue'
    },
    {
      src: '/images/seltos_carousel/red.png',
      alt: 'Image 2',
      description: 'Intense Red'
    },
    {
      src: '/images/seltos_carousel/black.png',
      alt: 'Image 3',
      description: 'Aurora Black Pearl'
    },
    {
        src: '/images/seltos_carousel/white.png',
        alt: 'Image 2',
        description: 'Glacier White Pearl'
    },
    {
        src: '/images/seltos_carousel/silver.png',
        alt: 'Image 3',
        description: 'Sparkling Silver'
    },
    {
        src: '/images/seltos_carousel/grey.png',
        alt: 'Image 2',
        description: 'Gravity Grey'
    },
    {
        src: '/images/seltos_carousel/green.png',
        alt: 'Image 2',
        description: 'Pewter Olive'
    }
  ];


const SELTOS = () =>{
    document.title = "SELTOS | KIA";
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
            title="SELTOS" 
            backgroundImg="seltos2.jpeg" 
            arrow="true" 
            range='17-20'
            speed='6'
            top='167'
            hp='115'
            />
            <br /><br />
            <div className="video">
                <h1 className="h2" data-aos='fade-right'>Launch - India</h1>
                <br />
                <p style={{maxWidth: 800}}>Dominant, confident, and exhilarating. With a strong, chiseled look and a formidable stance, the new Kia Seltos showcases its Badass traits. Featuring highly powerful and fuel-efficient engine options, along with 32 safety features including 17 autonomous ADAS Level 2 features, the reinvented Seltos has everything it takes to be a Badass on the road.</p>
                <br />
                <ReactPlayer url='https://www.youtube.com/watch?v=q96KKjfwHEE' />
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
                    <li style={{fontSize: 'large',fontWeight: 500}}>All Black Interiors With Exclusive Sage Green Inserts</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Dazzling Crown Jewel LED Headlamps with Star Map LED DRLs & Star Map Sweeping LED Light Guide</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Striking R18 (46.20 cm) Crystal Cut Glossy Black Alloy Wheels</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Remote AC Control</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Voice Controlled Window Function</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Dual-Pane Panoramic Sunroof</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Kia Connect Skill on Amazon Alexa</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>OTA Map & System Update</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Smart Cruise Control with Stop and Go</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Blind Spot Collision Warning</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Front Collision Warning and Avoidance Assist (FCW and FCA)</li>
                    <li style={{fontSize: 'large',fontWeight: 500}}>Lane Keep Assist (LKA)</li>
                </ul>
            </div>
            <Interior/>
            <Specs/>
            <Footer />
        </Wrapper>
    )
}

export default SELTOS;