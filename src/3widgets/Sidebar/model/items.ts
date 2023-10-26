import { RoutePath } from '6shared/config/routeConfig/routeConfig';
import AboutIcon from '6shared/assets/icons/about.svg';
import MainIcon from '6shared/assets/icons/main.svg';
import ProfileIcon from '6shared/assets/icons/profile-20-20.svg';
import ArticleIcon from '6shared/assets/icons/article-20-20.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
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
  {
    path: RoutePath.profile,
    Icon: ProfileIcon,
    text: 'Профиль',
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    Icon: ArticleIcon,
    text: 'Статьи',
    authOnly: true,
  },
];
