const { createDebug } = require('./index')

// @ts-ignore
const debug = createDebug(module, {
  prefix: 'app',
  rootDir: 'create-debug',
})

// @ts-ignore
debug.enabled = true

module.exports = debug
