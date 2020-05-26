import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '../../components/button'
import Input from '../../components/input'
import List from '../../components/list'

import { addTodo } from '../../store/actions/todo'

class App extends Component {
    state = {
        input: ''
    }

    handleOnClick = () => {
        console.log('BUTTON')
    }

    handleOnChange = (event) => {
        // console.log('INPUT', event.target.value)

        this.setState({input: event.target.value})
    }

    render() {
        const { input } = this.state
        return (
            <div>
                <List todolist={[]}/>
                <Input onChange={(event) => this.handleOnChange(event)} value={input}/>
                <Button onClick={this.handleOnClick}>Adicionar</Button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    listTodo: state.todo
})

export default connect(
    mapStateToProps, 
    {addTodo}
)(App)