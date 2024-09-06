import { ScrollView, Text } from "react-native";
import { Header } from "../components/Header";


export const Bus = ({navigation})=>{

	return(
		<>
			<Header title={'Buses'} navigation={navigation}/>
			<ScrollView>
				<Text>Busses page</Text>
			</ScrollView>
		</>
	);
}