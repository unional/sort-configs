import { Context } from './types'

export function sortConfigs({ ui }: Context, globs: string[] | undefined) {
  ui.info(`sorting configs ...${globs}`)
}
