import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  WebView
} from 'react-native';
import style from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

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

  pop() {
    Actions.pop();
  }

  render() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <style>
      .content {
        padding-top: 120px;
      }
      </style>
    </head>
    <body>
      <div class='content'>ほげー</div>
    </body>
    </html>
    `
    return (
      <View style={style.base.container}>
        <View style={style.header.container}>
          <View style={style.header.inner}>
            <TouchableHighlight
              underlayColor='#efb7bc'
              style={style.header.left}
              onPress={this.pop.bind(this)}
            >
              <Icon name={'chevron-left'} size={20} color={style.color.primary} />
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor='#f6f6f6'
              style={style.header.timer}
            >
              <Text>Edit</Text>
            </TouchableHighlight>
          </View>
        </View>
        <WebView 
          source={{ html }}
        />
      </View>
    )
  }
}

export default Editable;
