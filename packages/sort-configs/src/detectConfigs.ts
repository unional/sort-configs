import glob from 'glob'
import { Context } from './types'
import { searchForPlugins } from './searchForPlugins'

export async function detectConfigs({ ui }: Context, patterns: string[] | undefined) {
  const files = discoverFiles({ ui }, patterns)
  if (files?.length === 0) return

  const availablePlugins = searchForPlugins({ ui })
  ui.info(availablePlugins)
}

function discoverFiles({ ui }: Context, patterns: string[] | undefined) {
  ui.debug(`Finding files...`)
  return patterns?.reduce<string[]>((arr, pattern) => {
    glob(pattern, (err, matches) => {
      if (err) return
      arr.push(...matches)
    })
    return arr
  }, [])
}
