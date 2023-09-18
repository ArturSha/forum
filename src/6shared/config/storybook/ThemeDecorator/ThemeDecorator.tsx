import { type Theme } from '1app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: any) => {
  return (
    <div className={`app ${theme}`} style={{ width: '100vw' }}>
      <StoryComponent />
    </div>
  );
};
