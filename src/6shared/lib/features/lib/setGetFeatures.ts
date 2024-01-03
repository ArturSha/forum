import { LOCAL_STORAGE_LAST_DESIGN_KEY } from '@/6shared/const/localstorage';
import { type FeatureFlags } from '@/6shared/types/featureFlags';

// ФИЧИ НЕ МЕНЯЮТСЯ В ХОДЕ СЕССИИ, ИХ НЕОБЯЗАТЕЛЬНО ДЕЛАТЬ РЕАКТИВНЫМИ!
let featureFlags: FeatureFlags = {
  isAppRedesigned:
    localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === 'new',
};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
  return featureFlags[flag];
}

export function getAllFeatureFlags() {
  return featureFlags;
}
