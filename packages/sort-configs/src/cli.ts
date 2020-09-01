import { createCli } from 'clibuilder'
import { detectConfigs } from './detectConfigs'
import { sortConfigs } from './sortConfigs'
import { pkg } from './pkg'
import { getFileGlobs } from './getFileGlobs'

export const cli = createCli({
  name: 'sort-configs',
  description: 'Sort various configurations with opinion',
  version: pkg.version,
  config: {
    include: null as string[] | null
  },
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
  async run(args) {
    const globs = getFileGlobs(this.config, args.globs as any)
    if (args.detect) {
      detectConfigs({ ui: this.ui }, globs)
    }
    else {
      sortConfigs({ ui: this.ui }, globs)
    }
  }
})
