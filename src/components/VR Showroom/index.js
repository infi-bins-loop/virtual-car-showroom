import React,{useEffect} from "react";
import { Wrapper} from "./vrshowroom.style";
import AOS from 'aos';
import "aos/dist/aos.css";
import Header from "../Header";
import Section from "../Section"; 
import Footer from "../Footer";

const VRSHOWROOM = () =>{
    document.title = "VR SHOWROOM | KIA";
    useEffect(() => {
        AOS.init({duration: 1400});
    }, []);
    return(
        <Wrapper>
            <Header/>
            <Section  
                backgroundImg="int_kia.avif" 
            />
            <br /><br />
            <h1 className="h2" data-aos='fade-right'>Experience the Kia Showroom</h1><br />
            <div className="video">
                <img src="/images/int_kia3.avif" alt="showroom" className="image2"/>    
                <p className="para" data-aos='fade-right'>Meet the new space identity - Customer zone: warm space with a minimalistic and natural sensibility</p>
                <br />
            </div>
            <div className="video">
            <p className="para" data-aos='fade-right'>Display zone: Artificial yet expansive</p>
                <img src="/images/int_kia1.avif" alt="showroom" className="image1" />
                <img src="/images/int_kia2.avif" alt="showroom" className="image1" />
                <br />
            </div>
            <div className="video">
            <p className="para1" data-aos='fade-right'>Just a few steps from the cars, you’ll find another area where you can sit, look at, and appreciate the cars. From these vantage points, customers can comfortably indulge in Kia vehicles – almost like enjoying art at a gallery.

This area is also directly visible from outside the store, inviting passers-by in, sparking their curiosity, and occasionally turning that curiosity into spontaneous visits.</p>
                <img src="/images/int_kia4.avif" alt="showroom" className="image2" />
                <br />
            </div>
            <Footer />
        </Wrapper>
    )
}

export default VRSHOWROOM;