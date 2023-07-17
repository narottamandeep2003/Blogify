import React from 'react'

export default function BlogCard() {
    return (
        <div>
            <div className="blog">
                <div className="card">
                    <img src="./coding.jpg" alt="" className='cardimg' />
                    <div className="CardProfileBox">
                        <img src="./imgProfile.jpg" alt="" className='cardProgileimg' />
                        <div className="NameDate">
                            <span className='CardName'>Narotta</span>
                            <span className='CardDate'>Mar 2</span>
                        </div>
                        <div className="followIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill-add" viewBox="0 0 16 16">
                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                            </svg>
                        </div>
                    </div>
                    <h3 className='CardTitle'>How to Reuse Micro Frontends</h3>
                    <p className='CardDes'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta inventore esse, dolore unde laboriosam quo nulla optio iusto corrupti illo delectus porro aliquid ...
                    </p>
                    <div className="cardFooter">
                        <span className='CardTopic Topic'>Dynamic programing</span>
                        <div>
                            <div className="CardLike like">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                </svg>
                            </div>
                            <div className="CardBookMark bookmark">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
