
// Скрипт для открытия первых трех фильтров
export default function openFirstPoints(name, fun){
    if(name === 'Цена' || name === 'Цвет' || name === 'Сладость' || name === 'Тип игристого' || name === 'Тип виски' || name === 'Ботлер'){
        fun(true);
    }
}

// Скрипт для кастомизации цены (20000 - 20 000)
export function getDecorationPrice(price){

    let array = price.toString().split([''])
   let insert = function(arr, index, item) {
        return [
            ...arr.slice(0, index),     // первая половина
            item,                       // элементы для вставки
            ...arr.slice(index)         // Вторая половина
        ];
    };

    if(array.length === 5){
        array = insert(array,2,' ')
    } else if(array.length === 4){
        array = insert(array,1,' ')
    } else if(array.length === 6){
        array = insert(array,3,' ')
    }

    let newPrice = array.join('')
    return newPrice
}

// Скрипт для фильтрации по масивам (Цвет, Сладость и тд)
export function getFilterOfOptions(colorArray, sweetnessArray,priceArray,countryArray, sortArray, classificationArray, kindOfSparklingArray, chooseKindOfWhisky,chooseAgingPeriod,chooseBottler,dataArray){

    let arr = [];

    //1

    if(colorArray.length > 0){
        arr =  dataArray.filter(e=>{
            for(let i = 0; i < colorArray.length; i++){
                if(colorArray[i] === e.color){
                    return e
                }
            }
        })
    }else{
        arr = dataArray
    }

    //2

    if(sweetnessArray.length > 0){
        arr = arr.filter(e=>{
            for(let i = 0; i < sweetnessArray.length; i++){
                if(sweetnessArray[i] === e.sweetness){
                    return e
                }
            }
        })
    }else{
        if(colorArray.length === 0){
            arr = dataArray
        }
    }

    //3

    if (priceArray.length > 0) {
        let fullArrayNum = []
        arr = arr.filter(e => {
            for (let i = 0; i < priceArray.length; i++) {
                let arrNum = priceArray[i].split('-')
                for (let j = 0; j < arrNum.length; j++){
                    fullArrayNum.push(arrNum[j])
                }

                if(fullArrayNum[0] >= 0 && fullArrayNum[1] > 0){
                    if(Number(fullArrayNum[0]) <= e.price && e.price <= (Number(fullArrayNum[1]))){
                        return e
                    }
                }

                else if(Number(fullArrayNum[1]) === 0){
                    if(Number(fullArrayNum[0]) <= e.price){
                        return e
                    }
                }
            }
        })
    }else{
        if(colorArray.length === 0 && sweetnessArray.length === 0){
            arr = dataArray
        }
    }

    //4

    if(countryArray.length > 0){
        arr =  arr.filter(e=>{
            for(let i = 0; i < countryArray.length; i++){
                if(countryArray[i] === e.country){
                    return e
                }
            }
        })
    }else{
        if(colorArray.length === 0 && sweetnessArray.length === 0 && priceArray.length === 0){
            arr = dataArray
        }
    }

    //5

    if(sortArray.length > 0){
        arr =  arr.filter(e=>{
            for(let i = 0; i < sortArray.length; i++){
                if(sortArray[i] === e.grapeSort){
                    return e
                }
            }
        })
    }else{
        if(colorArray.length === 0 && sweetnessArray.length === 0 && priceArray.length === 0 && countryArray.length === 0){
            arr = dataArray
        }
    }

    //6

    if(classificationArray.length > 0){
        arr =  arr.filter(e=>{
            for(let i = 0; i < classificationArray.length; i++){
                if(classificationArray[i] === e.classification){
                    return e
                }
            }
        })
    }else{
        if(colorArray.length === 0 && sweetnessArray.length === 0 && priceArray.length === 0 && countryArray.length === 0 && sortArray.length === 0){
            arr = dataArray
        }
    }

    //7

    if(kindOfSparklingArray.length > 0){
        arr =  arr.filter(e=>{
            for(let i = 0; i < kindOfSparklingArray.length; i++){
                if(kindOfSparklingArray[i] === e.kindOfSparkling){
                    return e
                }
            }
        })
    }else{
        if(colorArray.length === 0 && sweetnessArray.length === 0 && priceArray.length === 0 && countryArray.length === 0 && sortArray.length === 0 && classificationArray.length === 0){
            arr = dataArray
        }
    }

    //8

    if(chooseKindOfWhisky.length > 0){
        arr =  arr.filter(e=>{
            for(let i = 0; i < chooseKindOfWhisky.length; i++){
                if(chooseKindOfWhisky[i] === e.typeOfWhisky){
                    return e
                }
            }
        })
    }else{
        if(colorArray.length === 0 && sweetnessArray.length === 0 && priceArray.length === 0 && countryArray.length === 0 && sortArray.length === 0 && classificationArray.length === 0 && kindOfSparklingArray.length === 0){
            arr = dataArray
        }
    }

    //9

    if(chooseAgingPeriod.length > 0){
        arr = arr.filter(e =>{
            for(let i = 0; i < chooseAgingPeriod.length; i++){
                if(chooseAgingPeriod[i] === e.agingPeriod){
                    return e
                }
                if(chooseAgingPeriod[i][0] === '>'){
                    if(e.agingPeriod > 20){
                        return e
                    }
                }
            }
        })
    }else{
        if(colorArray.length === 0 && sweetnessArray.length === 0 && priceArray.length === 0 && countryArray.length === 0 && sortArray.length === 0 && classificationArray.length === 0 && kindOfSparklingArray.length === 0 && chooseKindOfWhisky.length === 0){
            arr = dataArray
        }
    }

    //10

    if(chooseBottler.length > 0){
        arr =  arr.filter(e=>{
            for(let i = 0; i < chooseBottler.length; i++){
                if(chooseBottler[i] === e.bottler){
                    return e
                }
            }
        })
    }else{
        if(colorArray.length === 0 && sweetnessArray.length === 0 && priceArray.length === 0 && countryArray.length === 0 && sortArray.length === 0 && classificationArray.length === 0 && kindOfSparklingArray.length === 0 && chooseKindOfWhisky.length === 0 && chooseAgingPeriod.length === 0){
            arr = dataArray
        }
    }



    return arr;

}

export function drinkTranslation(drink,fun){

    switch (drink){
        case 'Вино':
            fun('wine')
            break;
        case 'Игристое':
            fun('sparkling')
            break;
        case 'Виски':
            fun('whisky')
            break;
        case 'Коньяк':
            fun('brandy')
            break;
        case 'Арманьяк':
            fun('armagnac')
            break;
        case 'Ром':
            fun('rum')
            break;
        case 'Водка':
            fun('vodka')
            break;
        case 'Ликер':
            fun('liquor')
            break;
        case 'Коктейли':
            fun('cocktails')
            break;
        case 'Деликатесы':
            fun('delicacies')
            break;
    }
}