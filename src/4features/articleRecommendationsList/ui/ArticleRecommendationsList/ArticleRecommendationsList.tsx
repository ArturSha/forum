import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from '5entities/Article';
import { VStack } from '6shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/aritcleRecommendationsApi';
import { Text, TextSize } from '6shared/ui/Text';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
      isLoading,
      data: articles,
      error,
    } = useArticleRecommendationsList(3);

    if (isLoading || error || !articles) {
      return null;
    }

    return (
      <VStack gap='8' className={classNames('', {}, [className])}>
        <Text size={TextSize.L} title={t('Рекомендуем')} />
        <ArticleList articles={articles} target='_blank' virtualized={false} />
      </VStack>
    );
  }
);
