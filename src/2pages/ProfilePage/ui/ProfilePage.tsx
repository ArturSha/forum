import {
  ProfileCard,
  fetchProfileData,
  profileReducer,
} from '5entities/Profile';
import { classNames } from '6shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  type ReducersList,
} from '6shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '6shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className = '' }: ProfilePageProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchProfileData());
  }, [dispatch]);
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
