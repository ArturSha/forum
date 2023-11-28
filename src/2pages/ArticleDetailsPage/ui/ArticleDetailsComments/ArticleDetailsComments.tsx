import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { AddCommentForm } from '4features/addCommentForm';
import { CommentList } from '5entities/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from '6shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '6shared/ui/Stack';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { Text, TextSize } from '6shared/ui/Text';

interface ArticleDetailsCommentsProps {
  className?: string;
  id: string;
}

export const ArticleDetailsComments = memo(
  (props: ArticleDetailsCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useDispatch();

    const onSendComment = useCallback(
      (text: string) => {
        // @ts-expect-error временно
        dispatch(addCommentForArticle(text));
      },
      [dispatch]
    );

    useInitialEffect(() => {
      // @ts-expect-error временно
      dispatch(fetchCommentsByArticleId(id));
    });

    return (
      <VStack gap='16' className={classNames('', {}, [className])}>
        <Text size={TextSize.L} title={t('Комментарии')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </VStack>
    );
  }
);
