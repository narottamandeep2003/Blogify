import React, { useRef, useState } from 'react'

export default function TitleEdit(props) {
    const [v, setv] = useState(props.initialVal);
    const prevValue = useRef(1)
    const handleChange = (e) => {
        // prevValue.current=v;
        setv(e.target.value)
        props.change({ "type": "Update", "key": props.indexkey, "val": e.target.value })

    }
    const deleteComponent = () => {
        props.change({ "type": "delete", "key": props.indexkey })
    }
    return (
        <div className={(props.heading ? "innerComponent " : "innerComponent innerComponent ")} >
            <div className='EditTextForDel'>
                <textarea className={props.classes} placeholder='Title' rows={1} value={v}

                    onKeyUp={(e) => {
                        e.target.style.height = 'auto';
                        e.target.style.height = e.target.scrollHeight + 'px';
                        if (e.key === "Backspace") {
                            if (prevValue.current === 1) {
                                if (props.heading)
                                    deleteComponent()
                            }
                            else if (prevValue.current === 0) {
                                if (v === "")
                                    prevValue.current = 1
                            }
                        }
                        else {
                            if (prevValue.current === 1) {
                                prevValue.current = 0;
                            }
                        }
                    }}
                    onChange={handleChange} ></textarea>
            </div>
        </div>
    )
}
