import { readFileSync } from 'fs'
import { resolve } from 'path'

/**
 * Load configuration from `sort-config.json`
 */
export function loadConfig(cwd?: string) {
  if (!cwd) {
    cwd = process.cwd()
  }

  return JSON.parse(readFileSync(resolve(cwd, 'sort-configs.json'), 'utf-8'))
}
