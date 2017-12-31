import { fromJS } from 'immutable'

const initialState = fromJS({
	step: 1,
	form: {
		a: [],
		b: '',
		text: '',
		c: ''
	}
})

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SET_NEXT_STEP': {
			return state.set('step', action.payload)
		}
		case 'CHANGE_VALUE_IN_FORM': {
			return state.setIn(['form', action.payload.key], action.payload.value)
		}
		default: {
			return state
		}
	}
}