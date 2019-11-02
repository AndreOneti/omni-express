const path = require('path');

module.exports = {
  name: 'generate:component',
  alias: ['g:c'],
  description: 'Generate a new component',
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { info }
    } = toolbox

    const name = parameters.first

    let path = process.cwd().split('src')[0].replace(/\\/g, '/');

    await generate({
      template: 'components/router.js.ejs',
      target: `${path}/src/components/${name}/router.js`,
      props: { name }
    })

    await generate({
      template: 'components/index.js.ejs',
      target: `${path}/src/components/${name}/controller/index.js`,
      props: { name }
    })

    info(`Generated component at src/components/${name}`)
  }
}
