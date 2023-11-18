import React,{ useState } from 'react'
import { Wrapper,Content,Content1 } from './header.style'
import { Link } from 'react-router-dom';
import SideNav from '../SideNav'
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

    const [open,setOpen] = useState(false);

    return (
        <>
        <Wrapper>
            <div className='logo' >
            <Link to='/'>
                <img src='/images/Kia-new-logo.svg' alt='logo'/>
            </Link>
            </div>
            <Content>
                <Link to='/seltos'>SELTOS</Link>
                <Link to='/carens'>CARENS</Link>
                <Link to='/sonet'>SONET</Link>
                <Link to='/ev6'>EV6</Link>
                <Link to='/vrshowroom'>VR Showroom</Link>
            </Content>
            <Content1>
                <Link to='/login' className='none'>Account</Link>
                <a href='#' onClick={()=> setOpen(true)} >Book</a>
            </Content1>
            {open && 
            <div className='top'>
                <div className='close' onClick={()=> setOpen(false)}>
                    <CloseIcon/>
                </div>
            </div> 
            }       
            <SideNav show={open}/>
        </Wrapper>
        </>
    )
}

export default Header