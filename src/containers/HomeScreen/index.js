import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, View, Button, Text } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { logoutUser } from '../../_actions';

class HomeScreen extends Component {

  static propTypes = {
    logout: PropTypes.func
  };

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return{
        title: 'Home',
        headerRight: <Button title="Add" color="#fff" onPress={() => params.todoCreate()}/>
    };
  };

  componentDidMount() {
      this.props.navigation.setParams({ todoCreate: this.todoCreate });
  }

  todoCreate = () => {
    this.props.navigation.navigate('TodoCreate');
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>
          Home
        </Text>
      </View>
    )
  }
}

export default connect(null, {logoutUser}) (HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#1976D2',
    margin: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})


// logout = () => {
  //   this.props.logoutUser();
  //   // @todo callback
  //   this.props.navigation.navigate('Auth');
  // }
