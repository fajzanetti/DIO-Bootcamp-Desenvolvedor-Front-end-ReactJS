import React from 'react'

export default function index({todolist}) {
    return (
        <ul>
            {todolist.map(({id, name}) => (
                <li key={id}>{name}</li>
            ))}
        </ul>
    )
}
