import React from 'react'
import './Events.css'

const Events = (props) => {
    const column = props.day;
    const row = props.time;
    
    return (
        <div className={`event ${props.color}`} style={{gridColumn: column, gridRow: `${row} / span 3`}}>
            <strong>{props.title}</strong> <br />
            {props.class}
        </div>
    )
}

export default Events
