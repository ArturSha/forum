import { type Decorator } from '@storybook/react';
import { globalStyles } from '../../../../../config/storybook/globalStyles';

export const StyleDecorator: Decorator = (StoryComponent) => {
  return (
    <div style={globalStyles}>
      <StoryComponent />
    </div>
  );
};
