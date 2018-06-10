import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { logoutUser } from '../../_actions';

class AccountScreen extends Component {

	logout = () => {
    	this.props.logoutUser();
    	// @todo callback
    	this.props.navigation.navigate('Auth');
 	}

  	render() {
  		const { logoutUser } = this.props;
    	return (
      		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        		<Text>Settings!</Text>
        		<Button onPress={()=>this.logout()} title="logout" />
      		</View>
    	);
 	 }
}

export default connect(null, { logoutUser })(AccountScreen);