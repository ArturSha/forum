import { BugButton } from '1app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <BugButton />
      {t('Главная страница')}
    </div>
  );
};

export default MainPage;
