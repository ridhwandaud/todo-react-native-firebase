import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import StartScreen from './Start';
import HomeScreen from './HomeScreen';
import TodoCreate from './HomeScreen/TodoCreate';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

const AuthStack = createStackNavigator({ StartScreen: StartScreen });
const AppStack = createStackNavigator(
	{ 
		Home: HomeScreen, 
		TodoCreate: TodoCreate 
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
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Auth',
  }
);
