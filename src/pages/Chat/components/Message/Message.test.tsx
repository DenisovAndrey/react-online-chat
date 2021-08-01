import React from 'react';
import { queryByTestId, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {IMessageProps, Message} from './Message';
import IMessage from "../../interfaces/IMessage";

const message: IMessage = {
	user: {
		uid: 'testUID',
		avatar: null,
		displayName: 'test name',
	},
	text: 'testText',
	createdAt: null,
	uid: 'testUID',
};

beforeEach(() => {
	render(<Message message={message} />);
});

describe('UserPreview content', () => {
	it('should have message text', () => {
		expect(screen.getByText('testText')).toBeInTheDocument();
	});

	it('should have userPreview', () => {
		expect(screen.getByText('test name')).toBeInTheDocument();
	});
});
