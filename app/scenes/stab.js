import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

var ScrollableTabView = require('react-native-scrollable-tab-view');
import { cleanUIState } from '../actions';
import Home from './home';

mapStateToProps = (state) => ({ textinput: state.uiReducer.textinput });

mapDispatchToProps = (dispatch) => ({
    cleanUIState: () => {
        dispatch(cleanUIState());
    },
});

class Stab extends React.Component {
    render(){
        const { cleanUIState } = this.props;
        return (
          <ScrollableTabView tabBarPosition="bottom" onChangeTab={() => {cleanUIState()}}>
             <Home tabLabel="React" />
             <Home tabLabel="Flow" />
             <Home tabLabel="Jest" />
         </ScrollableTabView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stab);