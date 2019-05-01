import 'react-native';
import React from 'react';
import Table from '../../src/app/component/table';

import renderer from 'react-test-renderer';

describe('Table', () => {
  it('renders correctly', () => {
    renderer.create(<Table />);
  });
})