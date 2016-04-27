import React, {Component} from 'react'
import P from 'react-addons-perf'
window.P = P

class Record extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recording: false,
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    let {recording} = this.state
    if (recording) {
      P.stop()
    } else {
      P.start()
    }
    this.setState({recording: !recording})
  }

  render() {
    return (
      <div className="switch">
        <input className="switch-input" id="exampleSwitch" type="checkbox" name="exampleSwitch" value={this.state.recording} onClick={this.toggle} />
        <label className="switch-paddle" htmlFor="exampleSwitch">
          <span className="show-for-sr">{this.state.recording ? 'Stop' : 'Start'}</span>
        </label>
      </div>
    )
  }

}

export default Record
