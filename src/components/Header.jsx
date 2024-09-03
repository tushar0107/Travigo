import { Image, Pressable, StyleSheet, Text, View } from "react-native";


export const Header = ()=>{

	const pressed = ()=>{
		alert('pressed');
	}

	return(
		<View style={styles.header}>
			<Text style={styles.logo}>Logo</Text>
			<Pressable onPress={pressed}>
				<Image source={require('../assets/ellipsis.png')} style={styles.menuimg}/>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	header:{
		padding: 10,
		paddingVertical:20,
		flexDirection:'row',
		justifyContent: 'space-between',
		alignItems:'center',
	},
	logo:{
		fontSize: 24,
	},
	menubtn:{
	},
	menuimg:{
		width:30,
		height:30
	}
})