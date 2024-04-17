import React from 'react'
import {
	toast
} from 'react-toastify'

const LoginSuccessfully = () =>
	toast('Login successful!', {
		position: 'top-center',
		autoClose: 1000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'dark'
	})
const LoginFailed = () =>
	toast('Invalid email or password'
	)

export {
	LoginFailed, LoginSuccessfully
}
