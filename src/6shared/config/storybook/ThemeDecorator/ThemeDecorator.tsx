import { ThemeProvider, type Theme } from '1app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: any) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`} style={{ width: '100vw' }}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
};
