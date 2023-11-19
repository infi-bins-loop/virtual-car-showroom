import React from 'react'
import { Wrapper,Content} from './sidenav.style'

import { Link } from 'react-router-dom'

function SideNav({ show }) {

    return (
        <Wrapper show={show}>
            <Content>
                <Link to='/seltos'><li className='half'>SELTOS</li></Link>
                <Link to='/carens'><li className='half'>CARENS</li></Link>
                <Link to='/sonet'><li className='half'>SONET</li></Link>
                <Link to='/ev6'><li className='half'>EV6</li></Link>
                <Link to='/vrshowroom'><li className='half'>VR SHOWROOM</li></Link>
                <li>Book test drive</li>
                <Link to='/login'><li className='half'>Account</li></Link>
                <li>Book online</li>
                <li>Contact</li>
            </Content>
        </Wrapper>
    )
}

export default SideNav