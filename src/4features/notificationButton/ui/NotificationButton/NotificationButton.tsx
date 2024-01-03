import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/6shared/lib/classNames/classNames';
import {
  Button as ButtonDeprecated,
  ButtonTheme,
} from '@/6shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/6shared/ui/deprecated/Icon';
import NotificationIconDeprecated from '@/6shared/assets/icons/notification-20-20.svg';
import NotificationIcon from '@/6shared/assets/icons/notification.svg';
import { NotificationList } from '@/5entities/Notification';
import { Popover as PopoverDeprecated } from '@/6shared/ui/deprecated/Popups';
import { Drawer } from '@/6shared/ui/redesigned/Drawer';
import cls from './NotificationButton.module.scss';
import { ToggleFeatures } from '@/6shared/lib/features';
import { Icon } from '@/6shared/ui/redesigned/Icon';
import { Popover } from '@/6shared/ui/redesigned/Popups';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <ToggleFeatures
      feature='isAppRedesigned'
      on={<Icon Svg={NotificationIcon} clickable onClick={onOpenDrawer} />}
      off={
        <ButtonDeprecated onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
          <IconDeprecated Svg={NotificationIconDeprecated} inverted />
        </ButtonDeprecated>
      }
    />
  );

  return (
    <div>
      <BrowserView>
        <ToggleFeatures
          feature='isAppRedesigned'
          on={
            <Popover
              className={classNames(cls.NotificationButton, {}, [className])}
              direction='bottom left'
              trigger={trigger}
            >
              <NotificationList className={cls.notifications} />
            </Popover>
          }
          off={
            <PopoverDeprecated
              className={classNames(cls.NotificationButton, {}, [className])}
              direction='bottom left'
              trigger={trigger}
            >
              <NotificationList className={cls.notifications} />
            </PopoverDeprecated>
          }
        />
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </div>
  );
});
