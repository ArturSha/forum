import { getUserAuthData } from '5entities/User';
import { createSelector } from '@reduxjs/toolkit';
import { RoutePath } from '6shared/config/routeConfig/routeConfig';
import AboutIcon from '6shared/assets/icons/about.svg';
import MainIcon from '6shared/assets/icons/main.svg';
import ProfileIcon from '6shared/assets/icons/profile-20-20.svg';
import ArticleIcon from '6shared/assets/icons/article-20-20.svg';
import { type SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: RoutePath.main,
      Icon: MainIcon,
      text: 'Главная',
    },
    {
      path: RoutePath.about,
      Icon: AboutIcon,
      text: 'О сайте',
    },
  ];
  if (userData) {
    sidebarItemsList.push(
      {
        path: RoutePath.profile + userData.id,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: 'Статьи',
        authOnly: true,
      }
    );
  }
  return sidebarItemsList;
});
