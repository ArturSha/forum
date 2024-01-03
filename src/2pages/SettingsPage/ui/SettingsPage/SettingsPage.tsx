import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from '@/6shared/ui/redesigned/Text';
import { Page } from '@/3widgets/Page';
import { VStack } from '@/6shared/ui/redesigned/Stack';
import { UiDesignSwitcher } from '@/4features/uiDesignSwitcher';

const SettingsPage = memo(() => {
  const { t } = useTranslation();

  return (
    <Page>
      <VStack gap='16'>
        <Text title={t('Настройки пользователя')} />
        <UiDesignSwitcher />
      </VStack>
    </Page>
  );
});

export default SettingsPage;
