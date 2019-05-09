import React from 'react';
import Dice from '../../src/app/component/dice'
import {shallow} from 'enzyme'

describe('Dice', () => {
  let dice;

  beforeEach(() => {
		dice = shallow(<Dice {...{value: 6}}/>);
  })

  it('renders correctly', () => {
    expect(dice.find('.dice-value').props().children).toEqual(6);
  });
})