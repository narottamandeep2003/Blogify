import React, { useEffect, useRef, useState } from 'react'
import Blogs from "./Blogs"
export default function LandingPage() {
    const [topicsList, settopicsList] = useState([])
    const TopicOnClick = (e) => {
        if (e.currentTarget.classList.contains('Topic')) {
            e.currentTarget.classList.remove("Topic")
            e.currentTarget.classList.add("targetTopic")

        }
        else {
            e.currentTarget.classList.remove("targetTopic")
            e.currentTarget.classList.add("Topic")
        }
    }
    const ref = useRef(null)
    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
        if (ref.current.scrollLeft === 0) {

        }
    };
    useEffect(() => {
        settopicsList([
            "Following",
            "Rotation",
            "Soil",
            "Irrigation",
            "Organic",
            "Precision",
            "Agroforestry",
            "Sustainable",
            "Hydroponics",
            "Aquaponics",
            "Pest",
            "Machinery",
            "Biotechnology",
            "Husbandry",
            "Dairy",
            "Economics",
            "Greenhouse",
            "Vertical",
            "Agroecology",
            "Permaculture",
            "GMO"
        ])
    }, [])
    return (
        <div className='LandingPage'>
            <div className="Sticky">
                <div className="searchBox"><input type="text" name="Search" id="Search" placeholder='Search' />
                    <button className='SearchBtn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </button>
                </div>

                <div className="topic">

                    <div className="boxTopic">
                        <span className='leftBtnTopic' onClick={() => scroll(-30)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                            </svg>
                        </span>
                        <div className="ScrollTipicBox" ref={ref}>
                            {topicsList.map((ele, index) => {
                                return <span key={index} onClick={TopicOnClick} className='topics Topic' >{ele}</span>
                            })}
                        </div>
                        <span className='rightBtnTopic' onClick={() => scroll(30)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg>
                        </span>
                    </div>

                </div>

            </div>

            <Blogs>
            </Blogs>
        </div>
    )
}
