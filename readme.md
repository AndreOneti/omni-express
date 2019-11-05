# omni-express

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Linux Build][travis-image]][travis-url]
[![Windows Build][appveyor-image]][appveyor-url]
[![Test Coverage][coveralls-image]][coveralls-url]

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

[MIT](LICENSE)