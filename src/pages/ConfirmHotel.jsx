import { Pressable, StyleSheet, Text, View } from "react-native";
import { Header } from "../components/Header";
import { IncCounter } from "../components/IncCounter";
import { useEffect, useMemo, useState } from "react";
import { store } from "../store/store";
import { addBooking, removeBooking } from "../store/slices/bookingSlice";


export const ConfirmHotel = ({route,navigation})=>{
	const {data} = route.params;
	data.bookingId= 'booking-hotel-'+data.hotel.id;
	console.log('params:',data);

	return(
		<>
			<Header title={'Confirm Hotel'} nextPage={false}/>
			<View style={{...styles.confirmContainer,gap:20}}>
				<View style={{}}>
					<Text style={styles.subtitle}>Hotel Name</Text>
					<Text style={styles.title}>{data.hotel.name}, {data.hotel.location}</Text>
				</View>
				<View style={{...styles.stayDesc}}>
					<View>
						<Text style={styles.subtitle}>Check-in</Text>
						<Text style={styles.title}>{data.checIn || '04 Dec, 2024'}</Text>
					</View>
					<View>
						<Text style={styles.subtitle}>Check-out</Text>
						<Text style={styles.title}>{data.checkOut || '15 Dec, 2024'}</Text>
					</View>
				</View>
				<View style={{...styles.stayDesc}}>
					<View style={styles.descBlock}>
						<Text style={styles.subtitle}>Duration</Text>
						<Text style={styles.title}>{data.hotel.package}</Text>
					</View>
					<View style={styles.descBlock}>
						<Text style={styles.subtitle}>Guests</Text>
						<Text style={styles.title}>{'Adults '+ data.guests.adults + ' + Children' + data.guests.children}</Text>
					</View>
				</View>
				<View style={{...styles.stayDesc}}>
					<View style={styles.descBlock}>
						<Text style={styles.subtitle}>Services</Text>
						<Text style={styles.title}>{data.facilities.join(', ')}</Text>
					</View>
				</View>
			</View>
				<View style={styles.confirmContainer}>
					<View style={styles.priceItem}>
						<Text style={styles.priceText}>Guests Charges</Text>
						<Text style={styles.priceText}>$ {data.price - data.hotel.serviceCharge}</Text>
					</View>
					<View style={styles.priceItem}>
						<Text style={styles.priceText}>Hotel Services</Text>
						<Text style={styles.priceText}>$ {data.hotel.serviceCharge}</Text>
					</View>
					<View style={styles.priceItem}>
						<Text style={styles.priceText}>{data.hotel.discount || 0}% Discount</Text>
						<Text style={{...styles.priceText,color:'#ff5757'}}>- {(data.hotel.price*data.hotel.discount||0)/100}</Text>
					</View>
					<View style={styles.priceItem}>
						<Text style={styles.priceText}>Total</Text>
						<Text style={{...styles.priceText,color:'green'}}>$ {data.price - (data.hotel.price*data.hotel.discount||0)/100}</Text>
					</View>
				</View>
				<Pressable onPress={()=>{store.dispatch(addBooking({...data,type:'hotel'}))}} style={{padding:10,backgroundColor:'#ff5757',margin:10}} android_ripple={{borderless:false}}>
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