import { Header } from "./Header";


export const Search = ({navigation,route})=>{
	const {nextPage} = route.params;

	return(
		<>
			<Header title={'Search '+nextPage } navigation={navigation} nextPage={nextPage}/>
		</>
	);
}