import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AppHeader from '../appHeader/AppHeader'
import { ComicsPage, MainPage } from '../pages'

const App = () => {
	return (
		<Router>
			<div className='app'>
				<AppHeader />
				<main>
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/comics' element={<ComicsPage />} />
					</Routes>
				</main>
			</div>
		</Router>
	)
}

export default App
