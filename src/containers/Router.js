import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Start from './Start';
import AuthScreen from './AuthScreen';
import HomeScreen from './HomeScreen';
import AccountScreen from './AccountScreen';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StartStack = createStackNavigator({ Start: Start });
const AuthStack = createStackNavigator({ AuthScreen: AuthScreen });
const AppStack = createBottomTabNavigator(
	{ 
		Home: HomeScreen,
		Account: AccountScreen,
	},
	{
		navigationOptions: ({ navigation }) => ({
	      	tabBarIcon: ({ focused, tintColor }) => {
		        const { routeName } = navigation.state;
		        let iconName;
		        if (routeName === 'Home') {
		          iconName = `ios-home${focused ? '' : '-outline'}`;
		        } else if (routeName === 'Account') {
		          iconName = `ios-person${focused ? '' : '-outline'}`;
		        }

	        	// You can return any component that you like here! We usually use an
	        	// icon component from react-native-vector-icons
	        	return <Ionicons name={iconName} size={25} color={tintColor} />;
      		},
    	}),
	    tabBarOptions: {
      		activeTintColor: '#1976D2',
      		inactiveTintColor: 'gray',
    	},
	}
);


export default createSwitchNavigator(
  {
  	Start: StartStack,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Start',
  }
);
