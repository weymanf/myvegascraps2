import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Button, Dimensions } from 'react-native';
import Orientation from 'react-native-orientation';
import Table from './table';
import Dice from './dice';
import PlayerInfo from './playerInfo';
import Passline from './passline';
import MathHelper from '../../helpers/math';
import uuid from 'uuid';

export default class Game extends Component {
	constructor(props) {
		super(props);
		const guestPlayerId = uuid.v4();

		this.state = {
			dices: [MathHelper.randomNumberRange(1, 6), MathHelper.randomNumberRange(1, 6)],
			on: false,
			players: {[guestPlayerId]: {name: 'Thomas Shelby', money: 10000}},
			currentPlayer: guestPlayerId
		}
	}

	componentDidMount() {
		Orientation.lockToLandscape();
	}

	rollDice = () => {
		this.setState({ dices: [MathHelper.randomNumberRange(1, 6), MathHelper.randomNumberRange(1, 6)] })
	}

	render() {
		const {dices, currentPlayer, players} = this.state;
		const deviceWidth = Dimensions.get("window").width;
		const deviceHeight = Dimensions.get("window").height;

		return (
			<View style={{ flex: 1, flexDirection: 'row' }}>
				<View style={{ width: deviceWidth / 5, backgroundColor: 'powderblue', flexDirection: 'column' }}>
					<Button {...{
						onPress: this.rollDice,
						title: 'Roll Baby'
					}} />
					<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
						{dices.map((value, i) => {
							return <Dice {...{ value, key: i}}></Dice>
						})}
					</View>
					<PlayerInfo {...{
						player: players[currentPlayer]
					}}/>
				</View>
				<Table style={{ flex: 2 }}>
					<Passline></Passline>
					<View style={{flex: 10}}/> 
				</Table>
			</View>
		)
	}
}