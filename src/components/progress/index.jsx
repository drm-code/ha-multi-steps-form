import React from 'react'
import {
  Row,
  Col
} from 'react-bootstrap'

function ProgressCustom({ step, setNextStep }) {
  return (
    <Row>
      <Col xs={12}>
        <Row>
          <Col
            xs={12}
            className="text-center"
          >
            <h1>You are on step #{step}</h1>
          </Col>
        </Row>
        {step === 1 &&
          <Row>
            <Col xs={12}>
              <a className="cursor disabled">
                Step 1
              </a>
            </Col>
          </Row>
        }
        {step > 1 &&
          <Row>
            {step >= 2 &&
              <Col xs={3}>
                <a
                  className="cursor"
                  onClick={() => setNextStep(1)}
                >
                  Step 1
                </a>
              </Col>
            }
            {step >= 3 &&
              <Col xs={3}>
                <a
                  className="cursor"
                  onClick={() => setNextStep(2)}
                >
                  Step 2
                </a>
              </Col>
            }
            {step >= 4 &&
              <Col xs={3}>
                <a
                  className="cursor"
                  onClick={() => setNextStep(3)}
                >
                  Step 3
                </a>
              </Col>
            }
            {step >= 5 &&
              <Col xs={3}>
                <a
                  className="cursor"
                  onClick={() => setNextStep(4)}
                >
                  Step 4
                </a>
              </Col>
            }
          </Row>
        }
      </Col>
    </Row>
  )
}

export default ProgressCustom
