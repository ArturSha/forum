import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/5entities/User';
import MainIconDeprecated from '@/6shared/assets/icons/main-20-20.svg';
import AboutIconDeprecated from '@/6shared/assets/icons/about-20-20.svg';
import ProfileIconDeprecated from '@/6shared/assets/icons/profile-20-20.svg';
import ArticleIconDeprecated from '@/6shared/assets/icons/article-20-20.svg';

import MainIcon from '@/6shared/assets/icons/home.svg';
import ArticleIcon from '@/6shared/assets/icons/article.svg';
import AboutIcon from '@/6shared/assets/icons/Info.svg';
import ProfileIcon from '@/6shared/assets/icons/avatar.svg';

import { type SidebarItemType } from '../types/sidebar';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/6shared/const/router';
import { toggleFeatures } from '@/6shared/lib/features';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => MainIconDeprecated,
        on: () => MainIcon,
      }),
      text: 'Главная',
    },
    {
      path: getRouteAbout(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => AboutIconDeprecated,
        on: () => AboutIcon,
      }),
      text: 'О сайте',
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ProfileIconDeprecated,
          on: () => ProfileIcon,
        }),
        text: 'Профиль',
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ArticleIconDeprecated,
          on: () => ArticleIcon,
        }),
        text: 'Статьи',
        authOnly: true,
      }
    );
  }

  return sidebarItemsList;
});
