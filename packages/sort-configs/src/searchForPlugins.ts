import { searchByKeywords } from 'search-packages'
import { Context } from './types'

export async function searchForPlugins({ ui }: Context) {
  ui.info(`Search for available plugins...`)
  const pluginNames = await searchForPlugins.searchByKeywords(['sort-configs'])
  return pluginNames
}

searchForPlugins.searchByKeywords = searchByKeywords
