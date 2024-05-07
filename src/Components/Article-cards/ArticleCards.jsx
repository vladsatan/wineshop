import React from 'react';
import "./ArticleCards.css";
import card1 from "../../img/ArticleCardsPng/card1.png";
import card2 from "../../img/ArticleCardsPng/card2.png";
import card3 from "../../img/ArticleCardsPng/card3.png";

const ArticleCards = () => {
    return (
        <div className='ArticleCards'>
            <a href='#'><img src={card1} /></a>
            <a href='#'><img src={card2} /></a>
            <a href='#'><img src={card3} /></a>
        </div>
    );
}

export default ArticleCards;
