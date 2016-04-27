import {range, map} from 'lodash'

export default function(state, action) {
  if (!state) {
    return defaultState()
  }

  try {
  switch (action.type) {
    case 'INCREMENT':
      return map(state, (item, i) => {
        if (action.i != i) {
          return item
        }
        return {...item, count: item.count + 1}
      })
    case 'DECREMENT':
      return map(state, (item, i) => {
        if (action.i != i) {
          return item
        }
        return {...item, count: item.count - 1}
      })
    case 'UPDATE_NAME':
      return map(state, (item, i) => {
        if (action.i != i) {
          return item
        }
        return {...item, name: action.name}
      })
    default:
      return state
  }
  } catch (e) {
    console.error('e', e.stack)
    return state
  }
}

function defaultState() {
  return range(1000).map(function() {
    return {
      name: '',
      count: 0
    }
  })
}
