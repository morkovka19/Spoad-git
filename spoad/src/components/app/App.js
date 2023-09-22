import './App.css';
import ProtectedRoute from '../ProtectedRoute';
import {Routes, Route} from 'react-router-dom';
import Main from '../main/Main';
import Login from '../sign-in/Login';
import Registration from '../sign-up/Registration';
import GitHub from '../github/Github';
import { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import {useNavigate} from 'react-router-dom'

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const navigate =  useNavigate();

  const handleLoginOut =() =>{
    setLoggedIn(false);
    
  }

  const handleLogin = () =>{
    setLoggedIn(true);
    navigate('/');
  }


  return (
   <div className='page__container'>
    <Header loggedIn={loggedIn} onLoginOut={handleLoginOut}/>
      <Routes>
        <Route path='/' element={
            <ProtectedRoute 
              element={Main}
              loggedIn={loggedIn}
            />
          } 
        />
      <Route path='/sign-in' element={<Login  onLogin={handleLogin}/>} />
      <Route path='/sign-up' element={<Registration />} />
      <Route path='/github' element={<GitHub />} />

    </ Routes>
    <Footer loggedIn={loggedIn}/>
  </div>
  );
}

export default App;
