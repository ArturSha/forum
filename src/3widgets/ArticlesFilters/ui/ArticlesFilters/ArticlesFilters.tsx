import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/6shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { Card } from '@/6shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/4features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/4features/ArticleTypeTabs';
import { VStack } from '@/6shared/ui/redesigned/Stack';
import { type ArticleSortField, type ArticleType } from '@/5entities/Article';
import { type SortOrder } from '@/6shared/types/sort';
import { Input } from '@/6shared/ui/redesigned/Input';
import SearchIcon from '@/6shared/assets/icons/search.svg';
import { Icon } from '@/6shared/ui/redesigned/Icon';

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  type: ArticleType;
  search: string;
  onChangeSearch: (value: string) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
  const {
    className,
    onChangeType,
    onChangeSearch,
    search,
    onChangeSort,
    sort,
    onChangeOrder,
    order,
    type,
  } = props;
  const { t } = useTranslation();

  return (
    <Card
      className={classNames(cls.ArticlesFilters, {}, [className])}
      padding='24'
    >
      <VStack gap='32'>
        <Input
          onChange={onChangeSearch}
          value={search}
          size='s'
          placeholder={t('Поиск')}
          addonLeft={<Icon Svg={SearchIcon} />}
        />
        <ArticleTypeTabs
          value={type}
          onChangeType={onChangeType}
          className={cls.tabs}
        />
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
      </VStack>
    </Card>
  );
});
