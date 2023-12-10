/* eslint-disable @typescript-eslint/no-non-null-assertion */
import path from 'path';
import { type BuildPaths } from '../build/types/config';
import type webpack from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { DefinePlugin, type RuleSetRule } from 'webpack';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    buildLocales: '',
    locales: '',
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');
  config!.resolve!.alias! = {
    ...config.resolve?.alias,
    '@': paths.src,
  };

  if (config.module?.rules) {
    // @ts-expect-error temp
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
      if (rule?.test?.toString().includes('svg')) {
        return { ...rule, exclude: /\.svg$/i };
      }
      return rule;
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push(buildCssLoader(true));
  }

  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('https://testapi.ru'),
      __PROJECT__: JSON.stringify('storybook'),
    })
  );

  return config;
};
