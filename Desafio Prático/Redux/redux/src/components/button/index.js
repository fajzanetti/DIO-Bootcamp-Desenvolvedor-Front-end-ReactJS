import React from 'react'

export default function index({children, onClick}) {
    return (
        <button onClick={onClick}>{children}</button>
    )
}
