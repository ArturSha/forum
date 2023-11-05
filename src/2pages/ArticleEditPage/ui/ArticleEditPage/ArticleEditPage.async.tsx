import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      // @ts-expect-error псевдо задержка
      setTimeout(() => resolve(import('./ArticleEditPage')), 400);
    })
);
