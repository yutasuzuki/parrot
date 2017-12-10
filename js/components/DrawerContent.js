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
import Modal from 'react-native-modalbox';
import { Actions } from 'react-native-router-flux';
import style from '../styles';
import List from './List';

class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      madal: false
    }
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
            <View style={style.drawer.listItem}>
              <TouchableOpacity
                style={style.drawer.listRow}
                onPress={Actions.evernote}
              >
                <View style={style.drawer.listIcon}>
                  <Text><Icon name={'envelope'} size={20} color={'#fff'} /></Text>
                </View>
                <View style={style.drawer.listContent}>
                  <Text style={style.drawer.listText}>EVERNOTE Login</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={style.drawer.listItem}>
              <TouchableOpacity
                style={style.drawer.listRow}
                onPress={Actions.contact}
              >
                <View style={style.drawer.listIcon}>
                  <Text><Icon name={'envelope'} size={20} color={'#fff'} /></Text>
                </View>
                <View style={style.drawer.listContent}>
                  <Text style={style.drawer.listText}>Contact</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Modal backdrop={false} position={'bottom'} ref={'contactModal'}>
          <View style={style.contact.container}>
            <View style={style.editor.headerSetting}>
              <View style={style.header.inner}>
                <TouchableHighlight
                  underlayColor='#efb7bc'
                  style={style.header.left}
                  onPress={() => Actions.pop()}
                >
                  <Text>Close</Text>
                </TouchableHighlight>
              </View>
            </View>
            <View style={style.editor.pickerContainer}>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

export default DrawerContent;
