
import React, { useState } from 'react'
function ReadMore({ text, maxLenght = 50 }) {

    const [isExpand, setIsExpand] = useState(false)

    const togglefun = () => {
        setIsExpand(!isExpand)
    }
    return (
        <div>
            <p>{isExpand ? text : text.slice(0, maxLenght) + (text.length > maxLenght ? "..." : "")}</p>
            {text.length > maxLenght && (
                <button className="readbut" onClick={togglefun}>{
                    isExpand ? 'Readless' : 'ReadMore'
                }</button>
            )
            }
        </div>
    )
}

export default ReadMore