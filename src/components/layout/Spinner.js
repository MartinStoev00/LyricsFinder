import React from 'react'
import spinner from './spinner.gif'

export default function Spinner() {
    return (
        <div>
            <img src={spinner} alt="Loading..."
            style={{width: '20px', margin:'40px auto', display: 'block'}}/>
        </div>
    )
}
