import {
	Route,
	BrowserRouter as Router,
	Switch,
} from 'react-router-dom/cjs/react-router-dom.min'

import AppHeader from '../appHeader/AppHeader'
import { ComicsPage, MainPage } from '../pages'

const App = () => {
	return (
		<Router>
			<div className='app'>
				<AppHeader />
				<main>
					<Switch>
						<Route exact path='/'>
							<MainPage />
						</Route>
						<Route exact path='/comics'>
							<ComicsPage />
						</Route>
					</Switch>
				</main>
			</div>
		</Router>
	)
}

export default App
