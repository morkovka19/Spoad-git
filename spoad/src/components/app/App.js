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

function App() {

  const [loggedIn, setLoggedIn] = useState(false);


  return (
   <div className='page__container'>
    <Header />
      <Routes>
        <Route path='/' element={
            <ProtectedRoute 
              element={Main}
              loggedIn={loggedIn}
            />
          } 
        />
      <Route path='/sign-in' element={<Login />} />
      <Route path='/sign-up' element={<Registration />} />
      <Route path='/github' element={<GitHub />} />

    </ Routes>
    <Footer />
  </div>
  );
}

export default App;
