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
import { Home } from './src/components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Tours } from './src/components/Tours';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
    <StatusBar barStyle="default" translucent={true} />
      <Stack.Navigator initialRouteName='Home' screenOptions={{}}>
        <Stack.Screen name='Home' options={{headerShown:false}} component={Home}/>
        <Stack.Screen name='Tours' options={
                                              {
                                                headerTitle:'Tours',
                                                headerTitleAlign:'center',
                                                headerLeft:()=><Pressable>
                                                                  <Image source={require('./src/assets/back-arrow.png')}/>
                                                                </Pressable>,
                                                headerRight:()=><Pressable android_ripple={{color:'#eee',borderless:true}} style={{width:50,height:50}}>
                                                                  <Image source={require('./src/assets/search.png')} style={{width:30,margin:'auto',objectFit:'contain'}}/>
                                                                </Pressable>}} component={Tours}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
