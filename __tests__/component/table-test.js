import React from 'react';
import Table from '../../src/app/component/table';
import {shallow} from 'enzyme'

describe('Table', () => {
	let table;

	beforeEach(() => {
		table = shallow(<Table />);
	})

  it('renders a passline', () => {
	});

	it('it renders a don\'t passline', () => {
	});
})