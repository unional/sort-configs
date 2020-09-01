import { InMemoryPresenter } from 'clibuilder';
import { Context } from '../types';

export function createTestContext(): Context {
  return {
    ui: new InMemoryPresenter()
  }
}
