import React, { Component } from 'react';
import {  
  Text, 
  View,
  WebView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import style from '../styles'

class Evernote extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps() {

  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  onPressButton() {
    this.refs.myWebView.postMessage("This is my land times");
  }

  onMessage(e) {
    const data = JSON.parse(e.nativeEvent.data)
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
              This is my name
          </div>
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
          <script>
            document.addEventListener('message', function(e) {
              document.getElementById('content').innerHTML = e.data;
            });
            const id = document.getElementById('js-id');
            const password = document.getElementById('js-password');
            const login = document.getElementById('js-login');
            login.addEventListener('click', function(e) {
              const data = JSON.stringify({
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
        <TouchableHighlight
          style={style.header.container}
          onPress={this.onPressButton.bind(this)}>
          <Text>Press me to increase click</Text>
        </TouchableHighlight>
        <View
          style={style.list.container}
        >
        <WebView 
          source={{html}}
          ref="myWebView"
          javaScriptEnabledAndroid={true}
          onMessage={this.onMessage}
        />
        </View>
      </View>
    )
  }
}

export default Evernote;
