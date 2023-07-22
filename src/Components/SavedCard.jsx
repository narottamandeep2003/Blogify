import React from 'react'

export default function SavedCard() {
    return (
        <div className='SavedCard'>
            <div className="SavedCardtext">
                <div className="SavedProfile">
                    <img src="./imgProfile.jpg" alt="" className='SavedCardImg' />
                    <span className='SavedCardName'>Narotta</span>
                </div>
                <p className='SavedCardTitle'>
                    How to master dp
                </p>
                <p className='SavedCardDesc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, cum neque. Veritatis iusto dolorem fuga tempora beatae necessitatibus fugiat dignissimos a, voluptatem culpa aut, odit voluptates corporis minima eos voluptas.
                </p>
                <button className='OpenCard'>Open</button>
            </div>
            <div className="SavedCardRight">
                <img src="./Dance.jpg" alt="" className='SavedCardRightImg' />
            </div>
        </div>
    )
}
