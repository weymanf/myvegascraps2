/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {Provider} from 'react-redux';
import MainNavigator from './src/app/component/navigationMain'
import configureStore from './src/app/store/configureStore';

const store = configureStore();

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<MainNavigator></MainNavigator>
			</Provider>
		);
	}
}