import React,{useEffect} from "react";
import { Wrapper} from "./about.style";
import AOS from 'aos';
import "aos/dist/aos.css";
import Header from "../Header";
import Section from "../Section"; 
import Footer from "../Footer";

const ABOUT = () =>{
    document.title = "ABOUT | KIA";
    useEffect(() => {
        AOS.init({duration: 1400});
    }, []);
    return(
        <Wrapper>
            <Header/>
            <Section  
                backgroundImg="int_kia.avif" 
            />
            <Footer />
        </Wrapper>
    )
}

export default ABOUT;