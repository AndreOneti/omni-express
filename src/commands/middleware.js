const path = require('path');

module.exports = {
  name: 'generate:middleware',
  alias: ['g:m'],
  description: 'Generate a new middleware',
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { info }
    } = toolbox

    const name = parameters.first

    let path = process.cwd().split('src')[0].replace(/\\/g, '/');

    await generate({
      template: 'middleware/middleware.js.ejs',
      target: `${path}/src/middleware/${name}.js`,
      props: { name }
    })

    info(`Generated middleware at src/middleware/${name}`)
  }
}
