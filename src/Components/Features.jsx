import React from 'react'
import Saved from './Saved'
import Following from './Following.jsx'
import Post from './Post'

export default function Features(props) {
    switch (props.Target) {
        case "Saved":
            return (
                <Saved></Saved>
            )
        case "Following":
            return (
                <>
                <Following></Following>
                </>
            )
        case "Post":
            return (<>
                <Post></Post>
            </>)
        case "Draft":
            return (<>
                <Post></Post>
            </>)
        default:
            return (<>
                <h4>Error</h4>
            </>)

    }

}
