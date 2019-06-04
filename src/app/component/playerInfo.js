import React from 'react'
import {View, Text} from 'react-native'

export default function PlayerInfo(props) {
	const {player: {name, money}} = props;

	return (
		<View className="player-info" style={{ marginTop: 10 }}>
			<Text style={{ textAlign: 'center', fontSize: 16, fontWeight: '600' }}>Player Info</Text>
			<Text className="player-name" style={{marginLeft: 16, fontSize: 16}}>Name: {name}</Text>
			<Text className="player-money" style={{marginLeft: 16, fontSize: 16}}>Money: {money}</Text>
		</View>
	);
};