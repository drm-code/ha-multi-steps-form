import React from 'react'
import {
	Row,
	Col,
	FormGroup,
	Checkbox,
	ButtonToolbar,
 	ToggleButtonGroup,
	ToggleButton } from 'react-bootstrap'

export default class Main extends React.Component {
	constructor() {
		super()
		this.state = {
			ch1: false,
			ch2: false
		}
		this.handleCheckbox = this.handleCheckbox.bind(this)
		this.handleRadio = this.handleRadio.bind(this)
	}

	render() {
		return (
			<Col className="container">
				<Row>
					<Col
						md={4}
						mdOffset={4}
					>
						<Row>
							<Col xs={12}>
								<h1>You are on step #{this.props.step}</h1>
							</Col>
						</Row>
						<Row>
							<Col xs={12}>
								{this.props.step === 1 &&
									<FormGroup>
										<Checkbox
											inline
											name="ch1"
											value="A1"
											checked={this.state.ch1}
											onChange={this.handleCheckbox}
										>
											A1
										</Checkbox>
										<Checkbox
											name="ch2"
											value="A2"
											checked={this.state.ch2}
											onChange={this.handleCheckbox}
											inline>
											A2
										</Checkbox>
									</FormGroup>
								}
								{this.props.step === 2 &&
									<ButtonToolbar>
										<ToggleButtonGroup
											type="radio"
											name="rb"
										>
											<ToggleButton
												value="B1"
												onChange={this.handleRadio}>
												B1
											</ToggleButton>
											<ToggleButton
												value="B2"
												onChange={this.handleRadio}>
												B2
											</ToggleButton>
										</ToggleButtonGroup>
									</ButtonToolbar>
								}
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
		)
	}

	handleCheckbox(e) {
		let { a } = this.props.form
		let index = a.indexOf(e.target.value)

		switch (e.target.name) {
			case 'ch1': {
				this.setState({ 'ch1': e.target.checked })
				break
			}
			case 'ch2': {
				this.setState({ 'ch2': e.target.checked })
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

	handleRadio(e) {
		this.props.changeValueInForm('b', e.target.value)
		this.props.setNextStep(3)
	}
}
