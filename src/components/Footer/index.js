import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Wrapper,Content } from "./footer.syle";
import { Link } from 'react-router-dom';
const Footer = ({bottom}) =>{

    return(
        <Wrapper>
            <Content className={bottom} >
                <div className="items">
                    <div className="footcont">
                        <h2 style={{fontFamily: 'Gill sans', marginTop: 30}}>KIA India</h2>
                        <br />
                        <div style={{justifyContent: 'space-between', display: 'flex', fontSize: 25}}>
                        <a href="https://www.youtube.com/channel/UCfiOn3My37t_fahQE6VhyuA" target="_blank"><i className="bi bi-youtube"></i></a>
                        <a href="https://www.facebook.com/KiaInd/" target="_blank"><i className="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com/kiaind/?hl=en" target="_blank"><i className="bi bi-instagram"></i></a>
                        <a href="https://twitter.com/KiaInd" target="_blank"><i className="bi bi-twitter"></i></a>
                        </div>
                        <p style={{fontSize: 'small',marginTop: 10,marginBottom: 10}}>&copy; All rights reserved. 2023</p>
                    </div>
                    <div className="links">
                        <div>
                            <h4 style={{textDecoration: 'underline',letterSpacing: 1, marginBottom: 10}}>Links</h4>
                            <a href="/vrshowroom" style={{textDecoration: 'none'}}>About</a><br />
                            <a href="" style={{textDecoration: 'none'}}>Book test drive</a><br />
                            <a href="" style={{textDecoration: 'none'}}>Book online</a><br />
                            <a href="" style={{textDecoration: 'none'}}>Contact</a>
                        </div>
                        <div style={{marginLeft: 50}}>
                        <h4 style={{textDecoration: 'underline',letterSpacing: 1, marginBottom: 10}}>Cars</h4>
                            <Link to='/seltos' style={{textDecoration: 'none'}}>Seltos</Link><br />
                            <Link to='/carens'style={{textDecoration: 'none'}}>Carens</Link><br />
                            <Link to='/sonet'style={{textDecoration: 'none'}}>Sonet</Link><br />
                            <Link to='/ev6'style={{textDecoration: 'none'}}>EV6</Link>
                        </div>
                        <div style={{marginLeft: 60}}>
                        <h4 style={{textDecoration: 'underline',letterSpacing: 1, marginBottom: 10}}>Legal</h4>
                            <p>Privacy Policy</p>
                            <p>Terms of Use</p>
                            <p>Online Sales T&C</p>
                            <p>CSR Policy</p>
                        </div>
                    </div>
                </div>
            </Content>
        </Wrapper>
    )
}

export default Footer