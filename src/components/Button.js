import React from 'react'

function Button({clickHandler, btntext}) {
    return (
        <>
            <button onClick={clickHandler}>{btntext}</button>
        </>
    )
}

export default Button
