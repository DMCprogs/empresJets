import Airplane1 from '../../../img/aircraft_classes/turbo-prop.jpg'
import Airplane2 from '../../../img/aircraft_classes/light-jet.jpg'
import Airplane3 from '../../../img/aircraft_classes/mid-jet.jpg'
import Airplane4 from '../../../img/aircraft_classes/super-mid-jet.jpg'
import Airplane5 from '../../../img/aircraft_classes/heavy-jet.jpg'
import Airplane6 from '../../../img/aircraft_classes/ultra-jet.jpg'
import Airplane7 from '../../../img/aircraft_classes/vip-jet.png'

const Data = {
	cardData: [

		{
			id: 0,
			title: 'Turbo prop',
			description: 'Small aircraft with engines that are equipped with propellers. Ideal for short flights of a small group of passengers from 3-8 people.',
			img: Airplane1,
			isChousen: false
		},
		{
			id: 1,
			title: 'Light Jet (7 seats)',
			description: 'Small jet planes for short trips by companies of up to 7-8 people.',
			img: Airplane2,
			isChousen: false
		},
		{
			id: 2,
			title: 'Mid Size Jet (8 seats)',
			description: 'In these planes, you can stand up to your full height. They are mainly used for flights up to 6 hours.',
			img: Airplane3,
			isChousen: false
		},
		{
			id: 3,
			title: 'Super midSize Jet (9 seats)',
			description: 'Planes prepared for long flights, capable of crossing the Atlantic without refueling.',
			img: Airplane4,
			isChousen: false
		},
		{
			id: 4,
			title: 'Heavy Jet (9-16 seats)',
			description: 'Large aircraft with large capacity and comfortable conditions.',
			img: Airplane5,
			isChousen: false
		},
		{
			id: 5,
			title: 'Ultra Long Range Heavy Jet (10-19 seats)',
			description: 'A category of aircraft connecting most points of the globe without refueling.',
			img: Airplane6,
			isChousen: false
		},
		{
			id: 6,
			title: 'VIP Airliner (20-300 seats)',
			description: 'SThe largest planes of business aviation, real air mansions capable of making long flights.',
			img: Airplane7,
			isChousen: false
		}

	]

}
export default Data
