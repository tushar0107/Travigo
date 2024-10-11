import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { Header } from "../components/Header";
import { cars } from "../components/Assets";


export const Cars = ({navigation})=>{

	return(
		<>
			<Header title={'Cars'} item={'search'}/>
			<ScrollView>
			{
				cars.map((car,key)=>{
					return(
						<Pressable style={styles.carsContent} key={key} android_ripple={{color:'#eee',radius:300,foreground:false}}>
							<Image source={car.images[0]} style={styles.carImage}></Image>
							<View style={styles.carsDetails}>
								<View>
									<Text style={styles.carsName}>{car.name}</Text>
									<Text style={styles.carsType}>{car.type}</Text>
									<View style={styles.carsFeatures}>
										{car.ac?<Text style={styles.carFeat}>AC</Text>:null}
										{car.insuarance?<Text style={styles.carFeat}>Insurance</Text>:null}
										<Text style={styles.carFeat}>{car?.seating} Seats</Text>
									</View>
								</View>
								<Text style={styles.carsPrice}>${car.price}</Text><Text>per day</Text>
							</View>
						</Pressable>
					);
				})
			}
			</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({
	carsContent:{
		flexDirection:'row',
		justifyContent:'flex-start',
		gap: 10,
		paddingVertical:10,
		marginBottom:10,
		backgroundColor:'#fff'
	},
	carImage:{
		width:150,
		height:200,
		objectFit: 'cover'
	},
	carsDetails:{
		width:230,
		paddingVertical:10,
		justifyContent:'flex-start',
	},
	carsName:{
		color:'#111',
		fontSize:18
	},
	carsType:{
		color:'#888',
		fontSize:16
	},
	carsFeatures:{
		flexDirection:'row',
		justifyContent:'flex-start',
		marginTop:10,
		flexWrap:'wrap-reverse',
		gap:10
	},
	carFeat:{
		textAlign:'center',
		color: '#4a90a4',
		backgroundColor:'#dddddd',
		borderRadius:20,
		paddingVertical:5,
		paddingHorizontal:20
	},
	carFeatText:{
		color:'#4a90a4',
		textAlign:'center'
	},
	carsPrice:{
		color:'#ff5757',
		fontSize:24,
		marginTop:30,
	},
});