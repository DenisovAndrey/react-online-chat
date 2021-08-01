import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {UserPreview} from "./UserPreview";
import IUser from "../../../../modules/Chat/interfaces/IUser";
import {Avatar} from "@material-ui/core";

const user: IUser = {
	uid: 'testUID',
	avatar: null,
	displayName: 'test name',
};

beforeEach(() => {
	render(<UserPreview {...user} />)
});

describe('UserPreview content', () => {
	it('should have user name', () => {
		expect(screen.getByText('test name')).toBeInTheDocument();
	});

	it('should have default avatar', () => {
		expect(screen.getByTestId('defaultAvatar')).toBeInTheDocument();
	});

	it('should have user avatar', () => {
		user.avatar = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
		render(<UserPreview {...user} />)
		expect(screen.getByTestId('customAvatar')).toBeInTheDocument();
	});
});
