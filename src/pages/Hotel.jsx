import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { Header } from "../components/Header";
import { hotels } from "../components/Assets";


export const Hotel = ({navigation})=>{


	return(
	<>
		<Header title={'Hotel'} nextPage={'search'}/>
		<ScrollView>
			{
				hotels.map((hotel,key)=>{
					return(
						<View style={styles.tourContent} key={key}>
							<ImageBackground source={hotel.banner} style={{width:useWindowDimensions,height:200}}>
								{hotel.discount ? <Pressable style={styles.tourPrice}><Text style={styles.tourPriceText}>{hotel.discount+'% off'}</Text></Pressable>: null}
							</ImageBackground>
							<View style={styles.tourDetails}>
								<View>
									<Text style={styles.tourDetailsTitle}>{hotel.name}</Text>
									<Text style={styles.tourDetailsSubTitle}>{hotel.location}</Text>
									<Text>
										<Image source={require('../assets/events.png')} style={{width:15,height:15}}/> 
										<Text style={{color:'#111'}}>{hotel.rating}</Text>
									</Text>
								</View>
								<Pressable style={styles.tourDetailsBook} onPress={()=>navigation.navigate('HotelPage',{hotel:hotel})} android_ripple={{color:'eee',radius:80,foreground:false}}>
									<Text style={styles.tourDetailsBookText}>${hotel.price}</Text>
									<Text style={{color:'#ff5757',textAlign:'center'}}>{hotel.package}</Text>
								</Pressable>
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
		marginBottom:30,
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
		justifyContent:'space-between',
		alignItems:'center'
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
		borderRadius:10,
	},
	tourDetailsBookText:{
		color:'#ff5757',
		fontSize:18,
		paddingHorizontal: 20
	},
	tourReview:{
		paddingHorizontal:10,
		fontSize:14
	}
});