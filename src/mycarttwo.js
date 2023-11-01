import React from 'react';
import './home.css';

import { useState } from 'react';

function MyCardTwo({ brand, amount, image }){

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }
    return (
        <>
              <div className={`${isHovered ? 'hovered' : 'mycard text-center mx-1'}`}onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

                <h3 className='cardhead'>{brand}</h3>
                <p className='cardpara'>{amount}</p>
                <img className='cardimage' src={image} />

                {isHovered && <div className='text-center showme'>
                    <button className='btn stackbutton'>Connect</button>
                    <p className='stacklearn font-weight-bold'>Learn More</p>

                </div>
                }

                </div>
        
        </>
    );
}

export default MyCardTwo;