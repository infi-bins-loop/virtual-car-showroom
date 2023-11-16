import React,{ useEffect } from 'react';
import { BrowserRouter as Router ,Routes, Route, Navigate } from 'react-router-dom';

// Using AOS for animation

// Components
import GlobalStyle from './globalstyles';
import Home from './components/home';
import SELTOS from './components/Seltos';
import CARENS from './components/Carens';
import SONET from './components/Sonet';
import EV6 from './components/EV6';
import Login from './components/Login';
import VRSHOWROOM from './components/VR Showroom';
import Signup from './components/Signup';
import Account from './components/Account';

import { useSelector,useDispatch } from 'react-redux';
import { selectUser,login,logout } from './features/userSlice';
import { auth } from './components/firebase';

function App() {

  const user = useSelector(selectUser)

  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        )
      } else {
        // User is signed out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path="/seltos" element={<SELTOS/>} />
          <Route path="/carens" element={<CARENS/>} />
          <Route path="/sonet" element={<SONET/>} />
          <Route path="/ev6" element={<EV6/>} />
          <Route path="/vrshowroom" element={<VRSHOWROOM/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route 
            path="/kiaaccount" 
            element={
              <main>
                {user ? <Account/> : <Navigate to='/login'/>}
              </main>
            }
          />
          <Route 
            path="/login" 
            element={
              <main>
                {user ? <Navigate to='/kiaaccount'/> : <Login/>}
              </main>
            } 
          />

        </Routes>

        <GlobalStyle/>
      </div>
    </Router>
  );
}

export default App;