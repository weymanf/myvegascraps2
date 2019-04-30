import 'react-native';
import React from 'react';
import Dice from '../../src/app/component/dice'

import renderer from 'react-test-renderer';

describe('App', () => {
  let dice;

  beforeEach(() => {
    const render = renderer.create(<Dice {...{value: 6}}/>);
    dice = render.root;
  })

  it('renders correctly', () => {
    expect(dice.findByProps({className: 'dice-value'}).props.children).toEqual(6);
  });
})