import React, { useEffect, useState } from 'react'
import Blogs from "./Blogs"
export default function LandingPage() {
    const [topicsList, settopicsList] = useState([])
    const [Expand, setExpand] = useState(0)
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
                    {/* <span id="Top"  >Top Blog</span> */}
                    <div className="boxTopic">
                        <div className="topicInner">

                            <span id="addTopic" onClick={() => {
                                setExpand(!Expand)
                            }}>Topic</span>
                        </div>
                        <div className={`HomeTopicBox  ${Expand ? "" : "hideTopicsBox"}`} id="topics">
                            {
                                topicsList.map((element, index) => {
                                    return (<span className='Topic' key={index} onClick={TopicOnClick}>{element}</span>)
                                })
                            }
                        </div>


                    </div>
                    <span id="ApplyTopic">Apply</span>

                </div>

            </div>

            <Blogs>
            </Blogs>
        </div>
    )
}
