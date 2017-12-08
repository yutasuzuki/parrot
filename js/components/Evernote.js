import React, { Component } from 'react';
import {  
  Text, 
  View,
  WebView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import style from '../styles';

class EvernoteLogin extends Component {
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

  onPressButton() {
    this.refs.EvernoteLogin.postMessage("This is my land times");
  }

  onMessage(e) {
    const data = JSON.parse(e.nativeEvent.data);
    console.log(data);
  }

  render() {
    let html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Evernote Login</title>
          <meta name='viewport' content='width=device-width,initial-scale=1'>
          <style>
            @import url(https://fonts.googleapis.com/earlyaccess/notosansjapanese.css);
            * {
              font-family: 'Noto Sans Japanese';
              margin: 0;
              padding: 0;
              outline: 0;
              text-shadow: none;
              box-shadow: noen;
            }

            input[type=text],
            input[type=password] {
              font-size: 16px;
            }

            .btn-login {
              position: relative;
              display: inline-block;
              padding: 0.25em 0.5em;
              text-decoration: none;
              color: #FFF;
              background: #03A9F4;/*色*/
              border: solid 1px #0f9ada;/*線色*/
              border-radius: 4px;
              box-shadow: inset 0 1px 0 rgba(255,255,255,0.2);
              text-shadow: 0 1px 0 rgba(0,0,0,0.2);
            }

            .btn-login:active {
              border: solid 1px #03A9F4;
              box-shadow: none;
              text-shadow: none;
            }
          </style>
        </head>
        <body>
          <div id="content">
            <a href='/hoge'>This is my name</a>
          </div>
          <div>
            <div>
              <div>
                <input type='text' id='js-id'>
              </div>
              <div>
                <input type='password' id='js-password'>
              </div>
            </div>
            <div>
              <a id='js-login' class='btn-login'>LOGIN</a>
            </div>
          </div>
          <script>
            document.addEventListener('message', function(e) {
              document.getElementById('content').innerHTML = e.data;
            });
            const id = document.getElementById('js-id');
            const password = document.getElementById('js-password');
            const login = document.getElementById('js-login');
            login.addEventListener('click', function(e) {
              const data = JSON.stringify({
                type: 'login',
                id: id.value,
                password: password.value
              });
              window.postMessage(data);
            });
          </script>
        </body>
      <html>
    `;
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
              <Text>Evernote Login</Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor='#efb7bc'
              style={style.header.right}
              onPress={this.onPressButton.bind(this)}
            >
              <Text>確認</Text>
            </TouchableHighlight>
          </View>
        </View>

        <View
          style={style.list.container}
        >
          <WebView 
            source={{html}}
            ref="EvernoteLogin"
            javaScriptEnabledAndroid={true}
            onMessage={this.onMessage}
          />
        </View>
      </View>
    )
  }
}

export default EvernoteLogin;
