import React from 'react'
import {
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton
} from 'react-bootstrap'

class ToggleCustom extends React.Component {
  constructor() {
    super()
    this.state = {
      b1: false,
      b2: false
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  render() {
    return (
      <ButtonToolbar>
        <ToggleButtonGroup
          type="radio"
          name="rb"
        >
          <ToggleButton
            value="B1"
            checked={this.state.b1}
            onChange={this.handleToggle}
          >
            B1
          </ToggleButton>
          <ToggleButton
            value="B2"
            checked={this.state.b2}
            onChange={this.handleToggle}
          >
            B2
          </ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    )
  }

  handleToggle(e) {
    switch (e.target.value) {
      case 'B1': {
        this.setState({
          b1: true,
          b2: false
        })
        break
      }
      case 'B2': {
        this.setState({
          b1: false,
          b2: true
        })
        break
      }
      default: {}
    }
		this.props.changeValueInForm('b', e.target.value)
		this.props.setNextStep(3)
	}
}

export default ToggleCustom
