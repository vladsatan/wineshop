import React, {useEffect, useState} from 'react';
import "./Filter.css";
import FilterBox from './FilterBox';
import {drinkTranslation} from "../../Scripts";

const Filter = (props) => {

    const [translateDrink, setTranslateDrink] = useState();

    let {drink,chooseColor,setChooseColor,chooseSweetness,setChooseSweetness,choosePrice,setChoosePrise,chooseCountry,setChooseCountry,chooseSort,setChooseSort,chooseClassification,setChooseClassification} = props
    let {chooseKindOfWhisky,setChooseKindOfWhisky,chooseAgingPeriod,setChooseAgingPeriod,chooseBottler,setChooseBottler} = props

    // Общие фильтры

    let objPrice = {topicName: 'Цена', pointsArray:[{pointName: '0-1000', key: 1,quantity: 9},{pointName: '1000-2000', key: 2,quantity: 21},{pointName: '2000-3000', key: 3,quantity: 13},{pointName: '3000-4000', key: 4 ,quantity: 9},{pointName: '4000-5000', key: 5 ,quantity: 9},{pointName: '5000-6000', key: 6 ,quantity: 1},{pointName: '6000+', key: 7 ,quantity: 2}]}
    let objColor = {topicName: 'Цвет', pointsArray:[{pointName: 'Белое',key: 8,quantity: 9},{pointName: 'Красное', key: 9, quantity: 21},{pointName: 'Розовое', key: 10,quantity: 13}]};
    let objCountry = {topicName: 'Страна', pointsArray:[{pointName: 'Австралия', key: 11 ,quantity: 9},{pointName: 'Австрия', key: 12 ,quantity: 21},{pointName: 'Аргентина', key: 13 ,quantity: 13},{pointName: 'Германия', key: 14,quantity: 9},{pointName: 'Италия', key: 15,quantity: 9},{pointName: 'Франция', key: 16,quantity: 1},{pointName: 'Португалия', key: 17,quantity: 2},{pointName: 'Чили', key: 18,quantity: 9}]}

   // Фильтры для Вина

    let objSweetnessWines = {topicName: 'Сладость', pointsArray:[{pointName: 'Полусладкое', key: 19,quantity: 9},{pointName: 'Полусухое', key: 20,quantity: 21},{pointName: 'Сухое', key: 21,quantity: 13},{pointName: 'Сладкое', key: 22, quantity: 9}]}
    let objGrapeSortsWines = {topicName: 'Сорт винограда', pointsArray:[{pointName: 'Верментино', key: 23,quantity: 9},{pointName: 'Каберне Совиньон', key: 24,quantity: 21},{pointName: 'Каберне Фран', key: 25,quantity: 13},{pointName: 'Мерло',key: 26,quantity: 9},{pointName: 'Пино Нуар', key: 27,quantity: 9},{pointName: 'Совиньон Блан', key: 28,quantity: 1},{pointName: 'Шардоне', key: 29,quantity: 2},{pointName: 'Корвиноне', key: 30,quantity: 9}]}
    let objClassificationWines = {topicName: 'Классификация', pointsArray:[{pointName: 'Ледяное вино', key: 31,quantity: 21},{pointName: 'Портвейн', key: 32,quantity: 13},{pointName: 'Тихое вино', key: 33,quantity: 100},{pointName: 'Херес', key: 34,quantity: 13}]}

    // Фильтры для игристого

    let objSweetnessSparkling = {topicName: 'Сладость', pointsArray:[{pointName: 'Полусладкое', key: 35,quantity: 9},{pointName: 'Полусухое', key: 36,quantity: 21},{pointName: 'Сухое', key: 37,quantity: 13},{pointName: 'Сладкое', key: 38, quantity: 9},{pointName: 'Брют', key: 39, quantity: 9}]}
    let objKindOfSparkling = {topicName: 'Тип игристого', pointsArray:[{pointName: 'Асти', key: 40,quantity: 21},{pointName: 'Просекко', key: 41,quantity: 13},{pointName: 'Кава', key: 42,quantity: 100},{pointName: 'Франчакорта', key: 43,quantity: 13},{pointName: 'Шампанское', key: 44,quantity: 19}]}
    let objGrapeSortsSparkling = {topicName: 'Сорт винограда', pointsArray:[{pointName: 'Глера', key: 45,quantity: 9},{pointName: 'Ксарельо', key: 46,quantity: 21},{pointName: 'Пино Минье', key: 47,quantity: 13},{pointName: 'Пино Блан',key: 48,quantity: 9},{pointName: 'Пино Нуар', key: 49,quantity: 9},{pointName: 'Парельяда', key: 50,quantity: 1},{pointName: 'Шардоне', key: 51,quantity: 2}]}

    // Фильры для бренди

    let objKindOfWhisky = {topicName: 'Тип виски', pointsArray:[{pointName: 'Бурбон', key: 52,quantity: 9},{pointName: 'Зерновой', key: 53,quantity: 25},{pointName: 'Купажированный', key: 54,quantity: 67},{pointName: 'Односолодовый', key: 55,quantity: 43}, {pointName: 'Сингл Пот Стилл', key: 56,quantity: 15},{pointName: 'Чистосолодовый', key: 57,quantity: 7}]}
    let objAgingPeriod = {topicName: 'Выдержка', pointsArray:[{pointName: '3 Year Old', key: 58,quantity: 9},{pointName: '5 Year Old', key: 59,quantity: 25},{pointName: '7 Year Old', key: 60,quantity: 67}, {pointName: '10 Year Old', key: 61,quantity: 15},{pointName: '15 Year Old', key: 62,quantity: 7},{pointName: '20 Year Old', key: 63,quantity: 7},{pointName: '> 20 Year Old', key: 64,quantity: 7}]}
    let objBottler = {topicName: 'Ботлер', pointsArray:[{pointName: 'Hart Brothers', key: 65,quantity: 9},{pointName: 'Douglas Laing', key: 66,quantity: 25},{pointName: 'Gordon & MacPhail', key: 67,quantity: 67},{pointName: 'Signatory', key: 68,quantity: 43}]}

    useEffect(()=>{
        drinkTranslation(drink,setTranslateDrink)
    },[drink])

    return (
        <div className='filter-container'>
            <h2>{translateDrink}</h2>

            {drink === 'Вино'? <>
            <FilterBox obj={objColor} choose={chooseColor} setChoose={setChooseColor}/>
            <FilterBox obj={objSweetnessWines} choose={chooseSweetness} setChoose={setChooseSweetness}/>
            <FilterBox obj={objPrice} choose={choosePrice} setChoose={setChoosePrise} />
            <FilterBox obj={objCountry} choose={chooseCountry} setChoose={setChooseCountry}/>
            <FilterBox obj={objGrapeSortsWines} choose={chooseSort} setChoose={setChooseSort}/>
            <FilterBox obj={objClassificationWines} choose={chooseClassification} setChoose={setChooseClassification} />
            </> : null}

            {drink === 'Игристое'? <>
                <FilterBox obj={objColor} choose={chooseColor} setChoose={setChooseColor}/>
                <FilterBox obj={objSweetnessSparkling} choose={chooseSweetness} setChoose={setChooseSweetness}/>
                <FilterBox obj={objKindOfSparkling} choose={chooseClassification} setChoose={setChooseClassification} />
                <FilterBox obj={objPrice} choose={choosePrice} setChoose={setChoosePrise} />
                <FilterBox obj={objCountry} choose={chooseCountry} setChoose={setChooseCountry}/>
                <FilterBox obj={objGrapeSortsSparkling} choose={chooseSort} setChoose={setChooseSort}/>
             </> : null}

            {drink === 'Виски'? <>
                <FilterBox obj={objKindOfWhisky} choose={chooseKindOfWhisky} setChoose={setChooseKindOfWhisky} />
                <FilterBox obj={objBottler} choose={chooseBottler} setChoose={setChooseBottler} />
                <FilterBox obj={objPrice} choose={choosePrice} setChoose={setChoosePrise} />
                <FilterBox obj={objAgingPeriod} choose={chooseAgingPeriod} setChoose={setChooseAgingPeriod} />
                <FilterBox obj={objCountry} choose={chooseCountry} setChoose={setChooseCountry}/>
            </> : null}

        </div>
    );
}

export default Filter;