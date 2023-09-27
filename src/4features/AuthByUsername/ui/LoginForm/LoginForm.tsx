import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from '6shared/ui/Button/ui/Button';
import { Input } from '6shared/ui/Input/ui/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.loginForm)}>
      <Input
        autofocus={true}
        className={cls.input}
        type='text'
        placeholder={t('Введите имя')}
      />
      <Input
        className={cls.input}
        type='text'
        placeholder={t('Введите пароль')}
      />
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};
