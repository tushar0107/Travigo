export const scheme = {
	//useColorScheme()==='light'?'#f3f3f3':'#1f1f1f';
	light:'#f3f3f3',
	dark:'#1f1f1f'
}

export const User = {
	name:'Steve Rogers',
	address: 'Brooklyn, New York',
	username: '@roger.steve',
	email: 'steve.rogers@gmail.com'

}

export const hotels = [
	{
		id:1,
		name:'Bellagio Hotel Casino',
		location:'Las Vegas',
		price:950,
		package:'5D, 4N',
		discount:20,
		phone:'+44 20 7486 5800',
		rating:4.2,
		banner:require('../assets/hotel-1-0.jpg'),
		images:['../assets/hotel-1-0.jpg','../assets/hotel-1-1.webp','../assets/hotel-1-2.jpg','../assets/hotel-1-3.jpg'],
		facilities:['Wifi','Cab','Laundry','Infants Support'],
		serviceCharge:50
	},
	{
		id:2,
		name:'Hyatt Regency',
		location:'30 Portman Square, London',
		price:760,
		package:'3D, 2N',
		phone:'+44 20 7486 5800',
		rating:4.7,
		banner:require('../assets/hotel-2-0.jpg'),
		images:['../assets/hotel-2-0.jpg','../assets/hotel-2-1.jpg','../assets/hotel-2-2.jpg','../assets/hotel-2-3.jpg'],
		facilities:['Wifi','Cab','Laundry'],
		serviceCharge:90
	},
	{
		id:3,
		name:'Bulgari Hotel Milano',
		location:'Milan, Italy',
		price:680,
		package:'3D, 3N',
		discount:15,
		phone:'+44 20 7486 5800',
		rating:4.6,
		banner:require('../assets/hotel-3-0.webp'),
		images:['../assets/hotel-3-0.webp','../assets/hotel-3-1.webp','../assets/hotel-3-2.jpg','../assets/hotel-3-3.jpg'],
		facilities:['Wifi','Cab','Laundry'],
		serviceCharge:80
	},
];

export const hotelImages = {
	hotel1:[require('../assets/hotel-1-0.jpg'),require('../assets/hotel-1-1.webp'),require('../assets/hotel-1-2.jpg'),require('../assets/hotel-1-3.jpg')],
	hotel2:[require('../assets/hotel-2-0.jpg'),require('../assets/hotel-2-1.jpg'),require('../assets/hotel-2-2.jpg'),require('../assets/hotel-2-3.jpg')],
	hotel3:[require('../assets/hotel-3-0.webp'),require('../assets/hotel-3-1.webp'),require('../assets/hotel-3-2.jpg'),require('../assets/hotel-3-3.jpg')]
};

export const tours = [
	{
		id:1,
		location:'Italy',

	}
]

export const cars = [
	{
		id: 1,
		name:'Skoda Volkswagen',
		contact:'+44 3457542544',
		type: 'Mini',
		seating: 6,
		price: 50,
		insuarance: false,
		images:[require('../assets/volkswagen.webp'),]
	},
	{
		id: 2,
		name:'Chevrolet Sail',
		contact:'+44 3254567579',
		type:'Sedan',
		ac:false,
		seating: 7,
		price: 70,
		insuarance: false,
		images:[require('../assets/Chevrolet-Sail.webp'),]
	},
	{
		id: 3,
		name:'Chevrolet Trailblazer',
		contact:'+44 3646765676',
		type: 'SUV',
		ac: true,
		seating: 6,
		price: 80,
		insuarance: true,
		images:[require('../assets/Chevrolet-Trailblazer.jpg'),]
	},
	{
		id: 4,
		name:'Toyota Camry',
		contact:'+44 76787567873',
		type:'Sedan',
		ac:true,
		seating: 5,
		price: 65,
		insuarance: true,
		images:[require('../assets/toyota-camry.webp'),]
	},
	{
		id: 5,
		name:'Toyota Hyryder',
		contact:'+44 3626582322',
		type: 'SUV',
		ac: true,
		seating: 7,
		price: 86,
		insuarance: true,
		images:[require('../assets/toyota-hyryder.webp'),]
	},
	{
		id: 6,
		name:'Toyota Urban Cruiser',
		contact:'+44 7832534734',
		type: 'SUV',
		ac: true,
		seating: 8,
		price: 90,
		insuarance: true,
		images:[require('../assets/toyota-urban-cruiser.webp'),]
	},
]


export const trains = [
	{
		name:'Amritsar SF Express',
		number:22125,
		from:'',
		runningDays: ['Sat'],
		seat:['RAC-2A','WL-']
	}
]