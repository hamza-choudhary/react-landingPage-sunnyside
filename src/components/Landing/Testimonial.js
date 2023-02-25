import styles from './Testimonial.module.css'
import emilyImg from '../../assets/images/image-emily.jpg'
import thomasImg from '../../assets/images/image-thomas.jpg'
import jennieImg from '../../assets/images/image-jennie.jpg'

const Testimonial = () => {
	return (
		<div className={styles.container}>
			<h3>CLIENT TESTIMONIALS</h3>
			<div className={styles['flex-container']}>
				<div className={styles.card}>
					<img src={emilyImg} alt="" />
					<div className={styles.about}>
						<p>
							We put our trust in Sunnyside and they delivered, making sure our
							needs were met and deadlines were always hit.
						</p>
					</div>
					<div className={styles.signature}>
						<h4>Emily R.</h4>
						<p>Marketing Director</p>
					</div>
				</div>
				<div className={styles.card}>
					<img src={thomasImg} alt="" />
					<div className={styles.about}>
						<p>
							Sunnyside’s enthusiasm coupled with their keen interest in our
							brand’s success made it a satisfying and enjoyable experience.
						</p>
					</div>
					<div className={styles.signature}>
						<h4>Thomas S.</h4>
						<p>Chief Operating Officer</p>
					</div>
				</div>
				<div className={styles.card}>
					<img src={jennieImg} alt="" />
					<div className={styles.about}>
						<p>
							Incredible end result! Our sales increased over 400% when we
							worked with Sunnyside. Highly recommended!
						</p>
					</div>
					<div className={styles.signature}>
						<h4>Jennie F.</h4>
						<p>Business Owner</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Testimonial
