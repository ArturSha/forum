import { getUserAuthData } from '@/5entities/User';
import { createSelector } from '@reduxjs/toolkit';
import AboutIcon from '@/6shared/assets/icons/about.svg';
import MainIcon from '@/6shared/assets/icons/main.svg';
import ProfileIcon from '@/6shared/assets/icons/profile-20-20.svg';
import ArticleIcon from '@/6shared/assets/icons/article-20-20.svg';
import { type SidebarItemType } from '../types/sidebar';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/6shared/const/router';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: MainIcon,
      text: 'Главная',
    },
    {
      path: getRouteAbout(),
      Icon: AboutIcon,
      text: 'О сайте',
    },
  ];
  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: ArticleIcon,
        text: 'Статьи',
        authOnly: true,
      }
    );
  }
  return sidebarItemsList;
});
