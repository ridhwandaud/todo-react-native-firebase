import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';
import { checkUserLogin } from '../_actions';

class Start extends Component{

	static navigationOptions = {
   	 	header: null,
  	}

  	componentWillMount(){
  		console.log('componentWillMount');
  		const { login, checkUserLogin } = this.props;
  		checkUserLogin(() => {
	      	this.props.navigation.navigate('App');
	    }, () => {
	    	console.log('no current user');
	    	this.props.navigation.navigate('Auth');
	    });
  	}

	render(){
		return (
			<View style={{ 
				flex: 1, 
				backgroundColor: '#fff', 
				flex: 1,
    			justifyContent: 'center',
    			alignItems: 'center' 
    		}}>
				<ActivityIndicator size="large" color="#1976D2" />
			</View>
		)
	}
}

export default connect(null, { checkUserLogin })(Start);