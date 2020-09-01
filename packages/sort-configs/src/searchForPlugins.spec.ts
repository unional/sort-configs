import { searchForPlugins } from './searchForPlugins'
import { createTestContext } from './testutils'

test.skip('get', () => {
  searchForPlugins.searchByKeywords = () => Promise.resolve(['sort-configs-typescript'])
  const ctx = createTestContext()
  const actual = searchForPlugins(ctx)
  expect(actual).toEqual([{
    name: 'sort-configs-typescript',
    'sort-configs': {
      patterns: ['package.json']
    }
  }])
})
