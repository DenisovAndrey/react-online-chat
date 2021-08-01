import { FC, ReactComponentElement } from 'react';
import { Routes } from './RoutesEnum';
import { Chat } from '../../../modules/Chat';
import { Main } from '../../../containers/Mian';
import { Friends } from '../../../modules/Friends';
import { Topics } from '../../../modules/Topics';

export interface IRout {
	path: Routes;
	Component: FC<any>
}

export const publicRoutes: IRout[] = [
  {
    path: Routes.MAIN,
    Component: Main,
  },
];

export const privatRoutes: IRout[] = [
  {
    path: Routes.CHAT,
    Component: Chat,
  },
  {
    path: Routes.FRIENDS,
    Component: Friends,
  },
  {
    path: Routes.TOPICS,
    Component: Topics,
  },
  ...publicRoutes,
];
