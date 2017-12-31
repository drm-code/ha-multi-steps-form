import React from 'react'
import {
  FormGroup,
  Checkbox
} from 'react-bootstrap'

class CheckboxCustom extends React.Component {
  constructor() {
    super()
    this.state = {
      a1: false,
      a2: false,
    }
    this.handleCheckbox = this.handleCheckbox.bind(this)
  }

  render() {
    return (
      <FormGroup>
        <Checkbox
          inline
          name="a1"
          value="A1"
          checked={this.state.a1}
          onChange={this.handleCheckbox}
        >
          A1
        </Checkbox>
        <Checkbox
          inline
          name="a2"
          value="A2"
          checked={this.state.a2}
          onChange={this.handleCheckbox}
        >
          A2
        </Checkbox>
      </FormGroup>
    )
  }

  handleCheckbox(e) {
		let { a } = this.props.form
		let index = a.indexOf(e.target.value)

		switch (e.target.name) {
			case 'a1': {
				this.setState({ 'a1': e.target.checked })
				break
			}
			case 'a2': {
				this.setState({ 'a2': e.target.checked })
				break
			}
			default: {}
		}
		if (index === -1) {
			a.push(e.target.value)
		} else {
			a.splice(index, 1)
		}
		this.props.changeValueInForm('a', a)
		this.props.setNextStep(2)
	}
}

export default CheckboxCustom
