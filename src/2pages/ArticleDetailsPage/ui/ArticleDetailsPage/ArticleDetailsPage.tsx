import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from '5entities/Article';
import { useParams } from 'react-router-dom';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className = '' }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>{t('Статья не найдена')}</div>;
  }
  return (
    <div>
      <ArticleDetails id={id} />
    </div>
  );
};
export default memo(ArticleDetailsPage);
