import { memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/6shared/ui/deprecated/Text';
import { Text } from '@/6shared/ui/redesigned/Text';
import cls from './ArticleTextBlockComponent.module.scss';
import { type ArticleTextBlock } from '../../model/types/article';
import { ToggleFeatures } from '@/6shared/lib/features';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;

    return (
      <div
        className={classNames(cls.ArticleTextBlockComponent, {}, [className])}
      >
        {block.title && (
          <ToggleFeatures
            feature='isAppRedesigned'
            on={<Text title={block.title} className={cls.title} />}
            off={<TextDeprecated title={block.title} className={cls.title} />}
          />
        )}
        {block.paragraphs.map((paragraph, index) => (
          // eslint-disable-next-line react/jsx-key
          <ToggleFeatures
            feature='isAppRedesigned'
            on={
              <Text
                key={paragraph}
                text={paragraph}
                className={cls.paragraph}
              />
            }
            off={
              <TextDeprecated
                key={paragraph}
                text={paragraph}
                className={cls.paragraph}
              />
            }
          />
        ))}
      </div>
    );
  }
);
