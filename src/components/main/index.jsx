import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default class Main extends React.Component {
	render() {
		return (
			<Col className="container">
				<Row>
					<h1>Connected with Redux {this.props.step}</h1>
				</Row>
			</Col>
		)
	}
}