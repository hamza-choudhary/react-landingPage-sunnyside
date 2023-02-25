import fbIcon from '../../assets/images/icon-facebook.svg'
import instaIcon from '../../assets/images/icon-instagram.svg'
import twitterIcon from '../../assets/images/icon-twitter.svg'
import pinterestIcon from '../../assets/images/icon-pinterest.svg'

import styles from './Footer.module.css'

const Footer = () => {
	return (
		<footer>
			<div className={styles.logo}>
				<h1>sunnyside</h1>
			</div>
			<div className={styles['footer-links']}>
				<ul>
					<li>
						<a href="_#">About</a>
					</li>
					<li>
						<a href="_#">Services</a>
					</li>
					<li>
						<a href="_#">Projects</a>
					</li>
				</ul>
			</div>
			<div className={styles['social-icons']}>
				<ul>
					<li>
						<a href="_#">
							<img src={fbIcon} alt="fbIcon" />
						</a>
					</li>
					<li>
						<a href="_#">
							<img src={instaIcon} alt="instaIcon" />
						</a>
					</li>
					<li>
						<a href="_#">
							<img src={twitterIcon} alt="twitterIcon" />
						</a>
					</li>
					<li>
						<a href="_#">
							<img src={pinterestIcon} alt="pinterestIcon" />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
