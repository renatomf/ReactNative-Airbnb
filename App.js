import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';

//import LoggedOut from './src/screens/LoggedOut';
import LogIn from './src/screens/LogIn';


export default class App extends Component {
  render() {
    return <LogIn />
  }
}

