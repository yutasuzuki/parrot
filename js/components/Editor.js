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
import Modal from 'react-native-modalbox';
import SpeechModel from '../models/speech.model';
import style from '../styles';

export function random(min = 0, max = 100) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

class Editor extends Component {
  constructor (props) {
    super(props);
    const id = props.navigation.state.params.id;

    this.state = {
      id: null,
      title: '',
      text: '',
      created: '',
      notificationTimes: [60, 120, 180],
      settingModal: false,
    }
    this.isSave = false;

    if (id) {
      SpeechModel.getSpeech(id).then((response) => {
        const { id, title, text, notificationTimes, created } = response[0];
        this.setState({ id, title, text, notificationTimes, created });
      });
    }
  }

  onSaveHandler() {
    if (!this.state.title) return;
    this.isSave = true;
    Actions.pop();
  }
  
  async componentWillUnmount() {
    if (this.isSave) {
      await SpeechModel.createSpeech(this.state);
      const id = random();
      Actions.refresh({id});
    }
  }

  pop() {
    Actions.pop();
  }

  render() {
    let textSaveActive = { color: style.color.disabled };
    if (this.state.title) {
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
              <Text>Edit</Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor='#efb7bc'
              style={style.header.right}
              onPress={this.onSaveHandler.bind(this)}
            >
              <Text style={textSaveActive}>Save</Text>
            </TouchableHighlight>
          </View>
        </View>
        <KeyboardAvoidingView behavior="padding" style={style.editor.form}>
          <ScrollView style={style.editor.container}>
            <View style={style.editor.titleContainer}>
              <TextInput
                style={style.editor.title}
                placeholder='TITLE'
                multiline={true}
                onChangeText={(title) => this.setState({title})}
                editable={true}
                value={this.state.title}
              />
            </View>
            <View style={style.editor.textContainer}>
              <TextInput
                style={style.editor.text}
                placeholder='Awesome Speech...'
                multiline={true}
                onChangeText={(text) => this.setState({text})}
                editable={true}
                value={this.state.text}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        <TouchableHighlight 
          underlayColor='#efb7bc'
          onPress={() => this.refs.settingModal.open()}
          style={style.editor.btnSettingContainer}
        >
          <View style={style.editor.btnSetting}>
            <Text>
              <Icon name={'cog'} size={28} color={'#fff'} />
            </Text>
          </View>
        </TouchableHighlight>
        <Modal backdrop={false} position={'top'} ref={'settingModal'}>
          <EditorOption 
            notificationTimes={this.state.notificationTimes}
            changePicker={(notificationTimes) => {
              this.setState({notificationTimes});
            }}
          />
        </Modal>
      </View>
    )
  }
}

class EditorOption extends Component {
  constructor (props) {
    super(props);
    this.state = {
      notificationTimes: this.props.notificationTimes,
      timerMinites1: this.getMinites(this.props.notificationTimes[0]),
      timerSeconds1: this.getSeconds(this.props.notificationTimes[0]),
      timerMinites2: this.getMinites(this.props.notificationTimes[1]),
      timerSeconds2: this.getSeconds(this.props.notificationTimes[1]),
      timerMinites3: this.getMinites(this.props.notificationTimes[2]),
      timerSeconds3: this.getSeconds(this.props.notificationTimes[2])
    };
  }
  
  componentWillUnmount() {
    console.log('componentWillUnmount');
    console.log('this.props', this.props);
    this.props.changePicker(this.addTotalSeconds());
  }
  
  getMinites(value) {
    return Math.floor(value / 60);;
  }
    
  getSeconds(value) {
    return Math.floor(value % 60);;
  }
  
  addTotalSeconds() {
    const totalSeconds1 = this.state.timerMinites1 * 60 + this.state.timerSeconds1;
    const totalSeconds2 = this.state.timerMinites2 * 60 + this.state.timerSeconds2;
    const totalSeconds3 = this.state.timerMinites3 * 60 + this.state.timerSeconds3;
    return [
      totalSeconds1,
      totalSeconds2,
      totalSeconds3,
    ]
  }
  
  setTimePickerItem() {
    const items = [];
    for (let i = 0; i < 60; i++) {
      items.push(i)
    }
    return items;
  }

  createMinites() {
    return Array.from(new Array(60)).map((v, i) => i);
  }

  createSeconds() {
    return Array.from(new Array(12)).map((v, i) => i * 5);
  }

  render() {
    let pickerItemMinites = this.createMinites().map( (v, i) => {
      return <Picker.Item key={i} value={v} label={v.toString() + '分'} />
    });
        
    let pickerItemSeconds = this.createSeconds().map( (v, i) => {
      return <Picker.Item key={i} value={v} label={v.toString() + '秒'} />
    });
    return (
      <View>
        <View style={style.editor.headerSetting}>
          <View style={style.header.inner}>
            <TouchableHighlight
              underlayColor='#efb7bc'
              style={style.header.right}
            >
              <Text>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={style.editor.pickerContainer}>
          <View style={style.editor.pickerTitle}>
            <Text>タイマー１</Text>
          </View>
          <View style={style.editor.pickerColumn} >
            <Picker 
              selectedValue={this.state.timerMinites1}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ timerMinites1: itemValue});
              }}
              itemStyle={{height: 120}}
            >
              {pickerItemMinites}
            </Picker>
          </View>
          <View style={style.editor.pickerColumn}>
            <Picker
              selectedValue={this.state.timerSeconds1}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ timerSeconds1: itemValue});
              }}
              itemStyle={{height: 120}}
            >
              {pickerItemSeconds}
            </Picker>
          </View>
        </View>
        <View style={style.editor.pickerContainer}>
          <View style={style.editor.pickerTitle}>
            <Text>タイマー２</Text>
          </View>
          <View style={style.editor.pickerColumn} >
            <Picker 
              selectedValue={this.state.timerMinites2}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ timerMinites2: itemValue});
              }}
              itemStyle={{height: 120}}
            >
              {pickerItemMinites}
            </Picker>
          </View>
          <View style={style.editor.pickerColumn}>
            <Picker
              selectedValue={this.state.timerSeconds2}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ timerSeconds2: itemValue});
              }}
              itemStyle={{height: 120}}
            >
              {pickerItemSeconds}
            </Picker>
          </View>
        </View>
        <View style={style.editor.pickerContainer}>
          <View style={style.editor.pickerTitle}>
            <Text>タイマー３</Text>
          </View>
          <View style={style.editor.pickerColumn} >
            <Picker 
              selectedValue={this.state.timerMinites3}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ timerMinites3: itemValue});
              }}
              itemStyle={{height: 120}}
            >
              {pickerItemMinites}
            </Picker>
          </View>
          <View style={style.editor.pickerColumn}>
            <Picker
              selectedValue={this.state.timerSeconds3}
              onValueChange={(itemValue, itemIndex) => {
                this.setState({ timerSeconds3: itemValue});
              }}
              itemStyle={{height: 120}}
            >
              {pickerItemSeconds}
            </Picker>
          </View>
        </View>
      </View>
    )
  }
}

export default Editor;
