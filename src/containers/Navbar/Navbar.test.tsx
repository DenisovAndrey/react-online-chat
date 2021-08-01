import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {Navbar} from './Navbar';
import {BrowserRouter,} from 'react-router-dom';

beforeEach(() => {
	render(
		<BrowserRouter>
			<Navbar/>
		</BrowserRouter>
	)
});

describe('Navbar content', () => {
	it('should have a logo', () => {
		expect(screen.getByTestId('logo')).toBeInTheDocument();
	});
});
