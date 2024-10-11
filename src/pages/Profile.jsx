import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Header } from "../components/Header";
import {User} from "../components/Assets";


export const Profile = ()=>{

	return(
		<>
			<Header title={'Profile'} item={'settings'}/>
			<View style={styles.pageContainer}>
				<View style={styles.profileHead}>
					<Image source={require('../assets/profile.webp')} style={styles.profileImg}/>
					<View style={{flexDirection:'column',justifyContent:'center',gap:5}}>
						<Text style={{fontSize:20,fontWeight:'bold'}}>{User.name}</Text>
						<Text style={{fontSize:18}}>from {User.address}</Text>
						<Text>{User.username}</Text>
					</View>
				</View>
				<View>
					<Pressable style={styles.profileOptions}>
						<Text style={styles.optionText}>Edit Profile</Text>
					</Pressable>
					<Pressable style={styles.profileOptions}>
						<Text style={styles.optionText}>Notifications</Text>
					</Pressable>
					<Pressable style={styles.profileOptions}>
						<Text style={styles.optionText}>Change Password</Text>
					</Pressable>
					<Pressable style={styles.profileOptions}>
						<Text style={styles.optionText}>Language</Text>
					</Pressable>
					<Pressable style={styles.profileOptions}>
						<Text style={styles.optionText}>Sign Out</Text>
					</Pressable>
				</View>
			</View>
			<Text style={{textAlign:'center'}}>App Version 1.1.0</Text>
		</>
	);
}


const styles = StyleSheet.create({
	pageContainer:{
		margin:10,
		paddingBottom:10,
		gap: 20,
		borderRadius:10,
		backgroundColor:'#fff'
	},
	profileHead:{
		flexDirection:'row',
		justifyContent:'flex-start',
		alignItems:'stretch',
		gap: 15,
		padding:20,
	},
	profileImg:{
		width:100,
		aspectRatio:1,
		borderRadius:200,
	},
	profileOptions:{
		marginHorizontal:15,
		padding:15,
		borderTopWidth:1,
		borderTopColor:'#eee'
	},
	optionText:{
		fontSize: 16,
	}
});