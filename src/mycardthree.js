import React from 'react';
import './home.css';

import { useState } from 'react';

function MyCardThree({ brand, amount, image }){

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
              <img className='cardimagethree' src={image} />
                <h3 className='cardhead my-4'>{brand}</h3>
               
                

                

                </div>
        
        </>
    );
}

export default MyCardThree;