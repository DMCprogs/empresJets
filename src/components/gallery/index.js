import React from 'react'
import galImg1 from '../../img/img-landing/galImg1.png'
import galImg2 from '../../img/img-landing/galImg2.png'
import galImg3 from '../../img/img-landing/galImg3.png'
import galImg4 from '../../img/img-landing/galImg4.png'
import galImg5 from '../../img/img-landing/galImg5.png'
import galImg6 from '../../img/img-landing/galImg6.png'
import galImg7 from '../../img/img-landing/galImg7.png'
import galImg8 from '../../img/img-landing/galImg8.png'
import galImg9 from '../../img/img-landing/galImg9.png'
import {
	DivBoxColumnImageSC, ImgGallerySC
} from '../landing/style'

const Gallery = () => {
	let data = [
		{
			id: 1,
			imgSrc: galImg1,
			a: 'https://www.instagram.com/p/CDb2GgrhOa-/'
		},
		{
			id: 2,
			imgSrc: galImg2,
			a: 'https://www.instagram.com/p/CIlpSFzBF-6/'
		},
		{
			id: 3,
			imgSrc: galImg3,
			a: 'https://www.instagram.com/p/CJr1f1YBFdq/'
		},
		{
			id: 4,
			imgSrc: galImg4,
			a: 'https://www.instagram.com/p/CJZE1B0Bdd9/'
		},
		{
			id: 5,
			imgSrc: galImg5,
			a: 'https://www.instagram.com/p/CDUH_jwBeGZ/'
		},
		{
			id: 6,
			imgSrc: galImg6,
			a: 'https://www.instagram.com/p/CJJvMzSBxhN/'
		},
		{
			id: 7,
			imgSrc: galImg7,
			a: 'https://www.instagram.com/p/CDP5PJJhl3b/'
		},
		{
			id: 8,
			imgSrc: galImg8,
			a: 'https://www.instagram.com/p/CECslsYhoFJ/'
		},
		{
			id: 9,
			imgSrc: galImg9,
			a: 'https://www.instagram.com/p/CFAvriIhgDJ/'
		}
	]

	return (
		<>
			<DivBoxColumnImageSC>
				{ data.map((item) => {
					return (
						<a
							href={ item.a }
							key={ item.id }
						>
							<ImgGallerySC src={ item.imgSrc }/>
						</a>
					)
				}) }
			</DivBoxColumnImageSC>
		</>
	)
}

export default Gallery
