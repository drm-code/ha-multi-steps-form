import React from 'react'
import { connect } from 'react-redux'

import Main from './main'

function App({ step }) {
  return (
    <Main step={step} />
  );
}

const mapStateToProps = ({ progress }) => ({
	step: progress.toJS().step
})

export default connect(mapStateToProps)(App)
