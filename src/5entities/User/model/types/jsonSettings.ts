import { type Theme } from '@/6shared/const/theme';

export interface JsonSettings {
  theme?: Theme;
  isFirstVisit?: boolean;
  isArticlesPageWasOpened?: boolean;
}
