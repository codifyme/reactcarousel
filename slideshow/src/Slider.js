import React, {useState} from 'react';
import './slider.scss';
import ImgComp from "./ImgComp";
import i1 from "./pics/1.jpg";
import i2 from "./pics/2.jpg";
import i3 from "./pics/3.jpg";
import i4 from "./pics/4.jpg";
import i5 from "./pics/5.jpg";



function Slider(){
    //let's create an array for component to show inside the slider
    //Let's add comopnent to the Array
    
    let sliderArr=[
    <ImgComp src={i1}/>,
    <ImgComp src={i2}/>,
    <ImgComp src={i3}/>,
    <ImgComp src={i4}/>,
    <ImgComp src={i5}/>];//just numbers for now
    //add buttons
    const[x, setX]=useState(0);
    const goLeft=()=>{
        x===0 ? setX(-100*(sliderArr.length-1)):setX(x+100);
    };
    const goRight=()=>{
        //sliderArr.lenght was used so the input can be dynamic
        x===-100*(sliderArr.length-1)? setX(0):setX(x-100);
    };
    return(
        <div className="slider">
        {
            sliderArr.map((item, index)=>{
                return(
                    <div 
                        key={index} 
                        className="slide"
                        style={{transform:`translateX(${x}%)`}}>
                        {item}
                    </div>
                );
            })
        }
        <button id="goLeft" onClick={goLeft}>
        <i class="fas fa-chevron-left">left</i>
        </button>
        
        <button id="goRight" onClick={goRight}>
        <i class="fas fa-angle-right">right</i>
        </button>
        </div>
        );
}

export default Slider;