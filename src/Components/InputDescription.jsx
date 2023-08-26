import React, { useRef, useState } from 'react'

export default function InputDescription(props) {
    const [v, setv] = useState(props.initialVal);
    const prevValue = useRef(1)
    const handleChange = (e) => {
        setv(e.target.value)
        props.change({ "type": "Update", "key": props.indexkey, "val": e.target.value })

    }
    const deleteComponent = () => {
        props.change({ "type": "delete", "key": props.indexkey })
    }
    return (
        <div className="innerComponent marginB">
            <div className='EditTextForDel'>
                <textarea className='EditInputDes' placeholder='Enter text' value={v} rows={1}
                    onKeyUp={(e) => {
                        e.target.style.height = 'auto';
                        e.target.style.height = e.target.scrollHeight + 'px';
                        if (e.key === "Backspace") {
                            if (prevValue.current === 1) {
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
                    onChange={handleChange}></textarea>
            </div>
        </div>
    )
}
