import { lazy, Suspense } from 'react';
import { Skeleton } from '@/6shared/ui/Skeleton/Skeleton';
import { type ArticleRatingProps } from './ArticleRating';

const ArticleRatingLazy = lazy(async () => await import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
  return (
    <Suspense fallback={<Skeleton width='100%' height={140} />}>
      <ArticleRatingLazy {...props} />
    </Suspense>
  );
};
