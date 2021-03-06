import React, { Component } from 'react';
import { View, Text } from 'react-native'

export default class Dice extends Component {
	render() {
		const { value, style = {} } = this.props;

		return (
			<View {...{
				style: {
					height: 50, width: 50,
					backgroundColor: 'white',
					borderWidth: 1,
					borderColor: 'black',
					...style
				}
			}} >
				<Text className="dice-value">{value}</Text>
			</ View>
		)
	}
}