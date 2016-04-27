import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Perf from 'react-addons-perf'
import {connect, Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducer'
import App from './list'

let store = createStore(reducer)

window.Perf = Perf

let container = document.querySelector('.app')

ReactDOM.render(<Provider store={store}><App /></Provider>, container)
