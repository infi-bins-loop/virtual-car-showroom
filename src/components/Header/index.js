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
                <Link to='/seltos' style={{textDecoration:'none',color:'black'}}>SELTOS</Link>
                <Link to='/carens'style={{textDecoration:'none',color:'black'}}>CARENS</Link>
                <Link to='/sonet'style={{textDecoration:'none',color:'black'}}>SONET</Link>
                <Link to='/ev6'style={{textDecoration:'none',color:'black'}}>EV6</Link>
                <Link to='/vrshowroom'style={{textDecoration:'none',color:'black'}}>VR Showroom</Link>
            </Content>
            <Content1>
                <Link to='/login' className='none'style={{textDecoration:'none',color:'black'}}>Account</Link>
                <a href='#' onClick={()=> setOpen(true)} style={{textDecoration:'none',color:'black'}}>Book</a>
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