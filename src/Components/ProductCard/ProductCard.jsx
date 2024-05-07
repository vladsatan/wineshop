import React, {useEffect, useState} from 'react';
import "./ProductCard.css";
import {getDecorationPrice} from "../../Scripts";

const ProductCard = (props) => {

    const {productCardInfo} = props;
    let [decorPrice,setDecorPrice] = useState(null)
    let {name, photo, year, volume, country, price, flag, area} = productCardInfo;

    useEffect(()=>{
        setDecorPrice(()=> getDecorationPrice(price))
    },[])

    return (
        <div className='ProductCard'>
            <img src={photo} alt='wine-photo' />
            <h3>{name}</h3>
            <p className='card-year'>{year}/{volume}</p>
            <div className='flex-producer'>
            <img src={flag} alt='' />
            <p>{country}/{area}</p>
            </div>
            <div className='flex-price'>
               <div className='price_quantity'>
                <p className='quantity'>ЦЕНА ЗА 1 ШТ</p>
                <p className='price'>{decorPrice} ГРН</p>
               </div>
               <button>В КОРЗИНУ</button>
            </div>
        </div>
    );
}

export default ProductCard;
