import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      // @ts-expect-error псевдо задержка
      setTimeout(() => resolve(import('./ArticleDetailsPage')), 400);
    })
);
