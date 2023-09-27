import { classNames } from '6shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import {
  memo,
  type InputHTMLAttributes,
  useState,
  type ChangeEvent,
  useEffect,
  useRef,
} from 'react';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className = '',
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: ChangeEvent<HTMLInputElement>) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };
  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
      {placeholder && (
        <div className={classNames(cls.placeholder)}> {`${placeholder}>`}</div>
      )}

      <div className={cls.caretWrapper}>
        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          ref={ref}
          {...otherProps}
        />
        {isFocused && (
          <span
            style={{ left: `${caretPosition * 9}px` }}
            className={cls.caret}
          ></span>
        )}
      </div>
    </div>
  );
});
