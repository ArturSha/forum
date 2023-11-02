import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from '6shared/ui/Button/ui/Button';
import { Text } from '6shared/ui/Text';
import { useSelector } from 'react-redux';
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from '5entities/Profile';
import cls from './ProfilePageHeader.module.scss';
import { useCallback } from 'react';
import { useAppDispatch } from '6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '5entities/User';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();
  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(async () => {
    await dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {canEdit && (
        <div className={cls.btnsWrapper}>
          {readonly ? (
            <Button
              onClick={onEdit}
              className={cls.editBtn}
              theme={ButtonTheme.OUTLINE}
            >
              {t('Редактировать')}
            </Button>
          ) : (
            <>
              <Button
                onClick={onCancelEdit}
                className={cls.editBtn}
                theme={ButtonTheme.OUTLINE_RED}
              >
                {t('Отменить')}
              </Button>
              <Button
                onClick={onSave}
                className={cls.saveBtn}
                theme={ButtonTheme.OUTLINE}
              >
                {t('Сохранить')}
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
