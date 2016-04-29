import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement, rename} from './actions'
import Items from './items'
import Title from './title'
import Record from './record'

function Main({items, onIncrement, onDecrement, onNameChange}) {
  function nameChange(i, e) {
    onNameChange(i, e.target.value)
  }
  return (
    <div>
      <Record />

      <Title items={items}/>

      <Items
        items={items}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onNameChange={nameChange}
      />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    items: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement(i) {
      dispatch(increment(i))
    },
    onDecrement(i) {
      dispatch(decrement(i))
    },
    onNameChange(i, name) {
      dispatch(rename(i, name))
    }
  }
}

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)
export default MainContainer
