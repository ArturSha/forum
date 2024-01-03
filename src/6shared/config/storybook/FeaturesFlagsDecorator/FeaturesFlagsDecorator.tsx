import { type StoryFn } from '@storybook/react';
import { type FeatureFlags } from '@/6shared/types/featureFlags';
import { setFeatureFlags } from '@/6shared/lib/features';

export const FeaturesFlagsDecorator =
  (features: FeatureFlags) => (StoryComponent: StoryFn) => {
    setFeatureFlags(features);
    return <StoryComponent />;
  };
