import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, useColorScheme, useWindowDimensions, View } from "react-native";


export const Home = ({navigation})=>{

	const color = useColorScheme();
	return(
		<ScrollView style={styles.container}>
			<Image source={require('../assets/hero.jpg')} style={styles.heroimg}/>
			<View style={styles.mainMenu}>
				<TextInput style={styles.textInput} placeholder="Where're you looking for?" placeholderTextColor={'grey'}></TextInput>
				<View style={styles.menuList}>
					<View style={styles.menuItem}>
						<Pressable style={styles.menuListBtn} onPress={()=>{navigation.navigate('Hotel',{nextPage:'Hotel'})}}>
							<Image source={require('../assets/hotel.png')} style={styles.menuListImg}/>
							<Text style={styles.menuItemName}>Hotel</Text>
						</Pressable>
					</View>
					<View style={styles.menuItem}>
						<Pressable style={styles.menuListBtn} onPress={()=>{navigation.navigate('Filtering',{nextPage:'Tours'})}}>
							<Image source={require('../assets/tour.png')} style={styles.menuListImg}/>
							<Text style={styles.menuItemName}>Tour</Text>
						</Pressable>
					</View>
					<View style={styles.menuItem}>
						<Pressable style={styles.menuListBtn}>
							<Image source={require('../assets/car.png')} style={styles.menuListImg}/>
							<Text style={styles.menuItemName}>Car</Text>
						</Pressable>
					</View>
					<View style={styles.menuItem}>
						<Pressable style={styles.menuListBtn}>
							<Image source={require('../assets/flight.png')} style={styles.menuListImg}/>
							<Text style={styles.menuItemName}>Flight</Text>
						</Pressable>
					</View>
				</View>
				<View style={styles.menuList}>
						<View style={styles.menuItem}>
							<Pressable style={styles.menuListBtn} onPress={()=>{navigation.navigate('Search',{nextPage:'Trains'})}}>
								<Image source={require('../assets/train.png')} style={styles.menuListImg}/>
								<Text style={styles.menuItemName}>Train</Text>
							</Pressable>
						</View>
						<View style={styles.menuItem}>
							<Pressable style={styles.menuListBtn} onPress={()=>{navigation.navigate('Search',{nextPage:'Buses'})}}>
								<Image source={require('../assets/bus.png')} style={styles.menuListImg}/>
								<Text style={styles.menuItemName}>Bus</Text>
							</Pressable>
						</View>
						<View style={styles.menuItem}>
							<Pressable style={styles.menuListBtn}>
								<Image source={require('../assets/events.png')} style={styles.menuListImg}/>
								<Text style={styles.menuItemName}>Event</Text>
							</Pressable>
						</View>
						<View style={styles.menuItem}>
							<Pressable style={styles.menuListBtn}>
								<Image source={require('../assets/more.png')} style={styles.menuListImg}/>
								<Text style={styles.menuItemName}>More</Text>
							</Pressable>
						</View>
				</View>
			</View>
			<Text style={[styles.headingText,]}>Promos Today</Text>
			<ScrollView style={styles.promos} horizontal>
				<ImageBackground source={require('../assets/promo-1.jpg')} style={styles.promoImg}>
					<View style={styles.details}>
						<Text style={styles.promoSubTitle}>Attraction & Activities</Text>
						<Text style={styles.promoTitle}>Barcelona</Text>
						<Pressable style={styles.promoBtn}>
							<Text style={styles.promoBtnText}>Book Now</Text>
						</Pressable>
					</View>
				</ImageBackground>
				<ImageBackground source={require('../assets/promo-2.jpg')} style={styles.promoImg}>
					<View style={styles.details}>
						<Text style={styles.promoSubTitle}>Attraction & Activities</Text>
						<Text style={styles.promoTitle}>Australia</Text>
						<Pressable style={styles.promoBtn}>
							<Text style={styles.promoBtnText}>Book Now</Text>
						</Pressable>
					</View>
				</ImageBackground>
				<ImageBackground source={require('../assets/promo-3.jpg')} style={styles.promoImg}>
					<View style={styles.details}>
						<Text style={styles.promoSubTitle}>Attraction & Activities</Text>
						<Text style={styles.promoTitle}>Italy</Text>
						<Pressable style={styles.promoBtn}>
							<Text style={styles.promoBtnText}>Book Now</Text>
						</Pressable>
					</View>
				</ImageBackground>
			</ScrollView>			

		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container:{

	},
	heroimg:{
		width: useWindowDimensions,
		height: 200
	},
	mainMenu:{
		marginHorizontal:15,
		padding: 10,
		borderRadius: 20,
		marginTop: -40,
		backgroundColor:'white',
	},
	textInput:{
		borderRadius: 10,
		paddingHorizontal: 20,
		borderColor: 'grey',
		borderWidth: 2,
		color:'black'
	},
	menuList:{
		flexDirection:'row',
		justifyContent:'space-evenly',
		marginTop:20
	},
	menuListBtn:{
		padding: 10,
		aspectRatio:1,
		alignItems:'center',
		backgroundColor:'#eee',
		borderRadius:800
	},
	menuListImg:{
		width: 30,
		height: 30,
		padding: 10,
		objectFit: 'contain',
	},
	menuItemName:{
		color: '#111'
	},
	headingText:{
		margin:20,
		marginBottom: 0,
		fontSize: 24,
		fontWeight: 'bold',
		color: '#000'
	},
	promos:{
		marginVertical: 10,
		marginHorizontal:20,
		flexDirection:'row',
		overflow:'scroll',
	},
	promoImg:{
		width: 220,
		height: 300,
		marginEnd: 20,
		padding: 10,
		borderRadius: 12,
		justifyContent: 'flex-end'
	},
	promoDetails:{
		color:'#fff',
	},
	promoTitle:{
		marginBottom:10,
		fontSize: 30,
		fontWeight: 'bold',
		color:'#fff'
	},
	promoSubTitle:{
		fontSize: 20,
		color:'#fff'
	},
	promoBtnText:{
		width: 110,
		backgroundColor:'#FF5757',
		color:'#fff',
		borderRadius:6,
		paddingTop:6,
		paddingLeft:8,
		paddingBottom: 8,
		fontSize: 20,
	}
});