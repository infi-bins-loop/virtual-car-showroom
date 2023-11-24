import React,{useEffect,useState} from "react";
import { Wrapper,Content} from "./bookonline.style";
import AOS from 'aos';
import "aos/dist/aos.css";
import Header from "../Header"; 
import Footer from "../Footer";
import 'bootstrap/dist/css/bootstrap.css';

const Bookonline = () =>{
    document.title = "BOOK ONLINE | KIA";
    useEffect(() => {
        AOS.init({duration: 1400});
    }, []);
    const handleClick = (e) => {
        e.preventDefault();
        alert("Are you sure you want to submit?");
      }
      const models = [
        {id:'1',name:'Carens'},
        {id:'2',name:'EV6'},
        {id:'3',name:'Seltos'},
        {id:'4',name:'Sonet'}
      ];
      const colors =[
        {id:'1',modelId:'1',name:'Imperial Blue'},
        {id:'2',modelId:'1',name:'Intense Red'},
        {id:'3',modelId:'1',name:'Aurora Black Pearl'},
        {id:'4',modelId:'1',name:'Glacier White Pearl'},
        {id:'5',modelId:'1',name:'Sparkling Silver'},
        {id:'6',modelId:'1',name:'Gravity Grey'},
        {id:'7',modelId:'2',name:'Yatch Blue'},
        {id:'8',modelId:'2',name:'Runway Red'},
        {id:'9',modelId:'2',name:'Aurora Black Pearl'},
        {id:'10',modelId:'2',name:'Snow White Pearl'},
        {id:'11',modelId:'2',name:'Moonscape'},
        {id:'12',modelId:'3',name:'Imperial Blue'},
        {id:'13',modelId:'3',name:'Intense Red'},
        {id:'14',modelId:'3',name:'Aurora Black Pearl'},
        {id:'15',modelId:'3',name:'Glacier White Pearl'},
        {id:'16',modelId:'3',name:'Sparkling Silver'},
        {id:'17',modelId:'3',name:'Gravity Grey'},
        {id:'18',modelId:'3',name:'Pewter Olive'},
        {id:'19',modelId:'4',name:'Imperial Blue'},
        {id:'20',modelId:'4',name:'Intense Red'},
        {id:'21',modelId:'4',name:'Aurora Black Pearl'},
        {id:'22',modelId:'4',name:'Glacier White Pearl'},
        {id:'23',modelId:'4',name:'Sparkling Silver'},
        {id:'24',modelId:'4',name:'Gravity Grey'}
      ]
      const [model, setModel] = useState([]);
      const [color, setColor] = useState([]);
      useEffect(() => {
        setModel(models);
      },[])
      const handleModel = (id) =>{
        const dt = colors.filter(x => x.modelId === id);
        setColor(dt);
      }
    return(
        <Wrapper>
            <Header/>
            <Content>
                <div>
                    <p className="h2" data-aos='fade-right'>Car Booking Form</p>
                    <div style={{ borderTop: '3px solid black', width: 100, marginTop: 20, marginBottom: 60}} data-aos='fade-right' />
                    <p className="h">Buyer's Information</p>
                    <br />
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
                        <label htmlFor="state" className="label">State/province:</label>
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
                        <label htmlFor="pin" className="label">Postal/zipcode:</label>
                        <input type="text" id="pin" placeholder="Enter your Pincode" className="input"/>
                        <p className="h">Customise vehicle</p>
                        <br />
                        <label htmlFor="model" className="label">Kia Model:</label>
                        <select id='model' className="input" onChange={(e)=>handleModel(e.target.value)}>
                            <option value="0">Select car model</option>
                        {
                            model &&
                            model !== undefined ?
                            model.map((ctr,index) => {
                                return(
                                    <option key ={index} value={ctr.id}>{ctr.name}</option>
                                )
                            })
                            : "No model"
                        }
                        </select>
                        <label htmlFor="color" className="label">Color:</label>
                        <select id='color' className="input">
                            <option value="0">Select car color</option>
                        {
                            color &&
                            color !== undefined ?
                            color.map((ctr,index) => {
                                return(
                                    <option key ={index} value={ctr.id}>{ctr.name}</option>
                                )
                            })
                            : "No model color"
                        }
                        </select>
                        <label htmlFor="wheels" className="label">Alloy Wheels</label>
                        <select id="wheels" className="input">
                            <option value="">Select</option>
                            <option value="chrome">Chrome</option>
                            <option value="steel">Steel</option>
                            <option value="diamond">Diamond cut</option>
                            <option value="aluminium">Aluminium</option>
                        </select>
                        <div className="radio">
                        <label htmlFor="roof" className="label">Do you want sunroof?</label><br />
                        <input type="radio" name="roof"/> Yes
                        <br />
                        <input type="radio" name='roof'/> No
                        </div>
                        <br />
                        <div className="gear">
                        <label htmlFor="gear" className="label">Select your required type of transmission</label><br />
                        <input type="radio" name="gear"/> Manual
                        <br />
                        <input type="radio" name='gear'/> Automatic
                        <br />
                        <input type="radio" name='gear'/> CVT
                        <br />
                        <input type="radio" name='gear'/> Dual-Clutch
                        </div>
                        <br />
                        <div className="others">
                        <label htmlFor="others" className="label">Select your required type of transmission</label><br />
                        <input type="radio" name="gear"/> Manual
                        <br />
                        <input type="radio" name='gear'/> Automatic
                        <br />
                        <input type="radio" name='gear'/> CVT
                        <br />
                        <input type="radio" name='gear'/> Dual-Clutch
                        </div>
                        <br />
                        <p className="h">Consent</p>
                        <br />
                        <label htmlFor="date" className="label">Select Preferred Date for call from our agent:</label>
                        <input type="date" id="date" placeholder="dd/mm/yyyy" className="input"/>
                        <div><input type="checkbox" /> I agree with the <a href="">terms and conditions*</a><br />
                        <input type="checkbox" /> I want to share details with KIA sales department to help me with my legal documents and payment.
                        </div>
                        <button className="btn btn-primary" type="submit" onClick={handleClick}>Submit</button>
                        <br /><br /><br />
                        </div>
                    </form>
                </div>
            </Content>
            <Footer />
        </Wrapper>
    )
}

export default Bookonline;