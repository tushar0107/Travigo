import { useState } from 'react';

const { StyleSheet, View, Text, Pressable, Image } = require('react-native');


export const IncCounter = ({guests,getCount})=>{
	const [adultQuantity,setAdultQuantity] = useState(guests.adults);
	const [childQuantity,setChildQuantity] = useState(guests.children);
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
		getCount({adults:adultQuantity,children:childQuantity});
	}
	return(
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
					<Text style={{color:'#111'}}>Upto 12 years</Text>
					</View>
					<View style={styles.guestModify}>
						<Pressable onPress={()=>modifyQuantity('child',-1)}><Image source={require('../assets/minus.png')} style={styles.modifyBtn}/></Pressable>
						<Text style={styles.quantity}>{childQuantity}</Text>
						<Pressable onPress={()=>modifyQuantity('child',1)}><Image source={require('../assets/plus.png')} style={styles.modifyBtn}/></Pressable>
					</View>
				</View>
			</View>
	);
};

const styles = StyleSheet.create({
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
	}
});