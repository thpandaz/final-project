import React from 'react';
import './Highlight.css'
import Card from './Card.js';
import img1 from '../../../images/lemon dessert.jpg';
import img2 from '../../../images/greek salad.jpg';


function Highlight() {

    const data = [img1, img2, img1]
    return (
        <div className='highlight-container'>
            <div className='highlight-left'>
                <h2 className='highlight-title'>Our specials of the week!</h2>
                <div className='highlight-button'>Order Online</div>
            </div>
            <div className='highlight-card-container'>
                {
                    data.map( e => 
                        <Card src = {e}/>
                    )
                }
            </div>
        </div>
    )
}

export default Highlight;