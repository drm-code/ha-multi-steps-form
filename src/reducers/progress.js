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
		default: {
			return state
		}
	}
}