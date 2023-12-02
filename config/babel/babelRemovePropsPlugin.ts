import { type NodePath, type PluginItem } from '@babel/core';
import { type Program } from 'typescript';

export default function (): PluginItem {
  return {
    visitor: {
      Program(path: NodePath<Program>, state) {
        const forbidden = state.opts.props || [];
        path.traverse({
          JSXIdentifier(current) {
            const nodeName = current.node.name;

            if (forbidden.includes(nodeName)) {
              current.parentPath.remove();
            }
          },
        });
      },
    },
  };
}
