import { searchByKeywords } from 'search-packages'
import { Context } from './types'

export async function searchForPlugins({ ui }: Context) {
  ui.info(`Search for available plugins...`)
  const pluginNames = await searchByKeywords(['sort-configs'])
  return pluginNames
}
