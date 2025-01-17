import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from "./redux/store"
import { Provider } from 'react-redux'
import MobileNavProvider from "./context/MobileNav"

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<MobileNavProvider>
				<App />
			</MobileNavProvider>
		</Provider>
	</React.StrictMode>,
)
