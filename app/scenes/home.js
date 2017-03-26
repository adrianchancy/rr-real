import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import NavigationBar from 'react-native-navbar';

import { addToUserList, cleanUIState } from '../actions';


mapStateToProps = (state) => ({ userList: state.userReducer.userList, textinput: state.uiReducer.textinput });

mapDispatchToProps = (dispatch) => ({
    addUserItem: (userItem) => {
        dispatch(addToUserList(userItem));
    },
    cleanUIState: () => {
        dispatch(cleanUIState());
    },
}); //多於一個Action

const rightButtonConfig = {
  title: 'Next'
};

const titleConfig = {
  title: 'Hello, world',
};

function ComponentWithNavigationBar() {
  return (
    <View style={styles.nav}>
      <NavigationBar
        title={titleConfig}
        rightButton={rightButtonConfig}
      />
    </View>
  );
}

class Home extends React.Component {
    state = {
        userItem: '',
    } // initiate value for state
    render() {
        const { userList, addUserItem, cleanUIState, textinput } = this.props;
        const { userItem } = this.state;
        return(
            <View style={styles.main}>
            <ComponentWithNavigationBar/>
            <View style={styles.container}>
                <TextInput style={styles.welcome} placeholder="Add User" value={textinput} onChangeText={(text) => this.setState({userItem: text})}/>
                <Button style={styles.welcome} onPress={() => {addUserItem(userItem);}} title="Add User"/>
                  <Button style={styles.welcome} onPress={() => {cleanUIState()}} title="Clean UI State"/>
                <Text>List</Text>
                <Text>{JSON.stringify(userList)}</Text>
                <TouchableHighlight onPress={Actions.page1}><Text>To Page 2</Text></TouchableHighlight>
            </View></View>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  nav: {
    flex: 1,
  },
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
