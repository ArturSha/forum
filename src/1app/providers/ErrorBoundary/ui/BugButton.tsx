import { Button } from '6shared/ui/Button/ui/Button';
import { useEffect, useState } from 'react';

// Компонент для тестирования
export const BugButton = () => {
  const [error, setError] = useState(false);

  const onThrow = () => {
    setError(true);
  };
  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  // eslint-disable-next-line i18next/no-literal-string
  return <Button onClick={onThrow}>throw error</Button>;
};
