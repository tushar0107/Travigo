import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import { Home } from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Tours } from './src/pages/Tours';
import { Filtering } from './src/pages/Filtering';
import { Hotel } from './src/pages/Hotel';
import { Train } from './src/pages/Train';
import { Search } from './src/components/Search';
import { Bus } from './src/pages/Bus';

const Stack = createNativeStackNavigator();

const BackButton:Object = (title:String)=>{
  return(
    {
      headerTitle:title,
      headerTitleAlign:'center',
      headerLeft:()=><Pressable>
            <Image source={require('./src/assets/back-arrow.png')}/>
          </Pressable>
      ,
      headerRight:()=><Pressable android_ripple={{color:'#eee',borderless:true}} style={{width:50,height:50}}>
                                                                <Image source={require('./src/assets/search.png')} style={{width:30,margin:'auto',objectFit:'contain'}}/>
                                                              </Pressable>
    }
  )
}

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
    <StatusBar barStyle="default" translucent={false} />
    <Stack.Navigator initialRouteName='Home' screenOptions={{}}>
      <Stack.Group>
        <Stack.Screen name='Home' options={{headerShown:false}} component={Home}/>
        <Stack.Screen name='Tours' options={{headerShown:false}} component={Tours}/>
        <Stack.Screen name='Hotel' options={{headerShown:false}} component={Hotel}/>
        <Stack.Screen name='Trains' options={{headerShown:false}} component={Train}/>
        <Stack.Screen name='Buses' options={{headerShown:false}} component={Bus}/>
      </Stack.Group>
      <Stack.Group screenOptions={{presentation:'modal'}}>
        <Stack.Screen name='Filtering' options={{headerShown:false}} component={Filtering}/>
        <Stack.Screen name='Search' options={{headerShown:false}} component={Search}/>
      </Stack.Group>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
