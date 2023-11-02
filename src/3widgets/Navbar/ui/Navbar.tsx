import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '6shared/ui/Button/ui/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from '4features/AuthByUsername';
import cls from './Navbar.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '5entities/User';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className = '' }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classNames(cls.navbar, {}, [className])}>
        <Button
          onClick={onLogout}
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
        >
          {t('Выйти')}
        </Button>
      </header>
    );
  }

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <Button
        onClick={onShowModal}
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
      >
        {t('Войти')}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  );
});
