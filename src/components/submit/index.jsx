import React from 'react'
import {
  Row,
  Col,
  Button,
} from 'react-bootstrap'

function SubmitCustom({ form, sendData }) {
  return (
    <Row>
      <Col
        xs={12}
        className="text-center"
      >
        <pre className="align-left">
          {JSON.stringify(form, null, 2)}
        </pre>
        <Button
          bsSize="large"
          bsStyle="primary"
          onClick={() => sendData()}
        >
          Submit data
        </Button>
      </Col>
    </Row>
  )
}

export default SubmitCustom
