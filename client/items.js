import React from 'react'
import {map} from 'lodash'

import Item from './item'

export default function Items({items, onIncrement, onDecrement, onNameChange}) {
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

//export default function Items({items, onIncrement, onDecrement, onNameChange}) {
  //return (
    //<div>
      //<h2>Items</h2>
      //{map(items, function(item, i) {
        //return (
          //<Item
            //key={i}
            //i={i}
            //item={item}
            //onIncrement={onIncrement}
            //onDecrement={onDecrement}
            //onNameChange={onNameChange}
          ///>
        //)
      //})}
    //</div>
  //)
//}
