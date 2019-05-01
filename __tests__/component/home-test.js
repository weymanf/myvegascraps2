import {Text} from 'react-native';
import React from 'react';
import Home from '../../src/app/component/home'

import renderer from 'react-test-renderer';

describe('Home', () => {
  let home;

  beforeEach(() => {
    const render = renderer.create(<Home {...{value: 6}}/>);
    home = render.root;
  })

  it('renders the welcome text', () => {
		const text = home.findAllByType(Text)[0]
    expect(text.props.children).toEqual('Welcome to Craps')
  });
})