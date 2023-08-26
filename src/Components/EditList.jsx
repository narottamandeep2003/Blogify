import React, { useState } from 'react'

export default function EditList(props) {
    const [lists, setlists] = useState(props.initialVal)
    let handleOnClick = () => {
        props.change({ "type": "updateList", "key": props.indexkey, "val": [...lists, ""] })
        setlists([...lists, ""])
    }
    let handleOnChange = (e, i) => {

        let l1 = lists.map((el, index) => {
            if (index === i) {
                return e.target.value
            }
            else { return el }
        })
        props.change({ "type": "updateList", "key": props.indexkey, "val": l1 })
        setlists(l1)

    }
    let handleDelete = (i) => {
        let l1 = lists.filter((el, index) => {
            if (index === i) {
                return false
            }
            else { return true }
        })
        if (l1.length === 0) {
            props.change({ "type": "DeleteList", "key": props.indexkey, })

        }
        else {
            props.change({ "type": "updateList", "key": props.indexkey, "val": l1 })
            setlists(l1)
        }
    }
    return (
        <div className='EditList' >
            <ul>
                {
                    lists.map((e, index) => {

                        return <div className='Ul' key={`${props.indexkey}+${index}`}>
                            <div className="deleteBtnLi" onClick={() => { handleDelete(index) }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                </svg>
                            </div>
                            <li key={`${props.indexkey}+${index}List`}>
                                <textarea className='liInput' placeholder='Text' value={e} rows={1} onKeyUp={(e) => {
                                    e.target.style.height = 'auto';
                                    e.target.style.height = e.target.scrollHeight + 'px';
                                }} onChange={(e) => { handleOnChange(e, index) }}></textarea>
                                {/* <input type="text" className='liInput' placeholder='Text' value={e} onChange={(e) => { handleOnChange(e, index) }} /> */}
                            </li>
                        </div>
                    })
                }

                <div className='AddComponentsBtnList' key={"AddList"} >
                    <span onClick={handleOnClick}>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                    </svg>
                    </span>
                </div>
            </ul>
        </div>
    )
}
