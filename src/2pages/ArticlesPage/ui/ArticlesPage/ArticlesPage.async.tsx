import { lazy } from 'react';

export const ArticlesPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      // @ts-expect-error для курса задержка ответа от сервера
      setTimeout(() => resolve(import('./ArticlesPage')), 400);
    })
);
