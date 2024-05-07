import React from 'react';
import "./Footer.css";

const Footer = () => {
    return(
      <footer>
         <nav className='footer-nav'>

            <div className='footer-nav-box'>
                <h3>Shop</h3>
                <a href="#">History</a>
                <a href="#">Michel</a>
                <a href="#">Values</a>
                <a href="#">Biodynamics</a>
            </div>

             <div className='footer-nav-box'>
                 <h3>Shop</h3>
                 <a href="#">All Wines</a>
                 <a href="#">Single vineyard selection</a>
             </div>

             <div className='footer-nav-box'>
                 <h3>The Wines</h3>
                 <a href="#">Hermitage in 3D</a>
                 <a href="#">The soul of M.CHAPOUTIER</a>
             </div>

             <div className='footer-nav-box'>
                 <h3>Wine Tourism</h3>
                 <a href="#">Wine tasting services and visits</a>
                 <a href="#">Bike ride</a>
             </div>

         </nav>

          <div className='privacy-police'>
              <p>2021 winemill</p>
              <a href="#">Privacy police</a>
          </div>

      </footer>
    )
}

export default Footer;
