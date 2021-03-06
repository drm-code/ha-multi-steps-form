import React from 'react'
import {
  Form,
  FormGroup,
  FormControl,
  Button,
} from 'react-bootstrap'

class InputCustom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      text: props.text || ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
  }

  componentWillReceiveProps(newProps) {
    this.setState({ error: newProps.error })
  }

  render() {
    return (
      <Form inline>
        <FormGroup validationState={this.state.error}>
          <FormControl
            type="text"
            value={this.state.text}
            onChange={this.handleInput}
            onKeyPress={this.onKeyPress}
            placeholder="Type some text"
            maxLength="24"
          />
          <FormControl.Feedback />
        </FormGroup>
        <Button
          type="button"
          bsStyle="primary"
          onClick={() => this.props.checkInput(this.state.text)}
        >
          Check
        </Button>
      </Form>
    )
  }

  handleInput(e) {
		this.setState({
			text: e.target.value,
			error: null
		})
	}

  onKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault()
      this.props.checkInput(this.state.text)
    }
    this.props.clearAlert()
  }

}

export default InputCustom
