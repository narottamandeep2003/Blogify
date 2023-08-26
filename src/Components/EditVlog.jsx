import React, { useReducer, useRef, useState } from 'react'
import Nav from './Nav'
import InputDescription from './InputDescription';
import ImgEdit from './ImgEdit';
import TitleEdit from './TitleEdit';
import EditList from './EditList';
import {  useNavigate } from 'react-router-dom';

export default function EditVlog() {
    const navigate  = useNavigate();
    const [Componentsbtn, setComponentsbtn] = useState(0);
    const count = useRef(1)
    const initialState = {
        "data": [
            {
                "type": "title",
                "key": 0,
                "dataval": ""
            }
        ]
    };

    const HandleVlogData = (state, action) => {
        switch (action.type) {

            case "Update":
                return ({
                    ...state, "data": state.data.map((e) => {
                        if (e.key === action.key) {
                            e.dataval = action.val;
                            return e;
                        }
                        else
                            return e;
                    })
                })
            case "AddImg": {
                let newdata = {
                    "type": "img",
                    "key": count.current,
                    "imgBase64": action.imgBase64
                }
                count.current += 1;
                return (
                    { ...state, "data": [...state.data, newdata] }
                )
            }
            case "delete": {
                return ({
                    ...state, "data": state.data.filter((e) => {
                        return (e.key !== action.key || e.title)
                    })
                })
            }
            case "AddText": {
                let newdata = {
                    "type": "text",
                    "key": count.current,
                    "dataval": ""
                }
                count.current += 1;
                return { ...state, "data": [...state.data, newdata] }
            }
            case "Addheading": {
                let newdata = {
                    "type": "heading",
                    "key": count.current,
                    "dataval": ""
                }
                count.current += 1;
                return { ...state, "data": [...state.data, newdata] }
            }
            case "AddList": {
                let newdata = {
                    "type": "List",
                    "key": count.current,
                    "dataval": [""]
                }
                count.current += 1;
                return { ...state, "data": [...state.data, newdata] }
            }
            case "updateList": {
                // console.log("updateList")
                return ({
                    ...state, "data": state.data.map((e) => {
                        if (e.key === action.key) {
                            e.dataval = action.val;
                            return e;
                        }
                        else
                            return e;
                    })
                })
            }
            case "DeleteList": {
                // console.log("updateList")
                return ({
                    ...state, "data": state.data.filter((e) => {
                        return (e.key !== action.key)
                    })
                })
            }
            default:
                return { ...state }
        }
    }
    const [Vlogdata, dispatch] = useReducer(HandleVlogData, initialState);
    const handleChanges = (para) => {
        dispatch(para);

    }
    const handleAddComponents = (para) => {
        dispatch(para);
        setComponentsbtn(0);
    }
    const handleOnChange = (e) => {
        const reader = new FileReader();
        reader.onload = function (event) {
            const base64String = event.target.result;
            dispatch({ type: "AddImg", imgBase64: base64String })
            setComponentsbtn(0);
        };
        reader.readAsDataURL(e.target.files[0]);

    }
    const handleAddComponentsBtn = () => {
        setComponentsbtn(!Componentsbtn)
    }
    return (<>
        <div className='EditScreen'>
            <Nav></Nav>
            <div className="BtnsBox">
                <button className="btnShow" onClick={() => { navigate ('/ReadVlog', { state: Vlogdata }) }}>Publish</button>
                <button className="btnSaveEdit">Draft</button>
            </div>
            <div className="EditWindow">

                <div className="postdDescription">

                    {
                        Vlogdata.data.map((e, index) => {
                            if (e.type === "text")
                                return <InputDescription key={e.key} indexkey={e.key} change={handleChanges} initialVal={e.dataval}></InputDescription>
                            else if (e.type === "img")
                                return <ImgEdit key={e.key} indexkey={e.key} change={handleChanges} imgBase64={e.imgBase64}></ImgEdit>
                            else if (e.type === "title")
                                return <TitleEdit key={e.key} indexkey={e.key} change={handleChanges} initialVal={e.dataval} classes="EditTitle mbb-3" heading={false}></TitleEdit>
                            else if (e.type === "heading")
                                return <TitleEdit key={e.key} indexkey={e.key} change={handleChanges} initialVal={e.dataval} classes="EditTitle mb-2 titleheading" heading={true}></TitleEdit>
                            else if (e.type === "List")
                                return <EditList key={e.key} indexkey={e.key} change={handleChanges} initialVal={e.dataval}></EditList>
                            else
                                return ""

                        })
                    }
                    <div className="AddComponentsBox">
                        <div className='AddComponentsBtn' onClick={handleAddComponentsBtn}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                            </svg>
                        </div>
                        {
                            (Componentsbtn) ? (
                                <div className="EditComponents">
                                    <div className='AddComponent' onClick={() => { handleAddComponents({ type: "Addheading" }) }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-heading" viewBox="0 0 16 16">
                                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                            <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z" />
                                        </svg>
                                    </div>
                                    <div className="AddComponent" onClick={() => { handleAddComponents({ type: "AddText" }) }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-text" viewBox="0 0 16 16">
                                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                            <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                                        </svg>
                                    </div>
                                    <label htmlFor='fileimg' className='AddComponent'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image-fill" viewBox="0 0 16 16">
                                            <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                                        </svg>
                                    </label>
                                    <input type="file" id="fileimg" onChange={handleOnChange} accept="image/*" />
                                    <div className='AddComponent' onClick={() => { handleAddComponents({ type: "AddList" }) }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list-task" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z" />
                                            <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                                            <path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z" />
                                        </svg>
                                    </div>
                                    {/* <div className='AddComponent' onClick={() => { handleAddComponents({ type: "AddText" }) }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-code-slash" viewBox="0 0 16 16">
                                            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                                        </svg>
                                    </div> */}

                                </div>
                            ) : ""
                        }
                    </div>
                </div>
            </div>

        </div>
    </>

    )
}
