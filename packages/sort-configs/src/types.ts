import { LogPresenter, PromptPresenter } from 'clibuilder'

export type Context = {
  ui: UI
}

export type UI = LogPresenter & PromptPresenter

export type PluginPackageJson = {
  name: string,
  'sort-configs': {
    patterns: string[]
  }
}
