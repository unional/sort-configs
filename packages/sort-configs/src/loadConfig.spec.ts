import { loadConfig } from './loadConfig'
import { getFixturePath } from './testutils'

test('single include', () => {
  const actual = loadConfig(getFixturePath('loadConfig/single-include'))
  expect(actual).toEqual({ include: ['.'] })
})
