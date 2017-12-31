import React from 'react'
import {
	Row,
	Col,
	Button,
} from 'react-bootstrap'

import * as api from '../../api/api'
import ProgressCustom from '../progress'
import CheckboxCustom from '../checkbox'
import ToggleCustom from '../toggle'
import InputCustom from '../input'
import DropdownCustom from '../dropdown'

export default class Main extends React.Component {
	constructor() {
		super()
		this.state = {
			ch1: false,
			ch2: false,
			text: '',
			inputError: null,
			selectTitle: ''
		}
		this.checkInput = this.checkInput.bind(this)
		this.sendData = this.sendData.bind(this)
	}

	render() {
		return (
			<Col className="container">
				<Row>
					<Col
						md={4}
						mdOffset={4}
					>
						<ProgressCustom step={this.props.step} />
						<Row>
							<Col xs={12}>
								{this.props.step === 1 &&
									<CheckboxCustom
										changeValueInForm={this.props.changeValueInForm}
										setNextStep={this.props.setNextStep}
										form={this.props.form}
									/>
								}
								{this.props.step === 2 &&
									<ToggleCustom
										changeValueInForm={this.props.changeValueInForm}
										setNextStep={this.props.setNextStep}
									/>

								}
								{this.props.step === 3 &&
									<InputCustom
										checkInput={this.checkInput}
										error={this.state.inputError}
									/>
								}
								{this.props.step === 4 &&
									<DropdownCustom
										changeValueInForm={this.props.changeValueInForm}
										setNextStep={this.props.setNextStep}
									/>
								}
								{this.props.step === 5 &&
									<Button
										bsSize="large"
										onClick={this.sendData}
									>
										Submit data
									</Button>
								}
							</Col>
						</Row>
					</Col>
				</Row>
			</Col>
		)
	}

	checkInput(text) {
		api.checkIt(text)
			.then(() => {
				this.props.changeValueInForm('text', text)
				this.props.setNextStep(4)
			}, (error) => {
				this.setState({ inputError: 'error' })
			})
	}

	sendData() {
		api.submitIt(this.props.form)
			.then((data) => {
				console.log(data)
			}, (error) => {
				console.log(error);
			})
	}
}
