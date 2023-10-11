import { classNames } from '6shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ProfileCard.module.scss';
import { useSelector } from 'react-redux';
import { getProfileData } from '5entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '5entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '5entities/Profile/model/selectors/getProfileError/getProfileError';
import { Text } from '6shared/ui/Text';
import { Button, ButtonTheme } from '6shared/ui/Button/ui/Button';
import { Input } from '6shared/ui/Input/ui/Input';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className = '' }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
          {t('Редактировать')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.first}
          placeholder={t('Ваше имя')}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('Ваше фамилия')}
          className={cls.input}
        />
      </div>
    </div>
  );
};
