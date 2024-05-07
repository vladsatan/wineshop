import React, {useState} from 'react';
import "./Navbar.css";
import logo from "../../img/Logo.png";
import searchLogo from "../../img/SearchLogo.png";
import locationLogo  from "../../img/location-logo.png";
import ExpressDelivery from "../Express-delivery/Express_delivery"
import {Link, Outlet} from "react-router-dom";

const Navbar = (props) => {

    let {drink, setDrink, page} = props;

    return (
        <nav>
            <div className='space'></div>
            <ExpressDelivery />

            <div className='Search-bar'>


                <div className='Logo'>
                    <img src={logo} alt={'logo'} />
                    <h1>винная мельница</h1>
                </div>

                <div className='search-box'>
                    <input type='text' />
                    <div className='search-btn'><img src={searchLogo} alt='searchLogo' /></div>
                </div>
                

                <div className='info'>
                    <div className='account-info'>
                        <div className='input-selection'>
                            <a href='#' className='reg-href'>Регистрация</a>
                            <a href='#'>Вход</a>
                        </div>
                        <p>Личный кабинет</p>
                    </div>


                    <hr color={'#414040'} />


                    <div className='contacts-info'>
                       <a href='#'><div className='location'>
                            <img src={locationLogo} alt='Location' />
                            <p>Киев</p>
                        </div></a>
                        <a className='tel-href' href="tel:+6494461709">068-144-3267</a>
                    </div>


                    <hr color={'#414040'} />
                    <div className='basket'>
                       <a href='#' className='basket-href'><div>Корзина: {0}</div></a>
                       <a href='#' className='balance-href'><div>{0} грн</div></a>
                    </div>
                </div>

            </div>

            <div className='nav-bar'>
            <div className={page.pathname === '/'? 'nav-bar-bg':'nav-bar-noBg'}><Link to='/' className={page.pathname === '/'? 'nav-bar-true':'nav-bar-false'} onClick={()=>setDrink('Вино')}>Вино</Link></div>
            <div className={page.pathname === '/Sparkling'? 'nav-bar-bg':'nav-bar-noBg'}><Link to='/Sparkling' className={page.pathname === '/Sparkling'? 'nav-bar-true':'nav-bar-false'} onClick={()=>setDrink('Игристое')}>Игристое</Link></div>
            <div className={page.pathname === '/Whisky'? 'nav-bar-bg':'nav-bar-noBg'}><Link to='/Whisky' className={page.pathname === '/Whisky'? 'nav-bar-true':'nav-bar-false'} onClick={()=>setDrink('Виски')}>Виски</Link></div>
            <div className={page.pathname === '/Brandy'? 'nav-bar-bg':'nav-bar-noBg'}><Link to='/Brandy' className={page.pathname === '/Brandy'? 'nav-bar-true':'nav-bar-false'} onClick={()=>setDrink('Коньяк')}>Коньяк</Link></div>
            <div className={page.pathname === '/Armagnac'? 'nav-bar-bg':'nav-bar-noBg'}><Link to='/Armagnac' className={page.pathname === '/Armagnac'? 'nav-bar-true':'nav-bar-false'} onClick={()=>setDrink('Арманьяк')}>Арманьяк</Link></div>
            <div className={page.pathname === '/Rum'? 'nav-bar-bg':'nav-bar-noBg'}><Link to='/Rum' className={page.pathname === '/Rum'? 'nav-bar-true':'nav-bar-false'} onClick={()=>setDrink('Ром')}>Ром</Link></div>
            <div className={page.pathname === '/Vodka'? 'nav-bar-bg':'nav-bar-noBg'}><Link to='/Vodka' className={page.pathname === '/Vodka'? 'nav-bar-true':'nav-bar-false'} onClick={()=>setDrink('Водка')}>Водка</Link></div>
            <div className={page.pathname === '/Liquor'? 'nav-bar-bg':'nav-bar-noBg'}><Link to='/Liquor' className={page.pathname === '/Liquor'? 'nav-bar-true':'nav-bar-false'} onClick={()=>setDrink('Ликер')}>Ликер</Link></div>
            <div className={page.pathname === '/Cocktails'? 'nav-bar-bg':'nav-bar-noBg'}><Link  to='/Cocktails'className={page.pathname === '/Cocktails'? 'nav-bar-true':'nav-bar-false'} onClick={()=>setDrink('Коктейли')}>Коктейли</Link></div>
            </div>



            <div className='space2'></div>
        </nav>
    );
}

export default Navbar;
