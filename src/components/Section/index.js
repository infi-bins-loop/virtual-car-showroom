import React from 'react'
import { Wrapper,ContentTop,ContentMid,Content } from './section.style';
import { Link } from 'react-router-dom';

function Section({ title,desc,backgroundImg,btn1,btn2,btn3,btn4,link,arrow,range,speed,hp,top }) {

    return (
        <Wrapper bg={backgroundImg} >
            <ContentTop>
                <h1>{title}</h1>
                <p>{desc} <a href='#'>{link}</a></p>
            </ContentTop>

            <div>
                <ContentMid className={arrow ? '' : 'buttons'} >
                    {btn1 &&
                    <div className='right'>
                        <button><a href="https://www.kia.com/content/dam/kia2/in/en/our-vehicles/showroom/Carens/x-line/Kia_Carens_Brochure_16PP_Desktop.pdf" style={{color: 'black',textDecoration: 'none'}} target='_blank'>{btn1}</a></button>
                    </div>
                    }
                    {btn2 &&
                    <div className='left'>
                        <button><a href="https://www.kia.com/content/dam/kia2/in/en/our-vehicles/showroom/Brochures/Kia-EV6_Desktop.pdf" style={{color: 'white',textDecoration: 'none'}} target='_blank'>{btn2}</a></button>
                    </div>
                    }
                    {btn3 &&
                    <div className='left'>
                        <button><a href="https://www.kia.com/content/dam/kia2/in/en/images/common/Kia-Seltos-Desktop-Brochure.pdf" style={{color: 'white',textDecoration: 'none'}} target='_blank'>{btn3}</a></button>
                    </div>
                    }
                    {btn4 &&
                    <div className='right'>
                        <button><a href="https://kia.com/content/dam/kia2/in/en/our-vehicles/showroom/Brochures/Sonet-16-Page-Brochure-2023.pdf" style={{color: 'black',textDecoration: 'none'}} target='_blank'>{btn4}</a></button>
                    </div>
                    }
                </ContentMid>
                {range && 
                <Content>
                    <div className="Info-bar">
                        <div className="Specs" >
                            <h2>{range} kmpl</h2>
                            <p>Mileage</p>
                        </div>
                        <div className="Specs" >
                            <h2>{speed}</h2>
                            <p>Air bags</p>
                        </div>
                        <div className="Specs" >
                            <h2>{top} kmph</h2>
                            <p>Top Speed</p>
                        </div>
                        {hp && 
                        <div className="Specs hp" >
                            <h2>{hp} ps</h2>
                            <p>Power</p>
                        </div>
                        }
                        <div className="order_btn">
                            <button><Link to='/bookonline' style={{textDecoration:'none',color:'black'}}>Book online</Link> </button>
                        </div>
                    </div>
                </Content>
                }
                {arrow && 
                    <div className='arrow'>
                        <img src='/images/down-arrow.svg' alt='arrow'/>
                    </div>
                }
            </div>
        </Wrapper>
    )
}

export default Section
