import React,{useEffect} from "react";
import { Wrapper,Content} from "./testdrive.style";
import AOS from 'aos';
import "aos/dist/aos.css";
import Header from "../Header"; 
import Footer from "../Footer";
import 'bootstrap/dist/css/bootstrap.css';

const Testdrive = () =>{
    document.title = "TEST DRIVE | KIA";
    useEffect(() => {
        AOS.init({duration: 1400});
    }, []);
    const handleClick = (e) => {
        e.preventDefault();
        alert("Are you sure you want to submit?");
      }
    return(
        <Wrapper>
            <Header/>
            <Content>
                <div>
                    <p className="h2" data-aos='fade-right'>Book for Test Drive</p>
                    <div style={{ borderTop: '3px solid white', width: 100, marginTop: 20, marginBottom: 60}} data-aos='fade-right' />
                    <form action="#">
                        <div className="main">
                        <label htmlFor="name" className="label">Full Name:</label>
                        <input type="text" id="name" placeholder="Enter your name" className="input"/>
                        <label htmlFor="phone" className="label">Phone No.:</label>
                        <input type="text" id="phone" placeholder="Enter your phone number" className="input"/>
                        <label htmlFor="email" className="label">Email ID:</label>
                        <input type="text" id="email" placeholder="Enter your email id" className="input"/>
                        <label htmlFor="address" className="label">Address:</label>
                        <textarea name="address" id="address" cols="20" rows="8" placeholder="Enter your address" className="input"></textarea>
                        <label htmlFor="state" className="label">Kia Dealer Place:</label>
                        <select id="state" className="input">
                        <option value="">Select place</option>
                        <option value="andra">Andhra Pradesh</option>
                        <option value="arunachal">Arunachal Pradesh</option>
                        <option value="assam">Assam</option>
                        <option value="bihar">Bihar</option>
                        <option value="chandigarh">Chandigarh</option>
                        <option value="chhattisgarh">Chhattisgarh</option>
                        <option value="delhi">Delhi</option>
                        <option value="goa">Goa</option>
                        <option value="gujarat">Gujarat</option>
                        <option value="haryana">Haryana</option>
                        <option value="himachal">Himachal Pradesh</option>
                        <option value="jammu">Jammu and Kashmir</option>
                        <option value="jharkhand">Jharkhand</option>
                        <option value="karnataka">Karnataka</option>
                        <option value="kerala">Kerala</option>
                        <option value="madhya">Madhya Pradesh</option>
                        <option value="maharashtra">Maharashtra</option>
                        <option value="orissa">Orissa</option>
                        <option value="pondi">Pondicherry</option>
                        <option value="punjab">Punjab</option>
                        <option value="rajasthan">Rajasthan</option>
                        <option value="tamil">Tamil Nadu</option>
                        <option value="telangana">Telangana</option>
                        <option value="uttar">Uttar Pradesh</option>
                        <option value="uttarakhand">Uttarakhand</option>
                        <option value="west">West Bengal</option>
                        </select>
                        <label htmlFor="pin" className="label">Pincode:</label>
                        <input type="text" id="pin" placeholder="Enter your Pincode" className="input"/>
                        <label htmlFor="model" className="label">Kia Model:</label>
                        <select id="model" className="input">
                        <option value="">Select KIA model</option>
                        <option value="carens">Carens</option>
                        <option value="ev6">EV6</option>
                        <option value="seltos">Seltos</option>
                        <option value="sonet">Sonet</option>
                        </select>
                        <label htmlFor="date" className="label">Select Preferred Date:</label>
                        <input type="date" id="date" placeholder="dd/mm/yyyy" className="input"/>
                        <button className="btn btn-outline-light" type="submit" onClick={handleClick}>Submit</button>
                        <br /><br /><br />
                        </div>
                    </form>
                </div>
            </Content>
            <Footer />
        </Wrapper>
    )
}

export default Testdrive;