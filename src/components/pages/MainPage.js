import { useState } from 'react'

import decoration from '../../resources/img/vision.png'
import CharInfo from '../charInfo/CharInfo'
import CharList from '../charList/CharList'
import ErrorBoundary from '../errorBoundary/ErrorBoundary'
import RandomChar from '../randomChar/RandomChar'

const MainPage = () => {
	const [selectedChar, setChar] = useState(null)

	const onCharSelected = id => {
		setChar(id)
	}

	return (
		<>
			<ErrorBoundary>
				<RandomChar />
			</ErrorBoundary>
			<div className='char__content'>
				<ErrorBoundary>
					<CharList onCharSelected={onCharSelected} />
				</ErrorBoundary>
				<ErrorBoundary>
					<CharInfo charId={selectedChar} />
				</ErrorBoundary>
			</div>
			<img className='bg-decoration' src={decoration} alt='vision' />
		</>
	)
}

export default MainPage
