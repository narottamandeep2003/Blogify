import React from 'react'

export default function PostCard() {
    return (
        <div className='PostCard'>
            <div className="PostCardtext">
                <div className="PostProfile">
                    <img src="./imgProfile.jpg" alt="" className='PostCardImg' />
                    <span className='PostCardName'>Narotta</span>
                </div>
                <p className='PostCardTitle'>
                    How to master dp
                </p>
                <p className='PostCardDesc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, cum neque. Veritatis iusto dolorem fuga tempora beatae necessitatibus fugiat dignissimos a, voluptatem culpa aut, odit voluptates corporis minima eos voluptas.
                </p>
                <div className="cardBtn">
                    <button className='OpenCard'>Open</button>
                    <button className='OpenCard'>Delete</button>
                    <button className='OpenCard'>Edit</button>
                </div>
            </div>
            <div className="PostCardRight">
                <img src="./Dance.jpg" alt="" className='PostCardRightImg' />
            </div>
        </div>
    )
}
