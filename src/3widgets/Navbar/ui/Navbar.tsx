import { classNames } from '6shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Modal } from '6shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '6shared/ui/Button/ui/Button';
import { useCallback, useState } from 'react';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.navbar)}>
      <Button
        onClick={onToggleModal}
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}></Modal>
    </div>
  );
};
