import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Table extends Component {
	render() {
		return (
			<View style={{ display: 'flex', flex: 1, backgroundColor: 'red' }}>
				<Text style={{textAlign: 'center', fontSize: 20}}>WTF is going on</Text>
			</View>
		)
	}
}