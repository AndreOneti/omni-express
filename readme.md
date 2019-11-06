# omni-express

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 8.0.0 or higher is required.

Using npm

```bash
$ npm install -g omni-express
```

Using yarn

```bash
$ yarn global add omni-express
```

### Create the project:

Using npm

```bash
$ omni-express new myProject
```

Using yarn

```bash
$ omni-express new myProject --yarn
```

#### New project flags
> --code    -   To open vscode after creation <br>
> --git     -   To disable git init

### Create new component:

```bash
$ omni-express generate:component myNewComponent
or
$ omni-express g:c myNewComponent
```

### Create new middleware:

```bash
$ omni-express generate:middleware myNewMiddleware
or
$ omni-express g:m myNewMiddleware
```

## License

  [![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/AndreOneti/omni-express/blob/master/LICENSE)

  [downloads-image]: https://img.shields.io/npm/dm/omni-express.svg
  [downloads-url]: https://npmjs.org/package/omni-express
  [npm-image]: https://img.shields.io/npm/v/omni-express.svg
  [npm-url]: https://npmjs.org/package/omni-express
