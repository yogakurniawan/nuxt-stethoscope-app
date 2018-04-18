import camelCase from 'lodash.camelcase'

const createAsyncMutation = (type) => ({
	SUCCESS: `${type}_SUCCESS`,
	FAILURE: `${type}_FAILURE`,
	PENDING: `${type}_PENDING`,
	loadingKey: camelCase(`${type}_PENDING`),
	stateKey: camelCase(`${type}_DATA`),
	errorKey: camelCase(`${type}_ERROR`)
})

export const AUTH = createAsyncMutation('AUTH')
export const LOOKUP = createAsyncMutation('LOOKUP')