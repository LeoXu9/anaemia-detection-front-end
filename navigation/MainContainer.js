import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

//Screen names
const homeName = 'Home';
const detailsName = 'Camera'; // changed
const settingsName = 'Login'; // changed

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;
                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === detailsName) {
                        iconName = focused ? 'camera' : 'camera-outline';
                    } else if (rn === settingsName) {
                        iconName = focused ? 'log-in' : 'log-in-outline';
                    } 

                    return <Ionicons name={iconName} size={size} color={color}/>
                }, 
            })}
            tabBarOptions={{
                activeTintColor: '#bbffaa',
                inactiveTintColor: 'grey',
                labelStyle: { paddingBottom:10, fontSize: 10 },
                style: {padding:10, height:70}
            }}
            >

            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={detailsName} component={DetailsScreen}/>
            <Tab.Screen name={settingsName} component={SettingsScreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}