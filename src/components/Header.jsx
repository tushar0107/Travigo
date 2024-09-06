import { Image, Pressable, StyleSheet, Text, View } from "react-native";


export const Header = ({navigation,title,nextPage})=>{
	

	return(
		<View style={styles.header}>
			<Pressable onPress={()=>{navigation.goBack()}}>
            	<Image source={require('../assets/back-arrow.png')}/>
          	</Pressable>
			<Text style={styles.logo}>{title}</Text>
			{
				nextPage? 
				<Pressable onPress={()=>{navigation.navigate(nextPage)}}>
					<Text style={styles.applyBtn}>Apply</Text>
				</Pressable> :
				<Pressable android_ripple={{color:'#eee',borderless:true}} style={{width:50,height:50}}>
			  		<Image source={require('../assets/search.png')} style={{width:30,margin:'auto',objectFit:'contain'}}/>
				</Pressable>
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