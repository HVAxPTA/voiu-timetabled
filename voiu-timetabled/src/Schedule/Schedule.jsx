import React from 'react'
import './Schedule.css'
import events from '../Info.json'
import Events from '../Events/Events'

const Schedule = () => {

    const days = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];
    const hours = ['7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm', '9pm', '10 pm'];

    return (
        <div className='schedule'>
            {days.map((day, index)=> (
                <div key={day} className="col-header" style={{ gridColumn: index + 2, gridRow: 1 }}>
            {day}
            </div>
            ))}

            {hours.map((hour, index)=> (
                <div key={hour} className="row-header" style={{ gridColumn: 1, gridRow: index + 2 }}>
            {hour}
            </div>
            ))}

            {events.map((event, index)=> (
                <Events key={index} {...event}></Events>
            ) )}
        </div>
    )
}

export default Schedule
