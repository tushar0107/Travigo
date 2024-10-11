import { StyleSheet, Text, View, Dimensions } from "react-native";


export const Footer = ()=>{


	return(
		<View style={styles.container}>
			<Text>
				Footer
			</Text>
		</View>

	);
}

const styles = StyleSheet.create({
	container:{
		position:'absolute',
		zIndex:10000,
		right:0,
		bottom:0,
		left:0,
		height:60,
		backgroundColor:'white',
		borderColor:'red',
		borderWidth:1
	}
});