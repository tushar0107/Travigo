import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { Header } from "../components/Header";


export const Hotel = ({navigation})=>{

	const hotels = [
		{
			id:'1',
			name:'Bellagio Hotel Casino',
			location:'Las Vegas',
			price:'2150',
			discount:'20',
			phone:'+44 20 7486 5800',
			rating:'4.2',
			banner:require('../assets/hotel-1-0.jpg'),
			images:['../assets/hotel-1-0.jpg','../assets/hotel-1-1.webp','../assets/hotel-1-2.jpg','../assets/hotel-1-3.jpg'],
		},
		{
			id:'2',
			name:'Hyatt Regency London',
			location:'30 Portman Square, London',
			price:'1560',
			phone:'+44 20 7486 5800',
			rating:'4.7',
			banner:require('../assets/hotel-2-0.jpg'),
			images:['../assets/hotel-2-0.jpg','../assets/hotel-2-1.jpg','../assets/hotel-2-2.jpg','../assets/hotel-2-3.jpg'],
		},
		{
			id:'3',
			name:'Bulgari Hotel Milano',
			location:'Milan, Italy',
			price:'1917',
			discount:'15',
			phone:'+44 20 7486 5800',
			rating:'4.6',
			banner:require('../assets/hotel-3-0.webp'),
			images:['../assets/hotel-3-0.webp','../assets/hotel-3-1.webp','../assets/hotel-3-2.jpg','../assets/hotel-3-3.jpg'],
		},
	]

	return(
	<>
		<Header title={'Hotel'} nextPage={'search'}/>
		<ScrollView>
			{
				hotels.map((hotel,value)=>{
					return(
						<View style={styles.tourContent}>
							<ImageBackground source={hotel.banner} style={{width:useWindowDimensions,height:200}}>
								{hotel.discount ? <Pressable style={styles.tourPrice}><Text style={styles.tourPriceText}>{hotel.discount+'% off'}</Text></Pressable>: null}
							</ImageBackground>
							<View style={styles.tourDetails}>
								<View>
									<Text style={styles.tourDetailsTitle}>{hotel.name}</Text>
									<Text style={styles.tourDetailsSubTitle}>{hotel.location}</Text>
								</View>
								<Pressable style={styles.tourDetailsBook} onPress={()=>navigation.navigate('HotelPage',{hotel:hotel})} android_ripple={{color:'eee',radius:80,foreground:false}}>
									<Text style={styles.tourDetailsBookText}>${hotel.price}</Text>
								</Pressable>
							</View>
							<View style={styles.tourReview}>
								<Text style={{color:'#111'}}>Ratings {hotel.rating}</Text>
							</View>
						</View>
					);
				})
			}
		</ScrollView>
	</>
	);
}

const styles = StyleSheet.create({
	toursContainer:{
		marginTop:30,
	},
	tourPriceText:{
		width:80,
		margin: 10,
		padding: (10,5),
		backgroundColor:'#ff5757',
		fontSize: 18,
		color:'white',
		textAlign:'center',
		borderRadius: 8
	},
	tourContent:{
		marginBottom:20
	},
	tourDetails:{
		padding: 10,
		flexDirection:'row',
		justifyContent:'space-between'
	},
	tourDetailsTitle:{
		fontSize:18,
		color:'#111',
		fontWeight:'bold'
	},
	tourDetailsSubTitle:{
		fontSize:14,
		color:'#777'
	},
	tourDetailsBook:{
		borderWidth:2,
		borderColor:'#ff5757',
		borderRadius:30,
	},
	tourDetailsBookText:{
		color:'#ff5757',
		fontSize:18,
		paddingVertical:10,
		paddingHorizontal: 30
	},
	tourReview:{
		paddingHorizontal:10,
		fontSize:14
	}
});