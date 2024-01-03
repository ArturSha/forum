import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/6shared/lib/classNames/classNames';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/6shared/ui/deprecated/Button';
import { LoginModal } from '@/4features/AuthByUsername';
import { getUserAuthData } from '@/5entities/User';
import { NotificationButton } from '@/4features/notificationButton';
import { AvatarDropdown } from '@/4features/avatarDropdown';
import cls from './Navbar.module.scss';
import { getRouteArticleCreate } from '@/6shared/const/router';
import { ToggleFeatures, toggleFeatures } from '@/6shared/lib/features';
import { Text, TextTheme } from '@/6shared/ui/deprecated/Text';
import { HStack } from '@/6shared/ui/redesigned/Stack';
import { AppLinkTheme, AppLink } from '@/6shared/ui/deprecated/AppLink/AppLink';
import { Button } from '@/6shared/ui/redesigned/Button';

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

  const mainClass = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => cls.NavbarRedesigned,
    off: () => cls.Navbar,
  });

  if (authData) {
    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <header className={classNames(mainClass, {}, [className])}>
            <HStack gap='16' className={cls.actions}>
              <NotificationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
        off={
          <header className={classNames(mainClass, {}, [className])}>
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
        }
      />
    );
  }

  return (
    <header className={classNames(mainClass, {}, [className])}>
      <ToggleFeatures
        feature='isAppRedesigned'
        on={
          <Button variant='clear' className={cls.links} onClick={onShowModal}>
            {t('Войти')}
          </Button>
        }
        off={
          <ButtonDeprecated
            theme={ButtonTheme.CLEAR_INVERTED}
            className={cls.links}
            onClick={onShowModal}
          >
            {t('Войти')}
          </ButtonDeprecated>
        }
      />

      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  );
});
