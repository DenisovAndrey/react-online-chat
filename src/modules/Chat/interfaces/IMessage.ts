import { FieldValue } from '@firebase/firestore-types';
import IUser from './IUser';

export default interface IMessage {
	uid: string;
	text: string;
	createdAt: FieldValue;
	user: IUser;
};
