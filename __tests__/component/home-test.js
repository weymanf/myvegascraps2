import { Text, Button } from 'react-native';
import React from 'react';
import Home from '../../src/app/component/home'
import renderer from 'react-test-renderer';

jest.mock('react-native-orientation', () => {
	return {
		unlockAllOrientations: jest.fn()
	}
})

describe('Home', () => {
	let home, navigateSpy;

	beforeEach(() => {
		navigateSpy = jest.fn()
		const render = renderer.create(<Home {...{
			value: 6, navigation: { navigate: navigateSpy }
		}
		} />);
		home = render.root;
	})

	it('renders the welcome text', () => {
		const text = home.findAllByType(Text)[0]
		expect(text.props.children).toEqual('Welcome to Craps')
	});

	describe('buttons to navigate', () => {
		it('navigates to the table', () => {
			const button = home.findByType(Button);
			expect(button.props.title).toEqual('Lets ROLL BABY');
			button.props.onPress();

			expect(navigateSpy.mock.calls.length).toEqual(1);
			expect(navigateSpy.mock.calls[0][0]).toEqual('Game');
		})
	});
})