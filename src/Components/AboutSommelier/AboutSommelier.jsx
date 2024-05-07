import React from 'react';
import "./AboutSommelier.css"
import sommelierPhoto from "../../img/Sommelier.png"
import Line from "../../img/Line.png"

const AboutSommelier = () => {
    return (
        <div className='AboutSommelier'>
            <img src={sommelierPhoto} alt="sommelierPhoto" />
            <div className='flex-text'>
                <p>Благодаря рекомендациям наших опытных кавистов, вы сможете не только приобрести ту самую бутылку вина, но и узнать много нового о сочетаниях, подборе гастрономической пары, необходимости декантации, хранении и сервировке. </p>
                <p>Мы с удовольствием поделимся с Вами самыми главными винными секретами, а также поможем подобрать идеальные букет и вкус, соответствующие поводу, вашим предпочтениям и статусу. </p>
            </div>
            <div className='AboutSommelier_btn'>
                <p>узнать больше</p>
                <img src={Line} alt=""/>
            </div>
        </div>
    );
}

export default AboutSommelier;