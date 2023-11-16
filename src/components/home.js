import React from 'react'
import { Wrapper,Content } from './home.style'

import Section from './Section'
import Header from './Header';

function Home() {

    document.title = "KIA";
    return (
        <>
        <Header/>
        <Wrapper>
            <Content>
                <Section title="CARENS" desc="Lease starting at ₹ 32,587/mo*" btn1='Download Brochure' backgroundImg="carens2.jpg" />
            </Content>
            <Content>
                <Section title="EV6" desc="Lease starting at ₹ 1,31,289/mo*" btn2='Download Brochure' backgroundImg="ev61.jpeg"/>
            </Content>
            <Content>
                <Section title="SELTOS" desc="From ₹ 19,924/mo*" btn3='Download Brochure' backgroundImg="seltos1.webp"/>
            </Content>
            <Content>
                <Section title="SONET" desc="From ₹ 14,379/mo*" btn4='Download Brochure' backgroundImg="sonet1.webp"/>
            </Content>
        </Wrapper>
        </>
    )
}

export default Home