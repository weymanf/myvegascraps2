import React from 'react';
import { Text, Button } from 'react-native';
import Home from '../../src/app/component/home'
import {mount} from 'enzyme';

jest.mock('react-native-orientation', () => {
	return {
		unlockAllOrientations: jest.fn()
	}
})

describe('Home', () => {
	let home, navigateSpy;

	beforeEach(() => {
		navigateSpy = jest.fn()
		home = mount(<Home {...{
			value: 6, navigation: { navigate: navigateSpy }
		}} />);
	})

	it('renders the welcome text', () => {
		const text = home.find(Text)
		expect(text.first().text()).toEqual('Welcome to Craps')
	});

	describe('buttons to navigate', () => {
		it('navigates to the table', () => {
			const button = home.find(Button);
			expect(button.text()).toEqual('Lets ROLL BABY');
			button.props().onPress()

			expect(navigateSpy.mock.calls.length).toEqual(1);
			expect(navigateSpy.mock.calls[0][0]).toEqual('Game');
		})
	});
})