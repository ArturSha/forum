import { memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import ListIconDeprecated from '@/6shared/assets/icons/list-24-24.svg';
import TiledIconDeprecated from '@/6shared/assets/icons/tiled-24-24.svg';

import ListIcon from '@/6shared/assets/icons/burger.svg';
import TiledIcon from '@/6shared/assets/icons/tile.svg';

import { Icon as IconDeprecated } from '@/6shared/ui/deprecated/Icon';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/6shared/ui/deprecated/Button';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/5entities/Article';
import { ToggleFeatures, toggleFeatures } from '@/6shared/lib/features';
import { Icon } from '@/6shared/ui/redesigned/Icon';
import { Card } from '@/6shared/ui/redesigned/Card';
import { HStack } from '@/6shared/ui/redesigned/Stack';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => TiledIcon,
      off: () => TiledIconDeprecated,
    }),
  },
  {
    view: ArticleView.BIG,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ListIcon,
      off: () => ListIconDeprecated,
    }),
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Card
          className={classNames(cls.ArticleViewSelectorRedesigned, {}, [
            className,
          ])}
          border='round'
        >
          <HStack gap='8'>
            {viewTypes.map((viewType) => (
              <Icon
                key={viewType.view}
                clickable
                onClick={onClick(viewType.view)}
                Svg={viewType.icon}
                className={classNames('', {
                  [cls.notSelected]: viewType.view !== view,
                })}
              />
            ))}
          </HStack>
        </Card>
      }
      off={
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
          {viewTypes.map((viewType) => (
            <ButtonDeprecated
              key={viewType.view}
              theme={ButtonTheme.CLEAR}
              onClick={onClick(viewType.view)}
            >
              <IconDeprecated
                width={24}
                height={24}
                Svg={viewType.icon}
                className={classNames('', {
                  [cls.notSelected]: viewType.view !== view,
                })}
              />
            </ButtonDeprecated>
          ))}
        </div>
      }
    />
  );
});
