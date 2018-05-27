import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
  StyleSheet, 
  View, 
  TouchableOpacity, 
  Text, 
  TouchableHighlight, 
  TextInput, 
  Platform,
  FlatList
} 
from 'react-native';
import Modal from "react-native-modal";
import CustomButton from '../../components/CustomButton';
import { todosFetch, todoCreate, logoutUser } from '../../_actions';
import ListItem from './ListItem';
import _ from 'lodash';

const IS_ANDROID = Platform.OS === 'android'

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
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({ isModalVisible: false })}
        >
          <View style={styles.modalContent}>
            <Text
              style={styles.title}
            >
              Enter task?
            </Text>
            <Text
              style={styles.subTitle}
            >
              Enter current task to do
            </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              underlineColorAndroid="transparent"
            />
            <View style={styles.footer}>
              <TouchableOpacity 
                onPress={this.closeModal}
                style={styles.left}
              >
                <Text
                  style={styles.footerText}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={this.createTask}
                style={styles.right}
              >
                <Text
                  style={styles.footerText}
                >
                  Ok
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
  modalContent: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
  },
  subTitle: {
    marginBottom: 15,
  },
  textInput: {
    borderColor: 'gray', 
    borderWidth: 1, 
    alignSelf: 'stretch',
    margin: IS_ANDROID ? -1 : 0,
    height: 42,
    padding: 7,
    marginHorizontal: 22,
    marginBottom: 15,
  },
  footer: {
    flexDirection: 'row',
  },
  left: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 16,
    borderColor: 'gray',
    borderTopWidth: 1,
    borderRightWidth: 1,
  },
  right: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 16,
    borderColor: 'gray',
    borderTopWidth: 1,
  },
  footerText: {
    color: '#5892eb',
    fontWeight: 'bold',
    fontSize: 20,
  }
})

