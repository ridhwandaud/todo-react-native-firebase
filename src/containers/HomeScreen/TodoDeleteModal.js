import Modal from "react-native-modal";
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, TextInput } from 'react-native';


const IS_ANDROID = Platform.OS === 'android';
 
class TodoModal extends Component {
	render(){
		const { isDeleteModalVisible, deleteTask, closeDeleteModal } = this.props;
		return(
			<Modal 
	          isVisible={isDeleteModalVisible}
	          onBackdropPress={closeDeleteModal}
	        >
	          <View style={styles.modalContent}>
	            <Text
	              style={styles.title}
	            >
	              Delete task?
	            </Text>
	            <Text
	              style={styles.subTitle}
	            >
	              Are you sure you want to delete this task?
	            </Text>
	            <View style={styles.footer}>
	              <TouchableOpacity 
	                onPress={closeDeleteModal}
	                style={styles.left}
	              >
	                <Text
	                  style={styles.footerText}
	                >
	                  Cancel
	                </Text>
	              </TouchableOpacity>
	              <TouchableOpacity 
	                onPress={deleteTask}
	                style={styles.right}
	              >
	                <Text
	                  style={styles.footerText}
	                >
	                  Delete
	                </Text>
	              </TouchableOpacity>
	            </View>
	          </View>
	        </Modal>
		)
	}
}

const styles = StyleSheet.create({
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

export default TodoModal;