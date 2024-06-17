import logo from './logo.svg';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import './component/css/navbar.css'
import img1 from './images/icon1.png'
import img2 from './images/icon2.png'
import img3 from './images/icon3.png'
import img4 from './images/icon4.png'
import logos from './images/logow.png'
import watch from './images/wat3.png'
import dow from './images/abcd.png'

import { useState } from 'react';



function App() {

  return (
    <>

      <nav>
        <div className="logo"> </div>
        <div className="nav-list">

          <li><a href=""> HOME</a></li>
          
          <li><a href="">ABOUT</a> </li>
          <li><a href="#contact">CONTACT</a></li>

        </div>
      </nav>

{/* navbar section ended */}
      <section>


        <div className="container">
          <div className="left">
            <div className="line">
              <div className="line-1"></div><br />
              <div className="line-2"></div><br />
              <div className="line-3"></div>
            </div>

            <div className="text">
              <h1>Enjoy note <br />   with your friends</h1>
              
              <button>Try Now</button>
            </div>
            <div className="image" id='contact'>
              <img src={img1} alt=""/>
                <img src={img2} alt=""/>
                  <img src={img3} alt=""/>
                    <img src={img4} alt=""/>

             </div>
                  </div>
                  <div className="right">
                    <img src={dow} alt="" />
                  </div>

                </div>
              </section>



            </>
            );
}

 export default App;
