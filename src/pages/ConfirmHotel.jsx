import { Pressable, StyleSheet, Text, View } from "react-native";
import { Header } from "../components/Header";
import { IncCounter } from "../components/IncCounter";
import { useEffect, useMemo, useState } from "react";


export const ConfirmHotel = ({route,navigation})=>{
	const hotelServices = 150;
	const securityDeposit = 200;
	const {guestCount,price,discount} = route.params;
	console.log('params:',guestCount,price,discount);

	const [guests,setGuests] = useState(guestCount);
	const [totalPrice,setTotalPrice] = useState(((totalGuests()*price)*(100-discount)/100)+hotelServices+securityDeposit);
	const totalDiscount = (totalGuests()*price)*discount/100;
	console.log(guests);
	
	function totalGuests(){
		if(guests){
			return guests.adults + guests.children;
		}else{
			guestCount.adults + guestCount.children;
		}
	}

	useMemo(()=>{
		setTotalPrice(((totalGuests()*price)*(100-20)/100)+hotelServices+securityDeposit);
	},[guests]);

	return(
		<>
			<Header title={'Confirm Hotel'} nextPage={false}/>
			<View style={{...styles.confirmContainer,gap:20}}>
				<View style={{}}>
					<Text style={styles.subtitle}>Hotel Name</Text>
					<Text style={styles.title}>Bellagio Hotel Casino</Text>
				</View>
				<View style={{...styles.stayDesc}}>
					<View>
						<Text style={styles.subtitle}>Check-in</Text>
						<Text style={styles.title}>04 Dec, 2024</Text>
					</View>
					<View>
						<Text style={styles.subtitle}>Check-out</Text>
						<Text style={styles.title}>15 Dec, 2024</Text>
					</View>
				</View>
				<View style={styles.descBlock}>
					<Text style={styles.subtitle}>Duration</Text>
					<Text style={styles.title}>11 days, 12 Nights</Text>
				</View>
				<IncCounter guests={guestCount} getCount={setGuests} />
			</View>
				<View style={styles.confirmContainer}>
					<View style={styles.priceItem}>
						<Text style={styles.priceText}>Guests Charges</Text>
						<Text style={styles.priceText}>{totalGuests()} X $ {price}</Text>
						<Text style={styles.priceText}>$ {totalGuests()*price}</Text>
					</View>
					<View style={styles.priceItem}>
						<Text style={styles.priceText}>Hotel Services</Text>
						<Text style={styles.priceText}>$ {hotelServices}</Text>
					</View>
					<View style={styles.priceItem}>
						<Text style={styles.priceText}>Security Deposit</Text>
						<Text style={styles.priceText}>$ {securityDeposit}</Text>
					</View>
					<View style={styles.priceItem}>
						<Text style={styles.priceText}>{discount}% Discount</Text>
						<Text style={styles.priceText}>-{totalDiscount}</Text>
					</View>
					<View style={styles.priceItem}>
						<Text style={styles.priceText}>Total</Text>
						<Text style={{...styles.priceText,color:'green'}}>$ {totalPrice}</Text>
					</View>
				</View>
				<Pressable onPress={()=>{}} style={{padding:10,backgroundColor:'#ff5757',margin:10}} android_ripple={{borderless:false}}>
					<Text style={{color:'#fff',fontSize:18,textAlign:'center'}}>Confirm & Book</Text>
				</Pressable>

		</>
	);
};

const styles = StyleSheet.create({
	confirmContainer:{
		margin: (20,10),
		padding: 20,
		backgroundColor: '#ddd',
		borderRadius:10
	},
	descBlock:{
	},
	subtitle:{
		fontSize:16,
		color:'#888888',
	},
	title:{
		fontSize:20,
		color:'#111111'
	},
	stayDesc:{
		flexDirection:'row',
		justifyContent:'space-between'
	},
	priceItem:{
		flexDirection:'row',
		justifyContent:'space-between'
	},
	priceText:{
		fontSize:16,
		color:'#111'
	}
});