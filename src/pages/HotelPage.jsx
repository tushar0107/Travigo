import { Image, ScrollView, View } from "react-native";
import { Header } from "../components/Header";

export const HotelPage = ({route,navigation})=>{
	const {hotel} = route.params;
	console.log(hotel);
	var hotelImages = hotel.images.map((image)=>{});
	return(
		<>
		<Header title={hotel.name} nextPage={'search'}/>
		<ScrollView>
			<View>
				<Image source={{}}></Image>
			</View>
		</ScrollView>
		</>
	);
}