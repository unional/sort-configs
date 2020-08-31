import { createCli } from 'clibuilder'
import { detectConfigs } from './detectConfigs'
import { sortConfigs } from './sortConfigs'
import { pkg } from './pkg'

export const cli = createCli({
  name: 'sort-configs',
  description: 'Sort various configurations with opinion',
  version: pkg.version,
  arguments: [{
    name: 'globs',
    description: 'multiple file globs',
    multiple: true
  }],
  options: {
    boolean: {
      detect: {
        description: 'detect supported configs',
      }
    }
  },
  run(args) {
    if (args.detect) {
      detectConfigs(this, args.globs as any)
    }
    else {
      sortConfigs(this, args.globs as any)
    }
  }
})
