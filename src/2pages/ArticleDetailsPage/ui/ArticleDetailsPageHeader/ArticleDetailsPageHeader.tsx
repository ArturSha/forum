import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from '@/6shared/ui/deprecated/Button';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { getArticleDetailsData } from '@/5entities/Article';
import { HStack } from '@/6shared/ui/redesigned/Stack';
import { getCanEditArticle } from '../../model/selectors/article';
import { getRouteArticleEdit, getRouteArticles } from '@/6shared/const/router';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const onBackToList = useCallback(() => {
      navigate(getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
      if (article) {
        navigate(getRouteArticleEdit(article.id));
      }
    }, [article, navigate]);

    return (
      <HStack max justify='between' className={classNames('', {}, [className])}>
        <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
          {t('Назад к списку')}
        </Button>
        {canEdit && (
          <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
            {t('Редактировать')}
          </Button>
        )}
      </HStack>
    );
  }
);
