import React, { Component } from 'react'
import {View, Text} from 'react-native'

const VIEW_STYLE = {
	marginLeft: 10, 
	marginTop: 10, 
	marginBottom: 10, 
	backgroundColor: 'white',
	alignItems: 'center', 
	justifyContent: 'center',
	flex: 1
}

export default class Passline extends Component {
	render() {
		return (
			<View style={VIEW_STYLE}>
			  {'PASSLINE'.split('').map((text) => {
					return <Text style={{transform: [{rotate: '90deg'}]}}>{text}</Text>
				})}
			</View>
		)
	}
}