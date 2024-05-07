import React, {useEffect, useState} from "react";
import '../App.css';
import Slider from "../Components/Slider/Slider";
import ArticleCards from "../Components/Article-cards/ArticleCards";
import Filter from "../Components/Filters/Filter";
import ProductCard from "../Components/ProductCard/ProductCard";
import Line from "../img/Line.png";
import AboutSommelier from "../Components/AboutSommelier/AboutSommelier";
import wines from "../bdTest";
import {getFilterOfOptions} from "../Scripts";

function Wine() {

   const [chooseColor, setChooseColor] = useState([])
   const [chooseSweetness, setChooseSweetness] = useState([])
   const [choosePrice, setChoosePrise] = useState([])
   const [chooseCountry, setChooseCountry] = useState([])
   const [chooseSort, setChooseSort] = useState([])
   const [chooseClassification, setChooseClassification] = useState([])
   const [filterWine, setFilterWine] = useState(wines)
   let [limiter, setLimiter] = useState(9)
   let [limitWine, setLimitWine] = useState([])

   useEffect(()=>{
      setFilterWine(getFilterOfOptions(chooseColor,chooseSweetness,choosePrice,chooseCountry,chooseSort,chooseClassification,[],[],[],[],wines))
   },[chooseColor,chooseSweetness,choosePrice,chooseCountry,chooseSort,chooseClassification])

   useEffect(()=>{
      let arr = [];

    for(let i = 0; i < filterWine.length; i++){
        if(i < limiter){
         arr.push(filterWine[i])
         }
      }

      setLimitWine(arr)
   },[limiter,filterWine])

   return(
       <div className="App">

          <div className='container'>

             <Slider />
             <ArticleCards />
             <div className='main-container'>

                <div className='filter-side'>
                   <Filter
                       drink={'Вино'}
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
                       chooseClassification={chooseClassification}
                       setChooseClassification={setChooseClassification}/>
                </div>


                <div className='item-side'>

                   <div className='items-box'>
                      {limitWine.map(e=>{return <ProductCard key={e.id} productCardInfo={e} />})}
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
}

export default Wine;