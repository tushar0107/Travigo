import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { Header } from "../components/Header";
import { IncCounter } from "../components/IncCounter";
import { useEffect, useMemo, useState } from "react";
import { hotelImages } from "../components/Assets";
import CheckBox from "@react-native-community/checkbox";

export const HotelPage = ({route,navigation})=>{
	const {hotel} = route.params;
	console.log(hotel);

	const [adultQuantity,setAdultQuantity] = useState(0);
	const [childQuantity,setChildQuantity] = useState(0);
	const [facilities,setfacilities] = useState({});
	// const [formData,setFormData] = useState({});

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

	const handleCheck = (e,type)=>{
		var fac = facilities;
		if(e===true){
			if(type in fac){
				if(facilities[type]===true){
					fac[type]=false;
				}else{
					fac[type]=true;
				}
				setfacilities({...fac});
			}else{
				fac[type] = true;
				setfacilities({...fac});
			}
		}else{
			delete fac[type];
			setfacilities({...fac});
		}
	}

	// calculate the total price and details of the package
	const formData = useMemo(()=>{
		var data = {
			hotel:{...hotel},
			guests:{
				adults:adultQuantity,
				children:childQuantity
			},
			facilities:Object.keys(facilities),
			price: parseInt(hotel.price),
		};
		data.price = (adultQuantity || childQuantity) ?  data.price * (adultQuantity + childQuantity/2) : data.price;
		console.log('price',data.price)
		data.price = data.facilities.length > 0 ? data.price + hotel.serviceCharge : data.price;

		return data
	},[adultQuantity,childQuantity,facilities]);


	useEffect(()=>{},[hotel]);

	return(
		<>
		<Header title={hotel.name} nextPage={false}/>
		<ScrollView style={styles.pageContent}>
			<ScrollView style={styles.hotelGallery} horizontal>
				{
					hotelImages['hotel'+hotel.id].map((image,key)=>{
						return(
							<Image source={image} style={styles.hotelImg} key={key}></Image>
						);
					})
				}
			</ScrollView>
			
			<View style={styles.hotelDtails}>
				<Text style={{fontSize:20,color:'#111',marginBottom:20}}>Modify Package</Text>
				<Text style={{fontSize:20,color:'#111',marginBottom:10}}>Stay Duration</Text>
				<View style={styles.detailBlock}>
					<View style={{}}>
						<Text style={styles.subTitle}>Check-in date</Text>
						<Text style={styles.title}>05 Dec, 2024</Text>
					</View>
					<View><Image source={require('../assets/back-arrow.png')} style={{transform:'rotateZ(180deg)'}}></Image></View>
					<View style={{}}>
						<Text style={styles.subTitle}>Check out date</Text>
						<Text style={styles.title}>15 Dec, 2024</Text>
					</View>
				</View>
				<Text style={styles.subTitle}>Total Guests</Text>
				<View style={styles.detailBlock}>
					<View style={styles.guestContainer}>
						<View style={styles.guestSelector}>
							<View style={{width:220}}>
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
							<View style={{width:200}}>
								<Text style={styles.textSubtitle}>Children</Text>
								<Text style={{color:'#111'}}>Upto 12 years</Text>
							</View>
							<View style={styles.guestModify}>
								<Pressable onPress={()=>modifyQuantity('child',-1)}><Image source={require('../assets/minus.png')} style={styles.modifyBtn}/></Pressable>
								<Text style={styles.quantity}>{childQuantity}</Text>
								<Pressable onPress={()=>modifyQuantity('child',1)}><Image source={require('../assets/plus.png')} style={styles.modifyBtn}/></Pressable>
							</View>
						</View>
					</View>
				</View>
				<Text style={styles.subTitle}>Add Facilities</Text>
				<View style={{...styles.detailBlock,justifyContent:'flex-start',gap:10}}>
					{
						hotel?.facilities.map((index,key)=>{
							return(
								<>
									<View style={{...styles.facility,borderColor:facilities[index]?'#ff5757':'#999',}} key={key}>
										<Text style={styles.title}>{index}</Text>
										<CheckBox disabled={false} tintColors={{true:"#ff5757",false:"#999"}} value={facilities[index] || false} onValueChange={(e)=>{handleCheck(e,type=index)}}/>
									</View>
								</>
							);
						})
					}
				</View>
				<View style={styles.detailBlock}>
					<Text style={{fontSize:20,color:'#111'}}>Total Price</Text>
					<Text style={{fontSize:20,color:'green'}}>$ {formData.price}</Text>
				</View>
			</View>
			<Pressable onPress={()=>{navigation.navigate('ConfirmHotel',{data:formData})}} style={{margin:10,padding:10,backgroundColor:'#ff5757'}} android_ripple={{borderless:false}}>
				<Text style={{color:'#fff',fontSize:18,textAlign:'center'}}>Confirm</Text>
			</Pressable>
		</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	hotelDtails:{
		padding:10
	},
	hotelGallery:{
		marginVertical: 10,
		flexDirection:'row',
		overflow:'scroll',
		gap:10
	},
	hotelImg:{
		width: 400,
		aspectRatio:16/9,
		objectFit:'fill',
		marginRight:5
	},
	detailBlock:{
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		marginBottom:20,
		flexWrap:'wrap'
	},
	subTitle:{
		fontSize:16,
		color:'#888'
	},
	title:{
		fontSize:18,
		color:'#111'
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
	},
	facility:{
		flexDirection:'row',
		alignItems:'center',
		borderWidth: 2,
		paddingHorizontal:10,
		borderRadius:8
	}
});