import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";


export const Header = ({title,nextPage})=>{
	const navigation = useNavigation();

	return(
		<View style={styles.header}>
			<Pressable onPress={()=>{navigation.goBack()}}>
            	<Image source={require('../assets/back-arrow.png')}/>
          	</Pressable>
			<Text style={styles.logo}>{title}</Text>
			{
				nextPage ==='search'?
				<Pressable android_ripple={{color:'#eee',borderless:true}} onPress={()=>{navigation.navigate('Filtering',{nextPage:'Hotel'})}} style={{width:50,height:50}}>
			  		<Image source={require('../assets/search.png')} style={{width:30,margin:'auto',objectFit:'contain'}}/>
				</Pressable>: <Text></Text>
			}
		</View>
	);
}

const styles = StyleSheet.create({
	header:{
		padding: 10,
		flexDirection:'row',
		justifyContent: 'space-between',
		alignItems:'center',
		elevation: 5,
		backgroundColor:'#fff'
	},
	logo:{
		fontSize: 24,
		color: '#111111',
	},
	applyBtn:{
		fontSize: 18,
		color:'#ff5757'
	}
})