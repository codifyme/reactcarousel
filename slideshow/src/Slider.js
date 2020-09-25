import React,{useState} from 'react';
import './slider.scss';


function Slider(){
    //let's create an array for component to show inside the slider
    let sliderArr=[1,2,3,4,5];//just numbers for now
    //add buttons
    const[x, setX]=useState(0);
    const goLeft=()=>{
        console.log(x)
        x===0 ? setX(-100(sliderArr.length-1)):setX(x+100);
    };
    const goRight=()=>{
        console.log(x)
        //sliderArr.lenght was used so the input can be dynamic
        x===-100*(sliderArr.length-1)?setX(0):setX(x-100);
    };
    return(
        <div className="slider">
        {
            sliderArr.map((item, index)=>{
                return(
                    <div key={index} className="slide">
                        {item}
                    </div>
                );
            })
        }
        <button id="goleft" onClick={goLeft}>Left</button>
        <button id="goRight" onClick={goRight}>right</button>
        </div>
        );
}

export default Slider;