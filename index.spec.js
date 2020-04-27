const path = require('path')
const { getTagName, getFilePathParts } = require('create-debug')

describe('create debug library', () => {
  const rootDir = 'dist'
  const baseDir = path.join('/home/username/projects/foo', rootDir)

  it('get file path parts', () => {
    const filepath = path.join(baseDir, 'folder', 'index.js')

    const result = getFilePathParts(filepath, rootDir)

    expect(result).toMatchObject(['folder', 'index'])
  })

  it('get tag name', () => {
    const filepath = path.join(baseDir, 'folder', 'index.js')

    const result = getTagName(filepath, { rootDir, prefix: 'app' })

    expect(result).toBe('app:folder:index')
  })

  it('create debug', () => {
    const debug = require('./mock')

    let params = []

    debug.log = jest.fn().mockImplementation((...args) => {
      params = args
      console.log(...params)
    })

    const message = 'Hello There'

    debug(message)

    expect(debug.log).toBeCalled()
    expect(debug.log).toBeCalledWith(...params)
    expect(params.some((p) => p.includes(message))).toBeTruthy()
    expect(params.some((p) => p.includes('mock'))).toBeTruthy()
  })
})
