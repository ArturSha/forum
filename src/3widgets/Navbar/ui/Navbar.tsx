import { classNames } from '@/6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from '@/4features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/5entities/User';
import AppLink, { AppLinkTheme } from '@/6shared/ui/AppLink/AppLink';
import { HStack } from '@/6shared/ui/Stack';
import { NotificationButton } from '@/4features/notificationButton';
import { AvatarDropdown } from '@/4features/avatarDropdown';
import { Text } from '@/6shared/ui/Text';
import { TextTheme } from '@/6shared/ui/Text/ui/Text';
import { Button, ButtonTheme } from '@/6shared/ui/Button';
import cls from './Navbar.module.scss';
import { getRouteArticleCreate } from '@/6shared/const/router';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t('Ulbi TV App')}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={getRouteArticleCreate()}
          theme={AppLinkTheme.SECONDARY}
          className={cls.createBtn}
        >
          {t('Создать статью')}
        </AppLink>
        <HStack gap='16' className={cls.actions}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  );
});
