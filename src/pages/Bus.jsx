import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Header } from "../components/Header";
import { useState } from "react";
import DateTimePicker from "react-native-ui-datepicker";


export const Buses = ({navigation})=>{
	const [source,setSource] = useState();
	const [destination,setDestination] = useState();
	const [date,setDate] = useState(new Date());
	const [openDate, setOpenDate] = useState(false);
	const [showResults,setShowResults] = useState(false);

	const invertStations = ()=>{
		var s = source;
		setSource(destination);
		setDestination(s);
	}

	return(
	<>
		<Header title={'Buses'}/>
		<ScrollView style={styles.pageContainer}>
			<View style={styles.block}>

				<Text style={styles.heading}>Select City</Text>
				<View style={styles.trainStation}>
					<View style={styles.stationname}>
						<Text style={styles.subTitle}>From</Text>
						<TextInput style={styles.stationInput} value={source} onChange={(e)=>setSource((e.nativeEvent.text).toLocaleUpperCase())} placeholder="City" placeholderTextColor={'grey'}></TextInput>
					</View>
					<Pressable onPress={()=>invertStations()}>
						<Image source={require('../assets/reverse-arrow.png')}/>
					</Pressable>
					<View style={styles.stationname}>
						<Text style={styles.subTitle}>To</Text>
						<TextInput style={styles.stationInput} value={destination} onChange={(e)=>setDestination((e.nativeEvent.text).toLocaleUpperCase())} placeholder="City" placeholderTextColor={'grey'}></TextInput>
					</View>
				</View>
				
				<Pressable style={{flexDirection:'row',justifyContent:'space-between'}} onPress={()=>setOpenDate(true)}>
					<Text style={styles.heading}>Select Date</Text>
					<Text style={styles.selectDate}>{new Date(date).toDateString()}</Text>
				</Pressable>
				
				<Pressable onPress={()=>setShowResults(!showResults)} android_ripple={{color:'#AC0B0B',radius:200,foreground:true}}>
					<Text style={styles.submitBtn}>Search Buses</Text>
				</Pressable>
			</View>
			<View style={styles.block}>
				<Text style={styles.heading}>Select Date</Text>
				<ScrollView style={styles.dateList} horizontal>
					<View style={styles.journeyDate}>
						<Text>Mon, 14 Oct</Text>
						<Text style={{fontSize:20,textAlign:'right'}}>07:10</Text>
					</View>
					<View style={styles.journeyDate}>
						<Text>Wed, 16 Oct</Text>
						<Text style={{fontSize:20,textAlign:'right'}}>10:50</Text>
					</View>
					<View style={styles.journeyDate}>
						<Text>Fri, 18 Oct</Text>
						<Text style={{fontSize:20,textAlign:'right'}}>07:10</Text>
					</View>
					<View style={styles.journeyDate}>
						<Text>Sat, 19 Oct</Text>
						<Text style={{fontSize:20,textAlign:'right'}}>07:10</Text>
					</View>
					<View style={styles.journeyDate}>
						<Text>Sat, 19 Oct</Text>
						<Text style={{fontSize:20,textAlign:'right'}}>07:10</Text>
					</View>
				</ScrollView>
			</View>
			<View style={styles.block}>
				<Text style={styles.heading}>Runs on</Text>
				<View style={styles.dateList}>
					<Text style={styles.day}>Mon</Text>
					<Text style={styles.day}>Tue</Text>
					<Text style={styles.day}>Wed</Text>
					<Text style={styles.day}>Thu</Text>
					<Text style={styles.day}>Fri</Text>
					<Text style={styles.day}>Sat</Text>
					<Text style={styles.day}>Sun</Text>
				</View>
			</View>
			
			
		</ScrollView>
		<View style={{...styles.calender,display:openDate?'flex':'none',}}>
					<View style={{position:'relative',backgroundColor:'#fff'}}>
							<DateTimePicker mode='single'
								date={date}
								displayFullDays={true}
								onChange={({date})=>{setDate(date)}}
								calendarTextStyle={{color:'#111'}}
								selectedItemColor='#ff5757'
								headerContainerStyle={{color:'#111'}}
								headerTextContainerStyle={{color:'#111'}}
								headerTextStyle={{color:'#111'}}
								headerButtonStyle={{color:'#ff5757'}}
								weekDaysTextStyle={{color:'#ff5757'}}
							/>
						<Pressable style={{flexDirection:'row',justifyContent:'flex-end',margin:10}} onPress={()=>setOpenDate(!openDate)}>
							<Text style={{width:70,fontSize:14,color:'#fff',fontWeight:'bold',textAlign:'center',borderRadius:8,backgroundColor:'#ff5757',padding:(20,10)}}>Done</Text>
						</Pressable>
					</View>
				</View>
	</>
	);
}

const styles = StyleSheet.create({
	pageContainer:{
		padding:10,
	},
	block:{
		backgroundColor:'#fff',
		padding:10,
		marginBottom:10,
		borderRadius:10
	},
	submitBtn:{
		backgroundColor:'#ff5757',
		color:'#fff',
		fontSize:18,
		padding:10,
		textAlign:'center',
		borderRadius:8
	},
	heading:{
		fontSize:20,
		marginBottom:10
	},
	trainStation:{
		flexDirection:'row',
		justifyContent: 'space-between',
		alignItems:'center',
		padding:10,
	},
	subTitle:{
		fontSize:14
	},
	title:{
		fontSize:18,
		fontWeight:'bold'
	},
	stationInput:{
		width:100,
		paddingHorizontal:0,
		paddingVertical:5,
		fontSize:18
	},
	selectDate:{
		fontSize:20,
		textAlign:'right',
		fontWeight:'bold',
		color:'#ff5757'
	},
	dateList:{
		flexDirection:'row',
		gap:10
	},
	day:{
		paddingHorizontal:5,
		color:'#ff5757',
		backgroundColor:'#eee',
		borderRadius:5
	},
	journeyDate:{
		padding:5,
		marginRight:5,
		borderColor:'lightgrey',
		borderWidth:2,
		borderRadius:8
	},
	calender:{
		position:'absolute',
		zIndex:1000,
		top:30,
		right:0,
		bottom:0,
		left:0,
		padding:10,
		flexDirection:'column',
		justifyContent:'center',
		marginTop:30,
		backgroundColor:'#00000070'
	}
});