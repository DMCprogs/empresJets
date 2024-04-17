import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	BrowserRouter
} from 'react-router-dom'
import {
	ToastContainer
} from 'react-toastify'
import './components/toast'
import './plugins/firebase'
import Router from './router'
import RouteGuard from './router/guard'
import './styles/index.css'
import RootBox from './root_box'

ReactDOM.createRoot(document.getElementById('root'))
	.render(
		<BrowserRouter>
			<RootBox>
				<RouteGuard />
				<ToastContainer/>
				<Router/>
			</RootBox>
		</BrowserRouter>
	)
