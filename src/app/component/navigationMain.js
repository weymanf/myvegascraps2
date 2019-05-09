import React, {Component} from 'react';
import 'react-native';
import Game from './game';
import Home from './home';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
	Home: {screen: Home},
	Game: {screen: Game},
});

export default createAppContainer(MainNavigator);