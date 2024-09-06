import { Button, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { Header } from "../components/Header";



export const Tours = ({navigation})=>{
	return(
		<>
		<Header navigation={navigation} title={'Tours'}/>
		<ScrollView styles={styles.toursContainer}>
			<View style={styles.tourContent}>
				<ImageBackground source={require('../assets/tour-andaman.jpg')} style={{width:useWindowDimensions,height:200}}>
					<Pressable style={styles.tourPrice}><Text style={styles.tourPriceText}>$699</Text></Pressable>
				</ImageBackground>
				<View style={styles.tourDetails}>
					<View>
						<Text style={styles.tourDetailsTitle}>Tour in Italy, Venice</Text>
						<Text style={styles.tourDetailsSubTitle}>by Steve Garett</Text>
					</View>
					<Pressable style={styles.tourDetailsBook} android_ripple={{color:'eee',radius:80,foreground:false}}><Text style={styles.tourDetailsBookText}>Book Now</Text></Pressable>
				</View>
				<View style={styles.tourReview}>
					<Text>Ratings 105</Text>
				</View>
			</View>
			<View style={styles.tourContent}>
				<ImageBackground source={require('../assets/tour-venice.webp')} style={{width:useWindowDimensions,height:200}}>
					<Pressable style={styles.tourPrice}><Text style={styles.tourPriceText}>$859</Text></Pressable>
				</ImageBackground>
				<View style={styles.tourDetails}>
					<View>
						<Text style={styles.tourDetailsTitle}>Tour in Luxemburg</Text>
						<Text style={styles.tourDetailsSubTitle}>by Steve Garett</Text>
					</View>
					<Pressable style={styles.tourDetailsBook} android_ripple={{color:'eee',radius:80,foreground:false}}><Text style={styles.tourDetailsBookText}>Book Now</Text></Pressable>
				</View>
				<View style={styles.tourReview}>
					<Text>Ratings 105</Text>
				</View>
			</View>
			<View style={styles.tourContent}>
				<ImageBackground source={require('../assets/tour-andaman.jpg')} style={{width:useWindowDimensions,height:200}}>
					<Pressable style={styles.tourPrice}><Text style={styles.tourPriceText}>$549</Text></Pressable>
				</ImageBackground>
				<View style={styles.tourDetails}>
					<View>
						<Text style={styles.tourDetailsTitle}>Tour in Italy, Venice</Text>
						<Text style={styles.tourDetailsSubTitle}>by Steve Garett</Text>
					</View>
					<Pressable style={styles.tourDetailsBook} android_ripple={{borderless:false}}><Text style={styles.tourDetailsBookText}>Book Now</Text></Pressable>
				</View>
				<View style={styles.tourReview}>
					<Text>Ratings 105</Text>
				</View>
			</View>
		</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({
	toursContainer:{
		marginTop:30,
	},
	tourPriceText:{
		width:60,
		margin: 10,
		padding: (10,5),
		backgroundColor:'#ff5757',
		fontSize: 18,
		color:'white',
		textAlign:'center',
		borderRadius: 8
	},
	tourContent:{
		marginVertical:20
	},
	tourDetails:{
		padding: 20,
		flexDirection:'row',
		justifyContent:'space-between'
	},
	tourDetailsTitle:{
		fontSize:20,
		color:'#111',
		fontWeight:'bold'
	},
	tourDetailsSubTitle:{
		fontSize:18,
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
		paddingHorizontal:20,
		fontSize:14
	}
});