import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

class ListItem extends Component {

	onRowPress() {
		//Actions.employeeCreate({ employee: this.props.employee });
	}

	render(){
		const { name } = this.props.todos;

		return(
			<TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
				<View>
					<Text style={styles.titleStyle}>
						{name}
					</Text>	
				</View>
			</TouchableWithoutFeedback>
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