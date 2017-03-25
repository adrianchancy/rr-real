import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { addToUserList } from '../actions';

mapStateToProps = (state) => ({ userList: state.userReducer.userList });

mapDispatchToProps = (dispatch) => ({
    addUserItem: (userItem) => {
        dispatch(addToUserList(userItem));
    },
}); //多於一個Action

class Home extends React.Component {
    state = {
        userItem: '',
    } // initiate value for state
    render() {
        const { userList, addUserItem } = this.props;
        const { userItem } = this.state;
        return(
            <View style={styles.container}>
                <TextInput style={styles.welcome} placeholder="Add User" onChangeText={(text) => this.setState({userItem: text})}/>
                <Button style={styles.welcome} onPress={() => {addUserItem(userItem);}} title="Add User"/>
                <Text>List</Text>
                <Text>{JSON.stringify(userList)}</Text>
            </View>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
    height: 60
  },
  instructions: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333333',
    marginBottom: 5,
    height: 60
  },
});
