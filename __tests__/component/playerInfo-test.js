import React from 'react';
import { Text, Button } from 'react-native';
import PlayerInfo from '../../src/app/component/playerInfo';
import {mount} from 'enzyme';

describe('Player Info', () => {
		let playerInfo;

		beforeEach(() => {
			playerInfo = mount(<PlayerInfo {...{player: {id: 1, name: 'hot shooter', money: 1000}}}/>);
		});

		it('shows the player details', () => {
			expect(playerInfo.find('.player-name').hostNodes().text()).toEqual('Name: hot shooter')
			expect(playerInfo.find('.player-money').hostNodes().text()).toEqual('Money: 1000')
		});
});