import React from "react";
import { Wrapper} from "./bookonline.style";
import Header from "../Header"; 
import Footer from "../Footer";

const Bookonline = () =>{
    document.title = "BOOK ONLINE | KIA";
    return(
        <Wrapper>
            <Header/>
            <br /><br />
            <h1 className="h2" >Experience the Kia Showroom</h1><br />
            <div className="video">
                <img src="/images/int_kia3.avif" alt="showroom" className="image2"/>    
                <p className="para" >Meet the new space identity - Customer zone: warm space with a minimalistic and natural sensibility</p>
                <br />
            </div>
            <div className="video">
            <p className="para" >Display zone: Artificial yet expansive</p>
                <img src="/images/int_kia1.avif" alt="showroom" className="image1" />
                <img src="/images/int_kia2.avif" alt="showroom" className="image1" />
                <br />
            </div>
            <div className="video">
            <p className="para1" >Just a few steps from the cars, you’ll find another area where you can sit, look at, and appreciate the cars. From these vantage points, customers can comfortably indulge in Kia vehicles – almost like enjoying art at a gallery.

This area is also directly visible from outside the store, inviting passers-by in, sparking their curiosity, and occasionally turning that curiosity into spontaneous visits.</p>
                <img src="/images/int_kia4.avif" alt="showroom" className="image2" />
                <br />
            </div>
            <Footer />
        </Wrapper>
    )
}

export default Bookonline;