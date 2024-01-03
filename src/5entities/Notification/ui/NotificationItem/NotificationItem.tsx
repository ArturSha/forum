import { memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import {
  Card as CardDeprecated,
  CardTheme,
} from '@/6shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/6shared/ui/deprecated/Text';
import { Text } from '@/6shared/ui/redesigned/Text';
import cls from './NotificationItem.module.scss';
import { type Notification } from '../../model/types/notification';
import { ToggleFeatures } from '@/6shared/lib/features';
import { Card } from '@/6shared/ui/redesigned/Card';

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item } = props;

  const content = (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={
        <Card className={classNames(cls.NotificationItem, {}, [className])}>
          <Text title={item.title} text={item.description} />
        </Card>
      }
      off={
        <CardDeprecated
          theme={CardTheme.OUTLINED}
          className={classNames(cls.NotificationItem, {}, [className])}
        >
          <TextDeprecated title={item.title} text={item.description} />
        </CardDeprecated>
      }
    />
  );

  if (item.href) {
    return (
      <a className={cls.link} target='_blank' href={item.href} rel='noreferrer'>
        {content}
      </a>
    );
  }

  return content;
});
