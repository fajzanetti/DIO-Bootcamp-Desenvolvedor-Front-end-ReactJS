import React, { Component } from 'react'

import Button from '../../components/button'
import Input from '../../components/input'
import List from '../../components/list'

export default class index extends Component {
    state = {
        input: ''
    }

    handleOnClick = () => {
        console.log('BUTTON')
    }

    handleOnChange = (event) => {
        console.log('INPUT', event.target.value)
    }

    render() {
        return (
            <div>
                <List todolist={[]}/>
                <Input onChange={(event) => this.handleOnChange(event)}/>
                <Button onClick={this.handleOnClick}>Adicionar</Button>
            </div>
        )
    }
}
