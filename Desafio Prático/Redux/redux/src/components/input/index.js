import React from 'react'

export default function index({onChange, value}) {
    return (
        <input type="text" onChange={onChange} value={value}/>
    )
}
