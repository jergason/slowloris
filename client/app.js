import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect, Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducer'
import Main from './main'

let store = createStore(reducer)

let container = document.querySelector('.app')

ReactDOM.render(<Provider store={store}><Main /></Provider>, container)
