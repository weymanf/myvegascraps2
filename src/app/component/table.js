import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Table extends Component {
	render() {
		const {style} = this.props;

		return (
			<View style={{flex: 1, backgroundColor: 'red', ...style}}>
				<Text style={{textAlign: 'center', fontSize: 20}}>WTF is going on</Text>
			</View>
		)
	}
}