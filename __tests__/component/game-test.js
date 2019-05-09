import React from 'react';
import Game from '../../src/app/component/game';
import Dice from '../../src/app/component/dice';
import Table from '../../src/app/component/table';
import {shallow} from 'enzyme'

jest.mock('react-native-orientation', () => {
	return {
		lockToLandscape: jest.fn()
	}
})

describe('Game', () => {
	let game;

	beforeEach(() => {
		game = shallow(<Game />);
	})

	it('renders a table', () => {
		expect(game.find(Table)).toHaveLength(1);
	});

	it('renders dices', () => {
		expect(game.find(Dice)).toHaveLength(2);
	})
})