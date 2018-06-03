import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
  StyleSheet, 
  View, 
  TouchableOpacity, 
  Text, 
  TouchableHighlight, 
  FlatList,
  Alert
} 
from 'react-native';
import CustomButton from '../../components/CustomButton';
import { todosFetch, todoCreate, taskDelete, logoutUser } from '../../_actions';
import _ from 'lodash';
import CreateModal from './TodoCreateModal';
import DeleteModal from './TodoDeleteModal';
import { List, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class HomeScreen extends Component {

  state = {
    isModalVisible: false,
    isDeleteModalVisible: false,
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

    this.setState({ isModalVisible: false, text: '' });
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

  openDeleteTask = (uid) => {
    this.setState({ isDeleteModalVisible: true, taskDelete: uid });
  }

  closeDeleteModal = () =>{
    this.setState({ isDeleteModalVisible: false });
  }

  deleteTask = () => {
    this.setState({ isDeleteModalVisible: false, taskDelete: '' });
    this.props.taskDelete({ uid: this.state.taskDelete });
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.todos}
          renderItem={
            ({item}) => 
              <ListItem 
                title={item.description}
                hideChevron
                onPress={ () => this.openDeleteTask(item.uid) }
              />
          }
          ListEmptyComponent={() => <Text style={styles.emptyMessageStyle}>The list is empty</Text>  }
        />
        <CreateModal
          isModalVisible={this.state.isModalVisible}
          createTask={this.createTask}
          closeModal={this.closeModal}
          onChangeText={this.onChangeText}
          text={this.state.text}
        />
        <DeleteModal
          isDeleteModalVisible={this.state.isDeleteModalVisible}
          deleteTask={this.deleteTask}
          closeDeleteModal={this.closeDeleteModal}
          deleteTaskId={this.state.taskDelete}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  const todos = _.map(state.todos, (val, uid) => {
    return { ...val, uid};
  });
  return { todos };
};

export default connect(mapStateToProps, { todosFetch, todoCreate, taskDelete, logoutUser }) (HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#1976D2',
    margin: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  emptyMessageStyle: {
    textAlign: 'center',
    marginTop: 20,
  },
})

