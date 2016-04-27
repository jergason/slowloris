export function increment(i) {
  console.log('increment?')
  return {
    type: 'INCREMENT',
    i
  }
}

console.log('increment is', increment)

export function decrement(i) {
  return {
    type: 'DECREMENT',
    i
  }
}

export function rename(i, name) {
  return {
    type: 'UPDATE_NAME',
    i,
    name
  }
}
