import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/6shared/lib/classNames/classNames';
import cls from './ArticleAdditionalInfo.module.scss';
import { type User } from '@/5entities/User';
import { HStack, VStack } from '@/6shared/ui/redesigned/Stack';
import { Avatar } from '@/6shared/ui/redesigned/Avatar';
import { Text } from '@/6shared/ui/redesigned/Text';
import { Button } from '@/6shared/ui/redesigned/Button';

interface ArticleAdditionalInfoProps {
  className?: string;
  author: User;
  createdAt: string;
  views: number;
  onEdit: () => void;
}

export const ArticleAdditionalInfo = memo(
  (props: ArticleAdditionalInfoProps) => {
    const { className, author, createdAt, views, onEdit } = props;
    const { t } = useTranslation();

    return (
      <VStack
        gap='32'
        className={classNames(cls.ArticleAdditionalInfo, {}, [className])}
      >
        <HStack gap='8'>
          <Avatar src={author.avatar} size={32} />
          <Text text={author.username} bold />
          <Text text={createdAt} />
        </HStack>
        <Button onClick={onEdit}>{t('Редактировать')}</Button>
        <Text text={t('{{count}} просмотров', { count: views })} />
      </VStack>
    );
  }
);
