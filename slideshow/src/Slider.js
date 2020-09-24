import React from 'react';
import './slider.scss';


function Slider(){
    //let's create an array for component to show inside the slider
    let sliderArr=[1,2,3,4,5]//just numbers for now
    //add buttons
    const goLeft=()=>{};
    const goRight=()=>{};
    return(
        <div className="slider">
        {
            sliderArr.map((item,index)=>{
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