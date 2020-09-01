import { resolve } from 'path'
import { readFileSync } from 'fs'

/**
 * Load configuration from `sort-config.json`
 */
export function loadConfig(cwd?: string) {
  if (!cwd) {
    cwd = process.cwd()
  }

  return JSON.parse(readFileSync(resolve(cwd, 'sort-config.json'), 'utf-8'))
}
