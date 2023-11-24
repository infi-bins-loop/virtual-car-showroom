import React from "react";

import { Wrapper,Navbar,Content } from "./account.style";

import Header from "../Header";

// Icons
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser,logout } from "../../features/userSlice";
import { auth } from "../firebase";

const Account = () =>{

    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const SignOut = () =>{
        auth.signOut().then(()=>{
            dispatch(logout())
            navigate('/')
        })
        .catch((error) => alert(error.message))
    }

    document.title='KIA Account | KIA';
    return(
        <>
        <Header/>
        <Wrapper>
            <Navbar>
                <div className="row" >
                    <div className="main">
                        <HomeIcon className="logo" />
                    </div>
                    <div className="main high" >
                        <h2><a href="/kiaaccount">Dashboard</a></h2>
                    </div>
                </div> 
                <div className="row" onClick={SignOut}>
                    <div className="main">
                        <LogoutIcon className="logo"/>
                    </div>
                    <div className="main high">
                        <h2><a href="/" >Sign Out</a></h2>
                    </div>
                </div>
            </Navbar>
            <Content>
                <h1>{user?.displayName + "'s Dashboard"}</h1>
                <div className="container" >
                    <div className="box box1" >
                        <div className="desc" >
                            <h3>See Showroom</h3>
                            <p>Experience the KIA showroom virtually.</p>
                            <Link to='/vrshowroom'>Check Out</Link>
                        </div>
                    </div>
                    <div className="box box2">
                        <div className="desc" >
                            <h3>Reserve a Car</h3>
                            <p>Browse our models</p>
                            <Link to='/'>Shop Now</Link>

                        </div>
                    </div>
                    <div className="box box3" >
                        <div className="desc" >
                            <h3>Want to drive and experience?</h3>
                            <p>Book test drive today!</p>
                            <Link to='/testdrive'>Book Now</Link>
                        </div>
                    </div>
                </div>
            </Content>
        </Wrapper>
        </>
    )
}

export default Account