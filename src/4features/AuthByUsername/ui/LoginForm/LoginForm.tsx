import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '6shared/ui/Button/ui/Button';
import { Input } from '6shared/ui/Input/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';
import { Text } from '6shared/ui/Text';
import { TextTheme } from '6shared/ui/Text/ui/Text';
import i18n from '6shared/config/i18n/i18n';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className = '' }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(async () => {
    // @ts-expect-error to-do custom hook from doc.
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && (
        <Text
          text={i18n.t('Вы ввели неверный логин или пароль')}
          theme={TextTheme.ERROR}
        />
      )}
      <Input
        autofocus={true}
        className={cls.input}
        type='text'
        placeholder={t('Введите имя')}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        className={cls.input}
        type='text'
        placeholder={t('Введите пароль')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        onClick={onLoginClick}
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});
