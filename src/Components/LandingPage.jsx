import React, { useEffect, useState } from 'react'
import Blogs from "./Blogs"
export default function LandingPage() {
    const [showleftBtn, setshowleftBtn] = useState(0)
    const [showrightBtn, setshowrightBtn] = useState(1)
    const [topicsList, settopicsList] = useState([])
    // const [Expand, setExpand] = useState(0)
    const buttonLeft = function () {
        document.getElementById('topics').scrollLeft -= 20;
        setshowrightBtn(1)
        if (document.getElementById('topics').scrollLeft === 0) {
            setshowleftBtn(0);
        }
    };
    const buttonRight = function () {
        setshowleftBtn(1)
        const before = document.getElementById('topics').scrollLeft;
        document.getElementById('topics').scrollLeft += 20;
        const after = document.getElementById('topics').scrollLeft;
        if (before === after) {
            setshowrightBtn(0)
        }
    };
    const TopicOnClick = (e) => {
        // const classname=["Topic","targetTopic"]
        if (e.currentTarget.classList.contains('Topic')) {
            e.currentTarget.classList.remove("Topic")
            e.currentTarget.classList.add("targetTopic")

        }
        else {
            e.currentTarget.classList.remove("targetTopic")
            e.currentTarget.classList.add("Topic")
        }
    }
    useEffect(() => {
        settopicsList(["Following", "Java", "Dance", "Fashion", "Following", "Java", "Dance", "Fashion", "Following", "Java", "Dance", "Fashion", "Following", "Java", "Dance", "Fashion", "Following", "Java", "Dance", "Fashion", "Following", "Java", "Dance", "Fashion", "Following", "Java", "Dance", "Fashion"])
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
                    {/* <span id="addTopic" onClick={() => {
                        setExpand(1)
                    }}>Expand</span> */}
                    {showleftBtn ? (<span id="buttonLeft" onClick={buttonLeft}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                    </span>) : (<div className="empty"></div>)}

                    <div className="topics" id="topics">
                        {
                            topicsList.map((element,index) => {
                                return (<span className='Topic' key={index} onClick={TopicOnClick}>{element}</span>)
                            })
                        }
                    </div>

                    {showrightBtn ? (<span id="buttonRight" onClick={buttonRight}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </span>) : ""}
                    <span id="ApplyTopic">Apply</span>

                </div>
                {/* {Expand ? (
                    <div className="ExpandTopics">
                        <div className="ExpandTopicsList">
                            {
                                topicsList.map((element,index) => {
                                    return (<span className='etopics Topic' key={index} onClick={TopicOnClick}>{element}</span>)
                                })
                            }
                        </div>
                        <span className='HideExpand' onClick={() => { setExpand(0) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                            </svg>
                        </span>
                    </div>
                ) : ""} */}

            </div>

            <Blogs>
            </Blogs>
        </div>
    )
}
