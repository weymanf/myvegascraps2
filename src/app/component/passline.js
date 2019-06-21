import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

const VIEW_STYLE = {
	// marginLeft: 10,
	// marginTop: 10,
	// marginBottom: 10,
	backgroundColor: 'white',
	alignItems: 'center',
	justifyContent: 'center',
	flex: 1
}

export default class Passline extends Component {
	render() {
		const { onBet, passlineBets, currentPlayer} = this.props;
		return (
			<View style={{ flex: 1, marginLeft: 10, marginTop: 10, marginBottom: 10 }}>
				<TouchableHighlight {...{
					style: { flex: 1 },
					onPress: () => { onBet(5, 'passline') }
				}}>
					<View style={VIEW_STYLE} className="passline">
						<Text {...{
							style: { position: 'absolute', top: 0},
							className: 'passline-bet'
						}}>{passlineBets[currentPlayer]}</Text>
						{'PASSLINE'.split('').map((text, i) => {
							return <Text key={i} style={{ transform: [{ rotate: '90deg' }] }}>{text}</Text>
						})}
					</View>
				</TouchableHighlight>
			</View>)
	}
}