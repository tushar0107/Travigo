import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";


export const Header = ({title,item})=>{
	const navigation = useNavigation();

	return(
		<View style={styles.header}>
			<Pressable onPress={()=>{navigation.goBack()}}>
            	<Image source={require('../assets/back-arrow.png')}/>
          	</Pressable>
			<Text style={styles.logo}>{title}</Text>
			{
				item==='search'?
				<Pressable android_ripple={{color:'#eee',borderless:true}} onPress={()=>{navigation.navigate('Filtering')}} style={{width:30,aspectRatio:1}}>
			  		<Image source={require('../assets/search.png')} style={styles.headerIcon}/>
				</Pressable>: 
				item==='settings'?
				<Pressable android_ripple={{color:'#eee',borderless:true}} onPress={()=>{navigation.navigate('Settings')}} style={{width:40,aspectRatio:1}}>
			  		<Image source={require('../assets/settings.png')} style={styles.headerIcon}/>
				</Pressable>
				:<View style={{width:30}}></View>
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
	},
	headerIcon:{
		width:30,
		margin:'auto',
		objectFit:'contain'
	}
})