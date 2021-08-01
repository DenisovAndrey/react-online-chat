import { FC, ReactComponentElement } from 'react';
import { Routes } from './RoutesEnum';
import { Chat } from '../../../pages/Chat';
import { Main } from '../../../pages/Main';
import { Friends } from '../../../pages/Friends';
import { Topics } from '../../../pages/Topics';

export interface IRout {
	path: Routes;
	Component: FC<any>;
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
