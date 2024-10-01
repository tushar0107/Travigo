import { Button, Image, Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, View } from "react-native";
import { Header } from "../components/Header";
import { useState } from "react";
import CheckBox from "@react-native-community/checkbox";


export const Filtering =({route,navigation})=>{
	const [isChecked,setIsChecked] = useState(false);
	const handleCheck = (e,id)=>{
		isChecked?setIsChecked(false):setIsChecked(true);
	}
	const [adultQuantity,setAdultQuantity] = useState(0);
	const [childQuantity,setChildQuantity] = useState(0);
	const modifyQuantity = (type,q)=>{
		if(type==='adult'){
			if(q === -1 && adultQuantity>0){
				setAdultQuantity(adultQuantity - 1);
			}else if(q===1){
				setAdultQuantity(adultQuantity + 1);
			}
		}else if(type==='child'){
			if(q === -1 && childQuantity>0){
				setChildQuantity(childQuantity - 1)
			}else if(q===1){
				setChildQuantity(childQuantity + 1)
			}
		}
	}

	return(
		<>
		<Header navigation={navigation} title={'Filter'} nextPage={false}/>
		<ScrollView style={styles.filterContainer}>
			<View style={styles.facilitiesContainer}>
				<TextInput style={styles.textInput} placeholder="Hotel name, City, location" placeholderTextColor={'grey'}></TextInput>
				<Text style={styles.containerTextHeading}>Facilities</Text>
				<ScrollView style={styles.facilities} horizontal>					
					<Pressable style={styles.filterButton} id="checkbox-1">
						<CheckBox disabled={false} tintColors={{true:"#ff5757",false:"#ff5757"}} value={isChecked} onValueChange={(e)=>handleCheck(e)}/>
						<Text style={styles.filterButtonText}>WiFi</Text>
					</Pressable>
					<Pressable style={styles.filterButton} id="checkbox-2">
						<CheckBox disabled={false} tintColors={{true:"#ff5757",false:'#ff5757'}} value={isChecked} onValueChange={(e)=>handleCheck(e)}/>
						<Text style={styles.filterButtonText}>Parking</Text>
					</Pressable>
					<Pressable style={styles.filterButton} id="checkbox-3">
						<CheckBox disabled={false} tintColors={{true:"#ff5757",false:'#ff5757'}} value={isChecked} onValueChange={(e)=>handleCheck(e)}/>
						<Text style={styles.filterButtonText}>Premier</Text>
					</Pressable>
					<Pressable style={styles.filterButton} id="checkbox-4">
						<CheckBox disabled={false} tintColors={{true:"#ff5757",false:'#ff5757'}} value={isChecked} onValueChange={(e)=>handleCheck(e)}/>
						<Text style={styles.filterButtonText}>Shower</Text>
					</Pressable>
				</ScrollView>
			</View>

			<View style={styles.guestContainer}>
				<Text style={styles.containerTextHeading}>Guests</Text>
				<View style={styles.guestSelector}>
					<View>
						<Text style={styles.textSubtitle}>Adults</Text>
						<Text style={{color:'#111'}}>16+ years</Text>
					</View>
					<View style={styles.guestModify}>
						<Pressable onPress={()=>modifyQuantity('adult',-1)}><Image source={require('../assets/minus.png')} style={styles.modifyBtn}/></Pressable>
						<Text style={styles.quantity}>{adultQuantity}</Text>
						<Pressable onPress={()=>modifyQuantity('adult',1)}><Image source={require('../assets/plus.png')} style={styles.modifyBtn}/></Pressable>
					</View>
				</View>
				<View style={styles.guestSelector}>
				<View>
					<Text style={styles.textSubtitle}>Children</Text>
					<Text style={{color:'#111'}}>2-12 years</Text>
					</View>
					<View style={styles.guestModify}>
						<Pressable onPress={()=>modifyQuantity('child',-1)}><Image source={require('../assets/minus.png')} style={styles.modifyBtn}/></Pressable>
						<Text style={styles.quantity}>{childQuantity}</Text>
						<Pressable onPress={()=>modifyQuantity('child',1)}><Image source={require('../assets/plus.png')} style={styles.modifyBtn}/></Pressable>
					</View>
				</View>
			</View>

			<View style={styles.facilitiesContainer}>
				<Text style={styles.containerTextHeading}>Room Types</Text>
				<ScrollView style={styles.facilities} horizontal>
					<Pressable style={styles.filterButton} id="checkbox-1">
						<CheckBox disabled={false} tintColors={{true:"#ff5757",false:"#ff5757"}} value={isChecked} onValueChange={(e)=>handleCheck(e)}/>
						<Text style={styles.filterButtonText}>Standard</Text>
					</Pressable>
					<Pressable style={styles.filterButton} id="checkbox-2">
						<CheckBox disabled={false} tintColors={{true:"#ff5757",false:'#ff5757'}} value={isChecked} onValueChange={(e)=>handleCheck(e)}/>
						<Text style={styles.filterButtonText}>Delux</Text>
					</Pressable>
					<Pressable style={styles.filterButton} id="checkbox-3">
						<CheckBox disabled={false} tintColors={{true:"#ff5757",false:'#ff5757'}} value={isChecked} onValueChange={(e)=>handleCheck(e)}/>
						<Text style={styles.filterButtonText}>Premier</Text>
					</Pressable>
					<Pressable style={styles.filterButton} id="checkbox-4">
						<CheckBox disabled={false} tintColors={{true:"#ff5757",false:'#ff5757'}} value={isChecked} onValueChange={(e)=>handleCheck(e)}/>
						<Text style={styles.filterButtonText}>Other</Text>
					</Pressable>
				</ScrollView>
			</View>

			<Pressable onPress={()=>{navigation.navigate(false)}} style={{padding:10,backgroundColor:'#ff5757'}} android_ripple={{borderless:false}}><Text style={{color:'#fff',fontSize:18,textAlign:'center'}}>Apply filters</Text></Pressable>

		</ScrollView>
		</>
	);
}

const styles = StyleSheet.create({
	textInput:{
		borderRadius: 10,
		paddingHorizontal: 20,
		borderColor: 'grey',
		borderWidth: 2,
		color:'black',
		marginBottom:20,
		fontSize:16
	},
	filterContainer:{
		padding:10,
	},
	facilitiesContainer:{
		marginVertical:30
	},
	containerTextHeading:{
		color:'#111',
		fontSize: 24,
		fontWeight:'bold',
		marginBottom:10
	},
	textSubtitle:{
		color:'#111',
		fontSize: 20	
	},
	facilities:{
		flexDirection:'row',
		overflow:'scroll',
		padding:10
	},
	filterButton:{
		flexDirection:'row',
		marginRight:10,
		borderWidth:2,
		borderColor:'#ff5757',
		borderRadius:30,
		paddingHorizontal: 15
	},
	filterButtonText:{
		color:'#ff5757',
		fontSize:18,
		paddingVertical:5,
	},
	guestSelector:{
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		marginBottom:20
	},
	guestModify:{
		flexDirection:'row',
		alignItems:'center',
		marginHorizontal: 10,
		gap:20
	},
	modifyBtn:{
		width:30,
		aspectRatio: 1,
		borderRadius:50,
		padding:10
	},
	quantity:{
		color:'#111',
		fontSize:24,
		width:30,
		textAlign:'center'
	}
});