import styles from './Services.module.css'
import eggImgDesktop from '../../assets/images/desktop/image-transform.jpg'
import eggImgMobile from '../../assets/images/mobile/image-transform.jpg'
import glassImgDesktop from '../../assets/images/desktop/image-stand-out.jpg'
import glassImgMobile from '../../assets/images/mobile/image-stand-out.jpg'
import cherryImgDesktop from '../../assets/images/desktop/image-graphic-design.jpg'
import cherryImgMobile from '../../assets/images/mobile/image-graphic-design.jpg'
import orangeImgDesktop from '../../assets/images/desktop/image-photography.jpg'
import orangeImgMobile from '../../assets/images/mobile/image-photography.jpg'

const Services = () => {
	return (
		<div className={styles.container}>
			<div className={`${styles.item} ${styles['item-1']}`}>
				<div className={styles.content}>
					<h2>Transform your brand</h2>
					<p>
						We are a full-service creative agency specializing in helping brands
						grow fast. Engage your clients through compelling visuals that do
						most of the marketing for you.
					</p>
					<a href="_#">
						<h4>Learn More</h4>
					</a>
				</div>
			</div>
			<div className={`${styles.item} ${styles['item-2']}`}>
				<picture>
					<source media="(min-width: 720px)" srcSet={eggImgDesktop} />
					<img src={eggImgMobile} alt="eggImage" />
				</picture>
			</div>
			<div className={`${styles.item} ${styles['item-3']}`}>
				<picture>
					<source media="(min-width: 720px)" srcSet={glassImgDesktop} />
					<img src={glassImgMobile} alt="glassImage" />
				</picture>
			</div>
			<div className={`${styles.item} ${styles['item-4']}`}>
				<div className={styles.content}>
					<h2>Stand out to the right audience</h2>
					<p>
						Using a collaborative formula of designers, researchers,
						photographers, videographers, and copywriters, we’ll build and
						extend your brand in digital places.
					</p>
					<a href="_#">
						<h4>Learn More</h4>
					</a>
				</div>
			</div>
			{/* images with background */}
			<div className={`${styles.item} ${styles['item-5']}`}>
				<div className={styles['bg-img']}>
					<picture>
						<source media="(min-width: 720px)" srcSet={cherryImgDesktop} />
						<img src={cherryImgMobile} alt="glassImage" />
					</picture>
				</div>
				<div className={styles['bg-content']}>
					<h2>Graphic design</h2>
					<p>
						Great design makes you memorable. We deliver artwork that
						underscores your brand message and captures potential clients’
						attention.
					</p>
				</div>
			</div>
			<div className={`${styles.item} ${styles['item-6']}`}>
				<div className={styles['bg-img']}>
					<picture>
						<source media="(min-width: 720px)" srcSet={orangeImgDesktop} />
						<img src={orangeImgMobile} alt="glassImage" />
					</picture>
				</div>
				<div className={styles['bg-content']}>
					<h2>Photography</h2>
					<p>
						Increase your credibility by getting the most stunning, high-quality
						photos that improve your business image.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Services
