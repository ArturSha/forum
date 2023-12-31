import { memo } from 'react';
import { classNames } from '@/6shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';
import { type ArticleCodeBlock } from '../../model/types/article';
import { Code } from '@/6shared/ui/redesigned/Code';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
  (props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props;

    return (
      <div
        className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}
      >
        <Code text={block.code} />
      </div>
    );
  }
);
