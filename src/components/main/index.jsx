import React from 'react'
import {
	Row,
	Col,
	Alert,
	Well
} from 'react-bootstrap'

import * as api from '../../api/api'
import ProgressCustom from '../progress'
import CheckboxCustom from '../checkbox'
import ToggleCustom from '../toggle'
import InputCustom from '../input'
import DropdownCustom from '../dropdown'
import SubmitCustom from '../submit'

export default class Main extends React.Component {
	constructor() {
		super()
		this.state = {
			inputError: null,
			selectTitle: '',
			error: null,
			errorType: '',
			errorMessage: ''
		}
		this.checkInput = this.checkInput.bind(this)
		this.sendData = this.sendData.bind(this)
		this.clearAlert = this.clearAlert.bind(this)
	}

	render() {
		return (
			<Col className="container">
				<Well>
					<h5 className="text-center">Powered by: <strong>Yonathan Pineda</strong></h5>
				</Well>
				<Row>
					<Col
						md={4}
						mdOffset={4}
					>
						<ProgressCustom
							step={this.props.step}
							setNextStep={this.props.setNextStep}
						/>
						<Row>
							<Col
								xs={12}
								className="step"
							>
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
										text={this.props.form.text}
										clearAlert={this.clearAlert}
									/>
								}
								{this.props.step === 4 &&
									<DropdownCustom
										changeValueInForm={this.props.changeValueInForm}
										setNextStep={this.props.setNextStep}
										selected={this.props.form.c}
									/>
								}
								{this.props.step === 5 &&
									<SubmitCustom
										form={this.props.form}
										sendData={this.sendData}
									/>
								}
							</Col>
						</Row>
					</Col>
				</Row>
				{this.state.error &&
					<Row>
						<Col
							md={4}
							mdOffset={4}
							>
								<Alert
									bsStyle={this.state.errorType}
									onDismiss={this.clearAlert}
								>
									{this.state.errorMessage}
								</Alert>
						</Col>
					</Row>
				}
			</Col>
		)
	}

	checkInput(text) {
		api.checkIt(text)
			.then(() => {
				this.props.changeValueInForm('text', text)
				this.props.setNextStep(4)
			}, (error) => {
				this.setState({
					inputError: 'error',
					error: true,
					errorType: 'danger',
					errorMessage: 'Please type a text that starts with \'@\''
				})
			})
	}

	sendData() {
		api.submitIt(this.props.form)
			.then((data) => {
				this.setState({
					error: true,
					errorType: 'success',
					errorMessage: 'Data was successufully submitted'
				})
			}, (error) => {
				this.setState({
					error: true,
					errorType: 'danger',
					errorMessage: 'An error occured, please try again!'
				})
			})
	}

	clearAlert() {
		this.setState({
			error: false,
			inputError: null
		})
	}

}
