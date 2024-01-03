import { useTranslation } from 'react-i18next';
import { memo, useMemo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Select, type SelectOption } from '@/6shared/ui/deprecated/Select';
import { type SortOrder } from '@/6shared/types/sort';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '@/5entities/Article';
import { ToggleFeatures } from '@/6shared/lib/features';
import { ListBox } from '@/6shared/ui/redesigned/Popups';
import { VStack } from '@/6shared/ui/redesigned/Stack';
import { Text } from '@/6shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className, onChangeOrder, onChangeSort, order, sort } = props;
  const { t } = useTranslation();

  const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(
    () => [
      {
        value: 'asc',
        content: t('возрастанию'),
      },
      {
        value: 'desc',
        content: t('убыванию'),
      },
    ],
    [t]
  );

  const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('дате создания'),
      },
      {
        value: ArticleSortField.TITLE,
        content: t('названию'),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t('просмотрам'),
      },
    ],
    [t]
  );

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <div
          className={classNames(cls.ArticleSortSelectorRedesigned, {}, [
            className,
          ])}
        >
          <VStack gap='8'>
            <Text text={t('Сортировать по:')} />
            <ListBox
              items={sortFieldOptions}
              value={sort}
              onChange={onChangeSort}
            />
            <ListBox
              items={orderOptions}
              value={order}
              onChange={onChangeOrder}
            />
          </VStack>
        </div>
      }
      off={
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
          <Select<ArticleSortField>
            options={sortFieldOptions}
            label={t('Сортировать ПО')}
            value={sort}
            onChange={onChangeSort}
          />
          <Select
            options={orderOptions}
            label={t('по')}
            value={order}
            onChange={onChangeOrder}
            className={cls.order}
          />
        </div>
      }
    />
  );
});
