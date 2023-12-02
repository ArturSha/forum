import { classNames } from '6shared/lib/classNames/classNames';
import { Page } from '3widgets/Page/Page';
import { VStack } from '6shared/ui/Stack/VStack/VStack';
import { EditableProfileCard } from '4features/editableProfileCard';
import { useParams } from 'react-router-dom';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page className={classNames('', {}, [className])}>
      <VStack gap='16' max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;
