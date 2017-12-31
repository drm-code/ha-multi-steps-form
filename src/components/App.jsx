import React from 'react'
import { connect } from 'react-redux'

import Main from './main'
import * as actions from '../actions'
import './App.css'

function App(props) {
  return (
    <Main {...props} />
  );
}

const mapStateToProps = ({ progress }) => ({
	step: progress.toJS().step,
	form: progress.toJS().form
})

const mapDispatchToProps = (dispatch) => ({
	setNextStep: (step) => dispatch(actions.setNextStep(step)),
	changeValueInForm: (key, value) => dispatch(actions.changeValueInForm(key, value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
