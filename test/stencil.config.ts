import { Config } from '@stencil/core';
import {angularOutputTarget} from "@stencil/angular-output-target";

export const config: Config = {
  namespace: 'test',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    angularOutputTarget({
      componentCorePackage: "@test/test",
      directivesProxyFile:
        "../test-angular/projects/component-library/src/lib/stencil-generated/components.ts",
      directivesArrayFile:
        "../test-angular/projects/component-library/src/lib/stencil-generated/index.ts",
      excludeComponents: [],
    }),
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
