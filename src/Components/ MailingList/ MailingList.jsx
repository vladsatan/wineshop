import React from 'react';
import "./MailingList.css"
import facebook from "../../img/facebook.png"
import instagram from "../../img/instagram.png"
import telegram from "../../img/telegram.png"
const MailingList = () => {
    return (
        <div className='MailingList'>
           <h3>ПОДПИСАТЬСЯ НА EMAIL РАССЫЛКУ</h3>
            <p>EMAIL</p>
            <input type="text" id={'input-email'}/>
            <button>ОТПРАВИТЬ</button>
            <div className='social-media'>
                <a href="https://www.facebook.com/profile.php?id=100051527508615" target={'_blank'}><img src={facebook} alt=""/></a>
                <a href="https://www.instagram.com/degtiarevskii_life/" target={'_blank'}><img src={instagram} alt=""/></a>
                <a href="https://t.me/vlada_net" target={'_blank'}><img src={telegram} alt=""/></a>
            </div>
        </div>
    );
}

export default MailingList;