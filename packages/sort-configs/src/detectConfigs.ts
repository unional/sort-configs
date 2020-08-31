import { Context } from './types'

export function detectConfigs({ ui }: Context, globs: string[] | undefined) {
  ui.info(`detecting configs ...${globs}`)
}
