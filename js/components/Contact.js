import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Picker,
  TouchableHighlight,
  KeyboardAvoidingView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import Constants from '../Constants'
import axios from 'axios';
import style from '../styles';


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  pop() {
    Actions.pop();
  }

  send() {
    const text = `メッセージがありんす！
    --- Message ---
    ${this.state.text}
    `;
    const query = Object.assign({}, Constants.CONTACT.query, {text})
    axios.post(Constants.CONTACT.url, query)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    let textSaveActive = { color: style.color.disabled };
    if (this.state.text) {
      textSaveActive = { color: style.color.primary };
    }

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
              <Text>Contact</Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor='#efb7bc'
              style={style.header.right}
              onPress={this.send.bind(this)}
            >
              <Text style={textSaveActive}>Send</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={style.editor.form}>
          <View>
            <View></View>
          </View>
          <ScrollView style={style.editor.container}>
            <View style={style.editor.textContainer}>
              <TextInput
                style={style.editor.text}
                placeholder=''
                multiline={true}
                onChangeText={(text) => this.setState({ text })}
                editable={true}
                value={this.state.text}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default Contact;
