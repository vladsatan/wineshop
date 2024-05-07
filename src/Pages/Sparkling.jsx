import '../App.css';
import React, {useEffect, useState} from "react";
import Slider from "../Components/Slider/Slider";
import ArticleCards from "../Components/Article-cards/ArticleCards";
import AboutSommelier from "../Components/AboutSommelier/AboutSommelier";
import Filter from "../Components/Filters/Filter";
import ProductCard from "../Components/ProductCard/ProductCard";
import Line from "../img/Line.png";
import {sparkling} from "../bdTest";
import {getFilterOfOptions} from "../Scripts";

function Sparkling() {

    const [chooseColor, setChooseColor] = useState([])
    const [chooseSweetness, setChooseSweetness] = useState([])
    const [choosePrice, setChoosePrise] = useState([])
    const [chooseCountry, setChooseCountry] = useState([])
    const [chooseSort, setChooseSort] = useState([])
    const [chooseKindOfSparkling, setChooseKindOfSparkling] = useState([])
    const [filterSparkling, setFilterSparkling] = useState(sparkling)
    let [limiter, setLimiter] = useState(9)
    let [limitSparkling, setLimitSparkling] = useState([])

    useEffect(()=>{
        setFilterSparkling(getFilterOfOptions(chooseColor,chooseSweetness,choosePrice,chooseCountry,chooseSort,[],chooseKindOfSparkling,[],[],[],sparkling))
    },[chooseColor,chooseSweetness,choosePrice,chooseCountry,chooseSort,chooseKindOfSparkling])

    useEffect(()=>{
        let arr = [];

        for(let i = 0; i < filterSparkling.length; i++){
            if(i < limiter){
                arr.push(filterSparkling[i])
            }
        }
        setLimitSparkling(arr)
    },[limiter,filterSparkling])

    return (
        <div className='App'>
            <div className='container'>
                <Slider />
                <ArticleCards />


                <div className='main-container'>

                    <div className='filter-side'>
                        <Filter
                            drink={'Игристое'}
                            chooseColor={chooseColor}
                            setChooseColor={setChooseColor}
                            chooseSweetness={chooseSweetness}
                            setChooseSweetness={setChooseSweetness}
                            choosePrice={choosePrice}
                            setChoosePrise={setChoosePrise}
                            chooseCountry={chooseCountry}
                            setChooseCountry={setChooseCountry}
                            chooseSort={chooseSort}
                            setChooseSort={setChooseSort}
                            chooseClassification={chooseKindOfSparkling}
                            setChooseClassification={setChooseKindOfSparkling}/>
                    </div>


                    <div className='item-side'>

                        <div className='items-box'>
                            {limitSparkling.map(e=>{return <ProductCard key={e.id} productCardInfo={e} />})}
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
    );
}

export default Sparkling;
