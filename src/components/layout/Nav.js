import { useState } from 'react'
import styles from './Nav.module.css'
import navHamburgerImg from '../../assets/images/icon-hamburger.svg'

const Nav = () => {
	const [isShowingNav, setIsShowingNav] = useState(false)

	const showNav = () => {
		setIsShowingNav((state) => !state)
	}

	return (
		<nav>
			<div className={styles.navigation}>
				<div className={styles.logo}>
					<p>sunnyside</p>
				</div>
				<div className={styles['nav-hamburger']} onClick={showNav}>
					<img src={navHamburgerImg} alt="hamburger" />
				</div>
			</div>
			<ul className={(isShowingNav && styles['show-ul']) || ''}>
				<li>
					<a href="#_">About</a>
				</li>
				<li>
					<a href="#_">Services</a>
				</li>
				<li>
					<a href="#_">Projects</a>
				</li>
				<li>
					<a href="#_">Contact</a>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
