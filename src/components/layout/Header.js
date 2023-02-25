import styles from './Header.module.css'
import Nav from './Nav'

const Header = () => {
	return (
		<header>
			{/* navigation */}
			<Nav />
			<div className={styles.heading}>
				<h1>WE ARE CREATIVES</h1>
			</div>
		</header>
	)
}

export default Header
