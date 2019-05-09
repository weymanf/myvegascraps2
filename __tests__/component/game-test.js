import 'react-native';
import React from 'react';
import Game from '../../src/app/component/game';
import Table from '../../src/app/component/table';

import renderer from 'react-test-renderer';

jest.mock('react-native-orientation', () => {
	return {
		lockToLandscape: jest.fn()
	}
})

describe('Game', () => {
	let game;

	beforeEach(() => {
		const render = renderer.create(<Game />);
		game = render.root;
	})

	it('renders a table', () => {
		expect(game.findAllByType(Table)).toHaveLength(1);
	});
})