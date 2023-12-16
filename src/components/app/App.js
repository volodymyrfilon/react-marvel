import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import AppHeader from '../appHeader/AppHeader'
import { ComicsPage, MainPage } from '../pages'
import Page404 from '../pages/404'

const App = () => {
	return (
		<Router>
			<div className='app'>
				<AppHeader />
				<main>
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/comics' element={<ComicsPage />} />
						<Route path='*' element={<Page404 />} />
					</Routes>
				</main>
			</div>
		</Router>
	)
}

export default App
