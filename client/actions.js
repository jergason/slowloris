export function increment(i) {
  return {
    type: 'INCREMENT',
    i
  }
}

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
