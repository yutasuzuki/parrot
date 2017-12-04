import React, { Component } from 'react';
import {
  Scene,
  Router,
} from 'react-native-router-flux';
import Main from './components/Main';
import Editor from './components/Editor';
import Slide from './components/Slide';
import Editable from './components/Editable';
import Evernote from './components/Evernote';

export default class Route extends Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene hideNavBar={true} key='main' component={Main} initial />
          <Scene hideNavBar={true} key='editor' component={Editor} />
          <Scene hideNavBar={true} key='slide' component={Slide} />
          <Scene hideNavBar={true} key='editable' component={Editable} />
          <Scene hideNavBar={true} key='evernote' note component={Evernote} />
        </Scene>
      </Router>
    );
  }
}
