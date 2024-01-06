import gif from '../errorMessage/error.gif'
import './OnlyScreen.scss'

const OnlyScreen = () => {
	return (
		<section className='only'>
			<h1>Service is available only for screens more than 1150px.</h1>
			<img src={gif} alt='ERROR' className='only-img' />
		</section>
	)
}

export default OnlyScreen
