import React from 'react';
import {Button} from 'react-native'
import Game from '../../src/app/component/game';
import Dice from '../../src/app/component/dice';
import Table from '../../src/app/component/table';
import MathHelper from '../../src/helpers/math';
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
	});

	describe('rolling', () => {
		it('renders a button', () => {
			expect(game.find(Button)).toHaveLength(1);
		})

		it('rolls the dice', () => {
			const mathMock = jest.spyOn(MathHelper, 'randomNumberRange')
			game.find(Button).props().onPress()

			expect(mathMock.mock.calls).toHaveLength(2);
		})
	});
})