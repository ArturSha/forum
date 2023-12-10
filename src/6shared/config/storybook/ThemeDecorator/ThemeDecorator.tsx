import { ThemeProvider } from '@/1app/providers/ThemeProvider';
import { type Theme } from '@/6shared/const/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: any) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`} style={{ width: '100vw' }}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
};
