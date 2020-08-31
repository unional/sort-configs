import { LogPresenter, PromptPresenter } from 'clibuilder'

export type Context = {
  ui: LogPresenter & PromptPresenter
}
