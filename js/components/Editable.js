import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import style from '../styles';

class Editable extends Component {
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
        <Text>Editable!!!</Text>
      </View>
    )
  }
}

export default Editable;
