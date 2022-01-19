import Button from '@material-ui/core/Button';
import React, { Component, useState } from 'react';
import './Home.css'


function Home() {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    const operator = ["+", "-", "*", "/", "."]
    const [ans, setAns] = useState('')
    const x = (number) => {
        setValue(value + number)
        if (!operator.includes(number)) {
            setResult(eval(value + number))
        }
    }
    const y = () => {
        setAns(result)
        setValue("")
        setResult("")
    }
    const d = () => {
        setAns("")
        setValue("")
        setResult("")
    }
    return (
        <>
            <div className='calci'>
                <div>
                    <h1>
                        ({result || "0"})
                        {value || '0'}
                    </h1>
                    <h1>{ans}</h1>
                </div>
                <div className='operators'>
                    <Button onClick={() => { x('/') }}>/</Button>
                    <Button onClick={() => { x('*') }}>*</Button>
                    <Button onClick={() => { x('+') }}>+</Button>
                    <Button onClick={() => { x('-') }}>-</Button>
                    <Button onClick={d}>del</Button>
                </div>
                <div className='integers'>
                    <Button onClick={() => { x('1') }}>1</Button>
                    <Button onClick={() => { x('2') }}>2</Button>
                    <Button onClick={() => { x('3') }}>3</Button>
                    <Button onClick={() => { x('4') }}>4</Button>
                    <Button onClick={() => { x('5') }}>5</Button>
                    <Button onClick={() => { x('6') }}>6</Button>
                    <Button onClick={() => { x('7') }}>7</Button>
                    <Button onClick={() => { x('8') }}>8</Button>
                    <Button onClick={() => { x('9') }}>9</Button>
                    <Button onClick={() => { x('.') }}>.</Button>
                    <Button onClick={() => { x('0') }}>0</Button>
                    <Button onClick={y}>=</Button>
                </div>
            </div>
        </>
    )
}

export default Home
