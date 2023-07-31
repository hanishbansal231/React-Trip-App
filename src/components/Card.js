import React, { useState } from 'react'

function Card({ id, name, description, image, budget, removeTour }) {
    const [readMore, setReadMore] = useState(false);
    const info = readMore ? description : `${description.substring(0, 60)}....`;
    function readmoreHandler() {
        setReadMore(!readMore);
    }
    return (
        <div className='card'>
            <img src={image} className='image' alt={name} />
            <div className='plan-contant'>
                <h4 className='tour-price'>RS: {budget}</h4>
                <h4 className='tour-name'>{name}</h4>
                <div className='tour-description'>{info}
                <span className='readMore' onClick={readmoreHandler}>
                    {readMore ? `Show Less` : `Show More`}
                </span>
                </div>
    
            </div>
            <button className='not-interest' onClick={() => removeTour(id)}>Not Interest</button>
        </div>
    )
}

export default Card;