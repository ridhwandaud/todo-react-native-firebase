import React, { Component } from 'react';
import { View, Text, TextInput, Modal } from 'react-native';

class TodoCreate extends Component {
	
	constructor(props) {
    	super(props);
    	this.state = { text: 'Useless Placeholder', modalVisible: false };
  	}

  	setModalVisible(visible) {
    	this.setState({modalVisible: visible});
  	}

	render () {
		return (
			<View>
				<TextInput
			        style={{ height: 40, borderColor: 'gray', borderWidth: 1, witdh: 100 }}
			        onChangeText={(text) => this.setState({text})}
			        value={this.state.text}
			    />
			</View>	
		)	
	}
}

export default TodoCreate;