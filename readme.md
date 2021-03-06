# omni-express

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![NPM Downloads Total][downloads-image-total]][downloads-url-total]
  [![Maintenance][maintenance-img]][maintenance-url]

  [![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]
  [![GitHub issues][issues-open-image]][issues-open-url]
  [![GitHub forks][forks-image]][forks-url]
  [![GitHub stars][stars-image]][stars-url]

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
> --code       -   To open vscode after creation <br>
> --no-git     -   To disable git init

### Create new component:

```bash
$ omni-express generate:component myNewComponent
or
$ omni-express g:c myNewComponent
```

### Create new middleware:

```bash
$ omni-express generate:middleware myNewMiddleware --global /local
or
$ omni-express g:m myNewMiddleware --global/local
```
- global to set app.use(myNewMiddleware)
- local to use on one or more route(s)  

## Folder structure

```
|-- root folder
|  +--● bin
|  |  |--- server.js
|  |
|  +--● src
|  |  +---● components
|  |  |   +--● default
|  |  |   |  +--● controller
|  |  |   |     |-- index.js
|  |  |   |-- router.js
|  |  |
|  |  +---● middleware
|  |      |-- setHeaders.js
|  |
|  +--- app.js
|  |
|  |--- routes.js
|
|-- index.js
```

## License

  [![npm](https://img.shields.io/npm/l/express.svg)](https://github.com/AndreOneti/omni-express/blob/master/LICENSE)

  [downloads-image]: https://img.shields.io/npm/dm/omni-express.svg
  [downloads-url]: https://npmjs.org/package/omni-express
  [downloads-image-total]: https://img.shields.io/npm/dt/omni-express.svg
  [downloads-url-total]: https://npmjs.org/package/omni-express
  [npm-image]: https://img.shields.io/npm/v/omni-express.svg
  [npm-url]: https://npmjs.org/package/omni-express
  [maintenance-img]: https://img.shields.io/badge/Maintained%3F-yes-green.svg
  [maintenance-url]: https://github.com/AndreOneti/omni-express

  [vulnerabilities-image]: https://snyk.io/test/github/AndreOneti/omni-express/badge.svg?targetFile=package.json
  [vulnerabilities-url]: https://snyk.io/test/github/AndreOneti/omni-express?targetFile=package.json
  [issues-open-image]: https://img.shields.io/github/issues/AndreOneti/omni-express.svg
  [issues-open-url]: https://github.com/AndreOneti/omni-express/issues?q=is%3Aopen+is%3Aissue
  [forks-image]: https://img.shields.io/github/forks/AndreOneti/omni-express.svg
  [forks-url]: https://github.com/AndreOneti/omni-express
  [stars-image]: https://img.shields.io/github/stars/AndreOneti/omni-express.svg
  [stars-url]: https://github.com/AndreOneti/omni-express
