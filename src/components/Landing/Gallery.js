import styles from './Gallery.module.css'

import milkDesktopImg from '../../assets/images/desktop/image-gallery-milkbottles.jpg'
import milkMobileImg from '../../assets/images/mobile/image-gallery-milkbottles.jpg'
import orangeDesktopImg from '../../assets/images/desktop/image-gallery-orange.jpg'
import orangeMobileImg from '../../assets/images/mobile/image-gallery-orange.jpg'
import coneDesktopImg from '../../assets/images/desktop/image-gallery-cone.jpg'
import coneMobileImg from '../../assets/images/mobile/image-gallery-cone.jpg'
import cubesDesktopImg from '../../assets/images/desktop/image-gallery-sugarcubes.jpg'
import cubesMobileImg from '../../assets/images/mobile/image-gallery-sugar-cubes.jpg'

const Gallery = () => {
	return (
		<div className={styles.container}>
			<picture>
				<source media="(min-width: 720px)" srcSet={milkDesktopImg} />
				<img src={milkMobileImg} alt="eggImage" />
			</picture>
			<picture>
				<source media="(min-width: 720px)" srcSet={orangeDesktopImg} />
				<img src={orangeMobileImg} alt="eggImage" />
			</picture>
			<picture>
				<source media="(min-width: 720px)" srcSet={coneDesktopImg} />
				<img src={coneMobileImg} alt="eggImage" />
			</picture>
			<picture>
				<source media="(min-width: 720px)" srcSet={cubesDesktopImg} />
				<img src={cubesMobileImg} alt="eggImage" />
			</picture>
		</div>
	)
}

export default Gallery
