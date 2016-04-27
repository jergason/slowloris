import React from 'react'

export default function Item({item, i, onIncrement, onDecrement, onNameChange}) {
  let labelId = `name-${i}`
  console.log('Item')
  return (
    <div>
      <div className="row">
        <div className="small-4 columns">
          <label htmlFor={labelId}>Name: {item.name}</label>
        </div>
        <div className="small-8 columns">
          <input id={labelId} type="text" value={item.name} onChange={onNameChange} />
        </div>
      </div>

      <div class="row">
        <div className="small-4 columns">
          Count: {item.count}
        </div>
        <div className="small-4 columns">
          <button className="button" type="button" onClick={onIncrement}>Increment</button>
        </div>
        <div className="small-4 columns">
          <button className="button" type="button" onClick={onDecrement}>Decrement</button>
        </div>
      </div>
    </div>
  )
}
