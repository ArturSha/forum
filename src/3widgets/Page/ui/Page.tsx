import {
  memo,
  type MutableRefObject,
  type ReactNode,
  type UIEvent,
  useRef,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { useInfiniteScroll } from '@/6shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUIScrollByPath, uiActions } from '@/4features/UI';
import { useInitialEffect } from '@/6shared/lib/hooks/useInitialEffect/useInitialEffect';
import { type StateSchema } from '@/1app/providers/StoreProvider';
import { useThrottle } from '@/6shared/lib/hooks/useThrottle/useThrottle';
import cls from './Page.module.scss';
import { type TestProps } from '@/6shared/types/tests';
import { toggleFeatures } from '@/6shared/lib/features';

interface PageProps extends TestProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) =>
    getUIScrollByPath(state, pathname)
  );

  useInfiniteScroll({
    triggerRef,

    wrapperRef: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => undefined,
      off: () => wrapperRef,
    }),
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      uiActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: pathname,
      })
    );
  }, 500);

  return (
    <main
      ref={wrapperRef}
      className={classNames(
        toggleFeatures({
          name: 'isAppRedesigned',
          on: () => cls.PageRedesigned,
          off: () => cls.Page,
        }),
        {},
        [className]
      )}
      onScroll={onScroll}
      id={PAGE_ID}
      data-testid={props['data-testid'] ?? 'Page'}
    >
      {children}
      {onScrollEnd ? <div className={cls.trigger} ref={triggerRef} /> : null}
    </main>
  );
});
