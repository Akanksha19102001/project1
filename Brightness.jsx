import React, { Component, useState } from 'react';
import Slider from '@material-ui/core/Slider';

// import Home from './Home';

function Brightness() {
    let [opacity, setOpacity] = useState(0.2)

    return (
        <>
            <br /><br />
            <Slider
                defaultValue='20'
                onChange={(event, value) => { setOpacity(value * 0.01) }}
                valueLabelDisplay="auto"
                step={10}
            />

            <div style={{ height: '200px', width: '200px', backgroundColor: 'blue', opacity: opacity }}>

            </div>

            {/* <Home style={{ backgroundColor: 'blue', opacity: opacity }} /> */}
        </>
    )
}
export default Brightness