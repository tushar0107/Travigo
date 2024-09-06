import { ScrollView } from "react-native";
import { Header } from "../components/Header";


export const Hotel = ({navigation})=>{

	return(
	<>
		<Header title={'Hotel'} navigation={navigation}/>
		<ScrollView></ScrollView>
	</>
	);
}