import React, {Component} from 'react';
import 'react-native';
import Table from './table';
import Home from './home';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
	Home: {screen: Home},
	Table: {screen: Table},
});

export default createAppContainer(MainNavigator);