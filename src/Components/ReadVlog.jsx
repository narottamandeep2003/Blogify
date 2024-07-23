import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Nav from './Nav';
import { blogList } from './blogList';
export default function ReadVlog(props) {
    console.log(props)
    const location = useLocation();
    console.log("props", location.state)
    let x=useParams();
    let blog=blogList.find((blog)=>{
        return blog.id===Number.parseInt(x.id)
    })
    console.log(blog)
    return (
        <div className='ReadVlog'>
            <Nav></Nav>
            <div className="ReadVlogProfile">
                <img src={blog.profileImg} alt="" className='readimgProfile' />
                <div className="ReadProfileData">
                    <span className='Readdarkcol'>{blog.profileName}</span>
                    <span className='Readlightcol'>{blog.time}</span>
                </div>
                <div className='ReadIcon'>
                    <div className='Readbookmark'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                        </svg>
                    </div>
                    <div className="Readbookmarkfollow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill-add" viewBox="0 0 16 16">
                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="ReadPost mt-2">
                {blog?.data?.map((e, index) => {
                    if (e.type === "text")
                        return <div key={e.key} className='PostText'>{e.dataval}</div>
                    else if (e.type === "img")
                        return <img src={e.imgBase64} key={e.key}  alt="" className='PostImg' />
                    else if (e.type === "title")
                        return <div key={e.key} className="PostTitle mb-2">{e.dataval}</div>
                    else if (e.type === "heading")
                        return <div key={e.key} className="PostHeading mb-2 ">{e.dataval}</div>
                    else if (e.type === "List")
                        return <ul className="PostUl" key={e.key}>
                            {e.dataval.map((ele, liIndex) => {
                                return <li key={liIndex} >{ele}</li>
                            })}
                        </ul>
                    else
                        return ""

                })
                }
            </div>
            <div className="footerRead">
                <div className="Finish">...</div>
            </div>
        </div>
    )
}
