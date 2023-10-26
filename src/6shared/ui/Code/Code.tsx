import { classNames } from '6shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from '../Button/ui/Button';
import CopyIcon from '6shared/assets/icons/copy-20-20.svg';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: CodeProps) => {
  const { text, className } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Button
        onClick={onCopy}
        className={cls.copyBtn}
        theme={ButtonTheme.CLEAR}
      >
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
