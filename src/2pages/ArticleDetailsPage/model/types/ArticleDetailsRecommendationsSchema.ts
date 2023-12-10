import { type EntityState } from '@reduxjs/toolkit';
import { type Article } from '@/5entities/Article';

export interface ArticleDetailsRecommendationsSchema
  extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
}
