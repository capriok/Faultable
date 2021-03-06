import React from 'react'
import AuthApi from '../../../api/auth-api'

import AuthForm from '../auth-form'

interface Props {
	form: {
		state: AuthFormState
		dispatch: React.Dispatch<AuthFormReducer>
	}
}

const Register: React.FC<Props> = ({ form }) => {
	async function submit(): Promise<void> {
		const { status } = await AuthApi.Register(form.state.username, form.state.password)

		if (status == 409) // Unathorized
			return form.dispatch({ type: 'NAME_CONFLICT' })

		form.dispatch({ type: 'USER_CREATED' }) // Created
	}

	return (
		<>
			<AuthForm
				withReqs
				submit={submit}
				form={form} />
z		</>
	)
}

export default Register