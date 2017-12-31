export const setNextStep = (payload) => ({
	type: 'SET_NEXT_STEP',
	payload
})

export const changeValueInForm = (key, value) => ({
	type: 'CHANGE_VALUE_IN_FORM',
	payload: {
		key,
		value
	}
})