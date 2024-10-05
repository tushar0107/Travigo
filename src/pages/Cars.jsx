import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { Header } from "../components/Header";
import { cars } from "../components/Assets";


export const Cars = ({navigation})=>{

	return(
		<>
			<Header title={'Cars'} search={true}/>
			<ScrollView>
			{
				cars.map((car,key)=>{
					return(
						<Pressable style={styles.carsContent} key={key}>
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
								<Pressable style={{}} onPress={()=>{}} android_ripple={{color:'#eee',radius:80,foreground:false}}>
									<Text style={styles.carsPrice}>${car.price}</Text>
								</Pressable>
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
		paddingVertical:10
	},
	carImage:{
		width:150,
		height:230,
		objectFit: 'cover'
	},
	carsDetails:{
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
		flexWrap:'wrap',
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