const path = require('path')
const debug = require('debug')

/**
 * @typedef Configuration
 * @property {string} rootDir
 * @property {string} prefix
 */

/**
 * @param {string} absolutePath
 * @param {string} rootDir
 */
function getFilePath(absolutePath, rootDir) {
  const rootDirBeginsAt = absolutePath.indexOf(rootDir)

  const filepath = absolutePath.substring(rootDirBeginsAt)

  const { ext } = path.parse(filepath)

  return filepath.replace(ext, '')
}

/**
 * @param {NodeModule} module
 * @param {Configuration} config
 */
function createDebug(module, config) {
  const filepath = getFilePath(module.filename, config.rootDir)

  const [, ...parts] = filepath.split(path.sep)

  const tag = parts.join(':')

  return debug(`${config.prefix}:${tag}`)
}

module.exports = {
  createDebug,
}
