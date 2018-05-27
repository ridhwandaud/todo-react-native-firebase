import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
  StyleSheet, 
  View, 
  TouchableOpacity, 
  Text, 
  TouchableHighlight, 
  FlatList
} 
from 'react-native';
import CustomButton from '../../components/CustomButton';
import { todosFetch, todoCreate, logoutUser } from '../../_actions';
import ListItem from './ListItem';
import _ from 'lodash';
import Modal from './TodoCreateModal';

class HomeScreen extends Component {

  state = {
    isModalVisible: false,
    text: '',
  };

  static propTypes = {
    logout: PropTypes.func
  };

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return{
        title: 'Home',
        headerRight: (
          <TouchableOpacity onPress={() => params.todoCreate()} style={{ marginRight: 10, padding: 10, paddingVertical: 15 }}>
            <Text style={{ fontWeight: 'bold', color: '#fff' }}>
              Add
            </Text>
          </TouchableOpacity>
        )
    };
  };

  componentWillMount() {
    this.props.todosFetch();
  }

  componentDidMount() {
      this.props.navigation.setParams({ todoCreate: this.todoCreate });
  }

  todoCreate = () => {
    this.setState({ isModalVisible: true });
  }

  closeModal = () =>{
    this.setState({ isModalVisible: false });
  }

  createTask = () =>{

    this.setState({ isModalVisible: false });
    this.props.todoCreate(this.state.text);
  }

  onChangeText=(text) => {
    this.setState({text})
  }

  logout = () => {
    this.props.logoutUser();
    // @todo callback
    this.props.navigation.navigate('Auth');
  }

  render () {
    console.log('this.props.todos', this.props.todos);
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.todos}
          renderItem={
            ({item}) => 
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                <Text>{item.description}</Text>
              </View>
        }
        />
        <CustomButton
          text={'Logout'}
          onPress={()=> this.logout()}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
        />
        <Modal
          isModalVisible={this.state.isModalVisible}
          createTask={this.createTask}
          closeModal={this.closeModal}
          onChangeText={this.onChangeText}
          text={this.state.text}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  const todos = _.map(state.todos, (val, key) => {
    return { ...val, key};
  });
  console.log(todos);
  return { todos };
};

export default connect(mapStateToProps, { todosFetch, todoCreate, logoutUser }) (HomeScreen);

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
  },
})

