import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Button, Dimensions} from 'react-native';
import Orientation from 'react-native-orientation';
import Table from './table';
import Dice from './dice';
import MathHelper from '../../helpers/math';

export default class Game extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dices: [MathHelper.randomNumberRange(1,6), MathHelper.randomNumberRange(1,6)],
			on: false
		}
	}

	componentDidMount() {
		Orientation.lockToLandscape();
	}

	render() {
		const {dices} = this.state;
		const deviceWidth = Dimensions.get("window").width;
		const deviceHeight = Dimensions.get("window").height;

		return (
			<View style={{flex: 1, flexDirection: 'row'}}>
				<View style={{width: deviceWidth / 5, backgroundColor: 'powderblue', flexDirection: 'row'}}>
					{dices.map((value, i) => {
						return <Dice {...{value, key: i}}></Dice>
					})}
				</View>
				<Table style={{flex: 2}}></Table>
			</View>
		)
	}
}