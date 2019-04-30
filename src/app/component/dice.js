import React, {Component} from 'react';
import {View, Text} from 'react-native'

export default class Dice extends Component {
    render() {
        const {value} = this.props;

        return (
            <View>
                <Text className="dice-value">{value}</Text>
            </View>
        )
    }
}