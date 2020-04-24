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
 * @returns {string[]}
 */
function getFilePathParts(absolutePath, rootDir) {
  const rootDirBeginsAt = absolutePath.indexOf(rootDir)

  const filepath = absolutePath.substring(rootDirBeginsAt)

  const { ext } = path.parse(filepath)

  const filepathWithoutExt = filepath.replace(ext, '')

  const [, ...parts] = filepathWithoutExt.split(path.sep)

  return parts
}

/**
 * @param {string} absolutePath
 * @param {Configuration} config
 * @return {string}
 */
function getTagName(absolutePath, config) {
  const parts = getFilePathParts(absolutePath, config.rootDir)

  return `${config.prefix}:${parts.join(':')}`
}

/**
 * @param {NodeModule} module
 * @param {Configuration} config
 */
function createDebug(module, config) {
  return debug(getTagName(module.filename, config))
}

module.exports = {
  createDebug,
  getTagName,
  getFilePathParts,
}
