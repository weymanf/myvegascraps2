import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Table extends Component {
	render() {
		const {style, children} = this.props;

		return (
			<View style={{flexDirection: 'row', backgroundColor: 'red', ...style}}>
				{children}
			</View>
		)
	}
}