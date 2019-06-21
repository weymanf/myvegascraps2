import React from 'react'
import {TouchableHighlight} from 'react-native';
import {mount} from 'enzyme'
import Passline from '../../src/app/component/passline';

describe('Passline', () => {
	let subject, onBet;
	const currentPlayer = 'some-guid'

	beforeEach(() => {
		onBet = jest.fn()
		subject = mount(<Passline {...{onBet, currentPlayer, passlineBets: {
			[currentPlayer]: 15
		}}}/>)
	})

	it('shows the title', () => {
		expect(subject.find('.passline').hostNodes().text()).toContain('PASSLINE')
	})

	it('shows how much the user has betted', () => {
		expect(subject.find('.passline-bet').hostNodes().text()).toEqual('15')
	})

	it('allows you to place bets', () => {
		 const callback = subject.find(TouchableHighlight).props().onPress;
		 callback()
		 expect(onBet).toHaveBeenCalledWith(5, 'passline')
	})
})