import React from 'react'
import ReactDOM from 'react-dom'
import Perf from 'react-addons-perf'
window.Perf = Perf

function Yup(props) {
  return (
    <h1>WE DID IT</h1>
  )
}

let container = document.querySelector('.app')

ReactDOM.render(<Yup />, container)
