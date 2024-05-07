import React from 'react';
import "./FilterBox.css";
import { useState, useEffect } from 'react';
import openFirstPoints from '../../Scripts';

const FilterBox = (props) => {

    let {obj,choose,setChoose} = props;
    let {topicName,pointsArray} = obj;

    const [isOpen, setIsOpen] = useState(false);
    const [priceFrom, setPriceFrom] = useState(0);
    const [priceTo, setPriceTo] = useState(0);

    useEffect(() => {
        openFirstPoints(topicName,setIsOpen);
    }, []);

    const handleChecked = (event) => {
        let array = []

        array.push(event.target.value)

        if(!choose.includes(event.target.value)){
            setChoose(array.concat(choose))
        }else{
            let arr = choose.filter(e=> e!= event.target.value)
            setChoose(arr)
        }

    }

     const handleSetPriceFrom = (event) =>{
         setPriceFrom(event.target.value)
     }

     const handleSetPriceTo = (event) =>{
         setPriceTo(event.target.value)
     }

     const customPriceBtn = () =>{
        let stringPrice = `${priceFrom}-${priceTo}`
         setChoose([stringPrice])
     }

    return (
        <div className='FilterBox-container'>
            <div className='topic'>
                <h3>{topicName}</h3>
                <button onClick={()=>setIsOpen(!isOpen)}>{isOpen? "-":"+"}</button>
            </div>

            {topicName === 'Цена'? 
            
            <div className='priceInputFlex'>
               <input type='text' className='price-input' placeholder='от' onChange={(e)=>handleSetPriceFrom(e)}></input>
               <input type='text' className='price-input price-input_2' placeholder='до' onChange={(e)=>handleSetPriceTo(e)}></input>
               <button onClick={()=>customPriceBtn()}>OK</button>
            </div> 
            
            : null}


            <div className={isOpen? 'open-list': 'close-list'}>
            {pointsArray.map((p,i)=>{ return(
                <div className='point' key={p.key}>
                    <input
                        id={p.key}
                        className='custom-checkbox'
                        type={'checkbox'}
                        value={p.pointName}
                        onChange={(e)=> {handleChecked(e);}}
                    />
                    <label htmlFor={p.key}>{p.pointName}</label>
                    <p>{p.quantity}</p>
                </div>
                )})}
            </div>


        </div>
    );
}

export default FilterBox;
