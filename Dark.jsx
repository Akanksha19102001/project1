import React, { Component, useState } from 'react';



function Dark() {

    const [bg, setBg] = useState("black")
    const [color, setColor] = useState('white')
    let [i, setI] = useState(1)

    const x = () => {
        if (i == 1) {
            setBg("white")
            setColor("black")
            setI(0)
        }
        else {
            setBg("black")
            setColor("white")
            setI(1)
        }
        console.log(i)
    }

    const style1 = {
        height: '90vh',
        width: '100%',
        backgroundColor: bg,
        color: color
    }
    return (
        <>
            <button onClick={x}>Click</button>
            <div style={style1}>
                <h1>Akanksha</h1>
            </div>
        </>
    )
}
export default Dark