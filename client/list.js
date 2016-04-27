import React, {Component} from 'react'
import {connect} from 'react-redux'
import {map} from 'lodash'
import {increment, decrement, rename} from './actions'
import Item from './item'
import Record from './record'

// TODO: add a button at the top that adds new things
// make the title list the count of all the items
function ItemsList({items, onIncrement, onDecrement, onNameChange}) {
  function nameChange(i) {
    return function(e) {
      onNameChange(i, e.target.value)
    }
  }
  console.log('ItemsList')
  return (
    <div>
      <Record />

      <Title items={items}/>

      <h2>Items</h2>
      {map(items, function(item, i) {
        return (
          <Item
            key={i}
            i={i}
            item={item}
            onIncrement={onIncrement.bind(null, i)}
            onDecrement={onDecrement.bind(null, i)}
            onNameChange={nameChange(i)}
          />
        )
      })}
    </div>
  )
}

function Title({items}) {
  console.log('Title')
  return <h1>I am a title woooo</h1>
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

const ItemsListContainer = connect(mapStateToProps, mapDispatchToProps)(ItemsList)
export default ItemsListContainer
