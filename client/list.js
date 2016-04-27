import React, {Component} from 'react'
import {connect} from 'react-redux'
import {map} from 'lodash'
import {increment, decrement, rename} from './actions'
import Item from './item'

function ItemsList({items, onIncrement, onDecrement, onNameChange}) {
  return (
    <div>
      <h2>Items</h2>
      {map(items, function(item, i) {
        return (
          <Item
            key={i}
            i={i}
            item={item}
            onIncrement={onIncrement.bind(null, i)}
            onDecrement={onDecrement.bind(null, i)}
            onNameChange={onNameChange.bind(null, i)}
          />
        )
      })}
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

const ItemsListContainer = connect(mapStateToProps, mapDispatchToProps)(ItemsList)
export default ItemsListContainer
