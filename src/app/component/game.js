import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Button, Dimensions} from 'react-native';
import Orientation from 'react-native-orientation';
import Table from './table';

export default class Game extends Component {
	componentDidMount() {
		Orientation.lockToLandscape();
		
		this.state = {
			dice: null
		}
	}

	render() {
		const deviceWidth = Dimensions.get("window").width;
		const deviceHeight = Dimensions.get("window").height;

		return (
			<View style={{flex: 1}}>
				<View style={{width: deviceWidth, height: deviceHeight / 10, backgroundColor: 'powderblue'}}>
					<Text>The beginning of something beautiful</Text>
				</View>
				<Table style={{flex: 2}}></Table>
			</View>
		)
	}
}