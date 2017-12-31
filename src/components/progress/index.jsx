import React from 'react'
import {
  Row,
  Col
} from 'react-bootstrap'

function ProgressCustom({ step }) {
  return (
    <Row>
      <Col xs={12}>
        <h1>You are on step #{step}</h1>
      </Col>
    </Row>
  )
}

export default ProgressCustom
