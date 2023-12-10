import { classNames } from '@/6shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import { Icon } from '@/6shared/ui/Icon/Icon';
import NotificationIcon from '@/6shared/assets/icons/notification-20-20.svg';
import { NotificationList } from '@/5entities/Notification';
import { Popover } from '@/6shared/ui/Popups';
import { Drawer } from '@/6shared/ui/Drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import cls from './NotificationButton.module.scss';
import { Button, ButtonTheme } from '@/6shared/ui/Button';
import { AnimationProvider } from '@/6shared/lib/components/AnimationProvider';

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
    <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  );

  return (
    <div>
      <BrowserView>
        <Popover
          className={classNames(cls.NotificationButton, {}, [className])}
          direction='bottom left'
          trigger={trigger}
        >
          <NotificationList className={cls.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <AnimationProvider>
          <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
            <NotificationList />
          </Drawer>
        </AnimationProvider>
      </MobileView>
    </div>
  );
});
