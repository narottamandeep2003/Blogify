import React from 'react'
import BlogCard from './BlogCard'
import { blogList } from './blogList'


const blogLists=blogList;
export default function Blogs() {
    return (
        <div>
            <div className="Blogs">
                {blogLists.map((blog) => {
                    return <BlogCard key={blog.id} data={blog}  ></BlogCard>
                })
                }

            </div>
        </div>
    )
}


