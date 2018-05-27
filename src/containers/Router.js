import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Start from './Start';
import AuthScreen from './AuthScreen';
import HomeScreen from './HomeScreen';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

const StartStack = createStackNavigator({ Start: Start });
const AuthStack = createStackNavigator({ AuthScreen: AuthScreen });
const AppStack = createStackNavigator(
	{ 
		Home: HomeScreen
	},
	{
		navigationOptions: {
	      headerStyle: {
	        backgroundColor: '#1976D2',
	      },
	      headerTintColor: '#fff',
	      headerTitleStyle: {
	        fontWeight: 'bold',
	      },
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
