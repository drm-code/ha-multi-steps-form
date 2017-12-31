import React from 'react'
import {
  DropdownButton,
  MenuItem,
} from 'react-bootstrap'

class DropdownCustom extends React.Component {
  constructor() {
    super()
    this.state = {
      title: ''
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  render() {
    return (
      <DropdownButton
        id="select"
        title={this.state.title}
        onSelect={this.handleSelect}
      >
        <MenuItem eventKey="C1">
          C1
        </MenuItem>
        <MenuItem eventKey="C2">
          C2
        </MenuItem>
        <MenuItem eventKey="C3">
          C3
        </MenuItem>
      </DropdownButton>
    )
  }

  handleSelect(e) {
    this.setState({ selectTitle: e })
    this.props.changeValueInForm('c', e)
    this.props.setNextStep(5)
  }
}

export default DropdownCustom
