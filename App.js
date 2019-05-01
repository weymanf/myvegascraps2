/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Table from './src/app/component/table'
import Home from './src/app/component/home'
import {createStackNavigator, createAppContainer} from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const MainNavigator = createAppContainer(createStackNavigator({
	Home: {screen: Home},
	Table: {screen: Table},
}));

export default class App extends Component {
  render() {
    return (
      <MainNavigator></MainNavigator>
    );
  }
}