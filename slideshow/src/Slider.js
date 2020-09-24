import React from 'react';
import './slider.scss';


function Slider(){
    //let's create an array for component to show inside the slider
    let sliderArr=[1,2,3,4,5]//just numbers for now
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
        //lets add two buttons to navigate
        <button>Left</button>
        <button>right</button>
        </div>
        );
}

export default Slider;