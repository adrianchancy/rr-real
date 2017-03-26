import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';
import thunk from 'redux-thunk'
var ScrollableTabView = require('react-native-scrollable-tab-view');

import Page1 from './app/scenes/page1';
import { appReducer } from './app/reducers';
import Stab from './app/scenes/stab';
import { cleanUIState } from './app/actions';

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

const Scenes = Actions.create(
    <Scene key='root'>
        <Scene key='lists' tabs={false} type={ActionConst.REPLACE}>
            <Scene key='tab1' title="Add" component={Stab}></Scene>
            <Scene key='page1' title="Page1" component={Page1}></Scene>
        </Scene>
    </Scene>
);

const ConnectedRouter = connect()(Router);
const store = createStore(appReducer, applyMiddleware(thunk));

var unsubscribe = store.subscribe(() => {
  console.log(store.getState())
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={Scenes}/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('rr', () => App);
