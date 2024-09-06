import { ScrollView, StyleSheet } from "react-native";
import { Header } from "../components/Header";


export const Train = ({navigation})=>{

	return(
	<>
		<Header navigation={navigation} title={'Trains'}/>
		<ScrollView style={styles.container}>

		</ScrollView>
	</>
	);
}

const styles = StyleSheet.create({
	container:{

	}
});