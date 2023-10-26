import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';
import { memo } from 'react';
import { ArticleDetails } from '5entities/Article';
import { useParams } from 'react-router-dom';

interface ArticleDetailsPageProps {
  className?: string;
  testId?: number;
}

const ArticleDetailsPage = ({ className = '' }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('article-details');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className={classNames(cls.articleDetailsPage, {}, [className])}>
        {t('Статья не найдена')}
      </div>
    );
  }
  return (
    <div className={classNames(cls.articleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
};
export default memo(ArticleDetailsPage);
