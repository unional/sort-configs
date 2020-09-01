import { resolve } from 'path'

export function getFixturePath(relativePath: string) {
  return resolve(__dirname, '../../fixtures', relativePath)
}
