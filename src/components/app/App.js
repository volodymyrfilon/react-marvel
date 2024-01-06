import { lazy, Suspense } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import AppHeader from '../appHeader/AppHeader'
import OnlyScreen from '../onlyScreen/OnlyScreen'
import Spinner from '../spinner/Spinner'

const Page404 = lazy(() => import('../pages/404'))
const MainPage = lazy(() => import('../pages/MainPage'))
const ComicsPage = lazy(() => import('../pages/ComicsPage'))
const SingleComicsPage = lazy(() => import('../pages/SingleComicsPage'))

const App = () => {
	const userWindowWidth = window.innerWidth

	if (userWindowWidth >= 1150) {
		return (
			<Router>
				<div className='app'>
					<AppHeader />
					<main>
						<Suspense fallback={<Spinner />}>
							<Routes>
								<Route path='/react-marvel' element={<MainPage />} />
								<Route path='/react-marvel/comics' element={<ComicsPage />} />
								<Route
									path='/react-marvel/comics/:id'
									element={<SingleComicsPage />}
								/>
								<Route path='/react-marvel/*' element={<Page404 />} />
							</Routes>
						</Suspense>
					</main>
				</div>
			</Router>
		)
	} else {
		return <OnlyScreen />
	}
}

export default App
