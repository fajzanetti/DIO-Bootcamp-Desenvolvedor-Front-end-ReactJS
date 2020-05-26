import React from 'react'
import { connect } from 'react-redux'

const List = ({todos}) => {
    return (
        <ul>
            {todos.map( item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
}

const mapStateToProps = state => ({
    todos: state.todo.list
})

export default connect(mapStateToProps) (List);