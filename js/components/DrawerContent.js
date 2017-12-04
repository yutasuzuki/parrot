import React, { Component } from 'react';
import { 
  Text, 
  View, 
  ListView,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Drawer from 'react-native-drawer';
import { Actions } from 'react-native-router-flux';
import style from '../styles';
import List from './List';

class DrawerContent extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps() {

  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    return (
      <View style={style.drawer.container}>
        <View style={style.drawer.header}>
          <Text style={style.drawer.headerLogo}>Parrot</Text>
        </View>
        <View>
          <View style={style.drawer.list}>
            <TouchableHighlight style={style.drawer.listRow}>
              <TouchableOpacity 
                style={style.drawer.listItem}
                onPress={Actions.evernote}
              >
                <View style={style.drawer.listIcon}>
                  <Text>■</Text>
                </View>
                <View style={style.drawer.listContent}>
                  <Text style={style.drawer.listText}>EVERNOTE Login</Text>
                </View>
              </TouchableOpacity>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}

export default DrawerContent;
