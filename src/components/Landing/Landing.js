import { Fragment } from 'react/cjs/react.production.min'
import Services from './Services'
import Testimonial from './Testimonial'
import Gallery from './Gallery'

const Landing = () => {
	return (
		<Fragment>
			<Services />
			<Testimonial />
			<Gallery />
		</Fragment>
	)
}

export default Landing
