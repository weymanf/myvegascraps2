import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, Button } from 'react-native'
import Orientation from 'react-native-orientation'

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

export default class Home extends Component {
	componentDidMount() {
		Orientation.unlockAllOrientations();
	}
 
	navigateToCraps = () => {
		const {navigation: {navigate}} = this.props;
		navigate('Game');
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome to Craps</Text>
				<Text style={styles.instructions}>{instructions}</Text>
				<Button {...{
					onPress: this.navigateToCraps,
					title: 'Lets ROLL BABY',
					color: '#841584',
				}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});