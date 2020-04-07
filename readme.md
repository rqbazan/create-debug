# CREATE DEBUG

A wrapper over `debug` library to display the module path as the tag.

### Installation

```
yarn add create-debug
```

### Usage

1. Create a dedicated module to avoid pass your specific configuration to the library.

```js
// src/debug.js
import { _createDebug } from 'create-debug'

const configuration = {
  rootDir: 'dist',
  prefix: 'myapp',
}

export function createDebug(module) {
  return _createDebug(module, configuration)
}
```

2. Use the above module in your base code such as here:

```js
// src/some/path/foo.js
import { createDebug } from '~/debug'

const debug = createDebug(module)

debug('hello world')
```

3. You will see the log in the console:

```sh
myapp:some:path:foo hello world
```
