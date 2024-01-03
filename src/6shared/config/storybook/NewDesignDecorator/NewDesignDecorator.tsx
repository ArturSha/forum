import { type Decorator } from '@storybook/react';

import { setFeatureFlags } from '@/6shared/lib/features';
import { getAllFeatureFlags } from '@/6shared/lib/features/lib/setGetFeatures';
// eslint-disable-next-line ulbi-tv-plugin/layer-imports

export const NewDesignDecorator: Decorator = (StoryComponent) => {
  setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });
  return (
    <div className='app_redesigned'>
      <StoryComponent />
    </div>
  );
};
