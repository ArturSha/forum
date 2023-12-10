import { type EntityState } from '@reduxjs/toolkit';
import { type Comment } from '@/5entities/Comment';

export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
  isLoading?: boolean;
  error?: string | unknown;
}
