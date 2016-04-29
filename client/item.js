import React, {Component} from 'react'
import {isEqual} from 'lodash'

//export default function Item({item, i, onIncrement, onDecrement, onNameChange}) {
  //let labelId = `name-${i}`
  ////console.log('Item')
  //return (
    //<div>
      //<div className="row">
        //<div className="small-4 columns">
          //<label htmlFor={labelId}>Name: {item.name}</label>
        //</div>
        //<div className="small-8 columns">
          //<input id={labelId} type="text" value={item.name} onChange={onNameChange} />
        //</div>
      //</div>

      //<div class="row">
        //<div className="small-4 columns">
          //Count: {item.count}
        //</div>
        //<div className="small-4 columns">
          //<button className="button" type="button" onClick={onIncrement}>Increment</button>
        //</div>
        //<div className="small-4 columns">
          //<button className="button" type="button" onClick={onDecrement}>Decrement</button>
        //</div>
      //</div>
    //</div>
  //)
//}

//class ItemClass extends Component {
  //constructor(props) {
    //super(props)
    //this.increment = this.increment.bind(this)
    //this.decrement = this.decrement.bind(this)
    //this.nameChange = this.nameChange.bind(this)
  //}

  //increment() {
    //this.props.onIncrement(this.props.i)
  //}

  //decrement() {
    //this.props.onDecrement(this.props.i)
  //}

  //nameChange(e) {
    //this.props.onNameChange(this.props.i, e)
  //}

  //render() {
    //let labelId = `name-${this.props.i}`
    //console.log('Item')
    //return (
      //<div>
        //<div className="row">
          //<div className="small-4 columns">
            //<label htmlFor={labelId}>Name: {this.props.item.name}</label>
          //</div>
          //<div className="small-8 columns">
            //<input id={labelId} type="text" value={this.props.item.name} onChange={this.nameChange} />
          //</div>
        //</div>

        //<div class="row">
          //<div className="small-4 columns">
            //Count: {this.props.item.count}
          //</div>
          //<div className="small-4 columns">
            //<button className="button" type="button" onClick={this.increment}>Increment</button>
          //</div>
          //<div className="small-4 columns">
            //<button className="button" type="button" onClick={this.decrement}>Decrement</button>
          //</div>
        //</div>
      //</div>
    //)
  //}
//}
//export default ItemClass

class ItemClass extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !(isEqual(this.props.item, nextProps.item) && this.props.i == nextProps.i)
  }

  render() {
    let labelId = `name-${this.props.i}`
    console.log('Item')
    return (
      <div>
        <div className="row">
          <div className="small-4 columns">
            <label htmlFor={labelId}>Name: {this.props.item.name}</label>
          </div>
          <div className="small-8 columns">
            <input id={labelId} type="text" value={this.props.item.name} onChange={this.props.onNameChange} />
          </div>
        </div>

        <div class="row">
          <div className="small-4 columns">
            Count: {this.props.item.count}
          </div>
          <div className="small-4 columns">
            <button className="button" type="button" onClick={this.props.onIncrement}>Increment</button>
          </div>
          <div className="small-4 columns">
            <button className="button" type="button" onClick={this.props.onDecrement}>Decrement</button>
          </div>
        </div>
      </div>
    )
  }
}
export default ItemClass
