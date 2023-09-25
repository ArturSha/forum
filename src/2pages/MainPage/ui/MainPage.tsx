import { BugButton } from '1app/providers/ErrorBoundary';
import { Counter } from '5entities/Counter';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <BugButton />
      {t('Главная страница')}
      <Counter />
    </div>
  );
};

export default MainPage;
