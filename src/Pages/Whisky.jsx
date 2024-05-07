import React, {useEffect, useState} from 'react';
import {whisky} from "../bdTest";
import Slider from "../Components/Slider/Slider";
import ArticleCards from "../Components/Article-cards/ArticleCards";
import Filter from "../Components/Filters/Filter";
import ProductCard from "../Components/ProductCard/ProductCard";
import Line from "../img/Line.png";
import AboutSommelier from "../Components/AboutSommelier/AboutSommelier";
import {getFilterOfOptions} from "../Scripts";

const Whisky = () => {

     const [chooseKindOfWhisky, setChooseKindOfWhisky] = useState([])
     const [chooseAgingPeriod,setChooseAgingPeriod] = useState([])
     const [chooseBottler, setChooseBottler] = useState([])
     const [choosePrice, setChoosePrise] = useState([])
     const [chooseCountry, setChooseCountry] = useState([])
     const [filterWhisky, setFilterWhisky] = useState(whisky)
     let [limiter, setLimiter] = useState(9)
     let [limitWhisky, setLimitWhisky] = useState(whisky)

    useEffect(()=>{
        setFilterWhisky(getFilterOfOptions([],[],choosePrice,chooseCountry,[],[],[],chooseKindOfWhisky,chooseAgingPeriod,chooseBottler,whisky))
    },[chooseKindOfWhisky,chooseAgingPeriod,choosePrice,chooseCountry,chooseBottler])

    useEffect(()=>{
        let arr = []
        for(let i = 0; i < filterWhisky.length; i++){
            if(i < limiter){
                arr.push(filterWhisky[i])
            }
        }
        setLimitWhisky(arr)
    },[limiter,filterWhisky])

    return(
        <div className="App">

            <div className='container'>

                <Slider />
                <ArticleCards />
                <div className='main-container'>

                    <div className='filter-side'>
                        <Filter
                            drink={'Виски'}
                            choosePrice={choosePrice}
                            setChoosePrise={setChoosePrise}
                            chooseCountry={chooseCountry}
                            setChooseCountry={setChooseCountry}
                            chooseKindOfWhisky = {chooseKindOfWhisky}
                            setChooseKindOfWhisky = {setChooseKindOfWhisky}
                            chooseAgingPeriod = {chooseAgingPeriod}
                            setChooseAgingPeriod = {setChooseAgingPeriod}
                            chooseBottler = {chooseBottler}
                            setChooseBottler = {setChooseBottler}

                        />
                    </div>


                    <div className='item-side'>

                        <div className='items-box'>
                            {limitWhisky.map(e=>{return <ProductCard key={e.id} productCardInfo={e} />})}
                        </div>

                        <div className='see-all' onClick={()=> setLimiter(limiter += 9)}>
                            <p>смотреть все</p>
                            <img src={Line} alt="-"/>
                        </div>

                    </div>
                </div>

                <AboutSommelier />

            </div>

        </div>
    )
};

export default Whisky;