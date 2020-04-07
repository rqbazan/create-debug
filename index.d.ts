import { Debugger } from 'debug'

declare module 'create-debug' {
  export interface Configuration {
    rootDir: string
    prefix: string
  }

  export function createDebug(
    module: NodeModule,
    config: Configuration
  ): Debugger
}
