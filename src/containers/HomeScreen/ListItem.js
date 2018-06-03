import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

class ListItem extends Component {

	onRowPress() {
		//Actions.employeeCreate({ employee: this.props.employee });
	}

	render(){
		const { item } = this.props;
		console.log('item',item);
		return(
			<ListItem 
				onPress={this.onRowPress.bind(this)}
				title={item.description}
			/>
		);
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

export default ListItem;