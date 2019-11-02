/** @type {import('shelljs')} */
const { exec, cd } = require('shelljs');

module.exports = {
  name: 'new',
  description: 'Generate a new project with express\nIf you want install packages with yarn use --yarn',
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { info, success, error }
    } = toolbox

    const name = parameters.first
    const yarn = parameters.options.yarn || false

    if (!!!name) {
      error("Project name is required!")
      return;
    }

    info(`Generate project ${name}`)

    await generate({
      template: 'index.js.ejs',
      target: `${name}/index.js`,
      props: { name }
    })

    await generate({
      template: 'package.json.ejs',
      target: `${name}/package.json`,
      props: { name }
    })

    await generate({
      template: 'bin/server.js.ejs',
      target: `${name}/bin/server.js`,
      props: { name }
    })

    await generate({
      template: 'src/app.js.ejs',
      target: `${name}/src/app.js`,
      props: { name }
    })

    await generate({
      template: 'src/routes.js.ejs',
      target: `${name}/src/routes.js`,
      props: { name }
    })

    await generate({
      template: 'components/defaul-router.js.ejs',
      target: `${name}/src/components/default/router.js`,
      props: { name }
    })

    await generate({
      template: 'components/defaul-index.js.ejs',
      target: `${name}/src/components/default/controller/index.js`,
      props: { name }
    })

    await generate({
      template: 'src/validator.js.ejs',
      target: `${name}/src/validator/index.js`,
      props: { name }
    })

    await generate({
      template: 'middleware/setHeaders.js.ejs',
      target: `${name}/src/middleware/setHeaders.js`,
      props: { name }
    })

    info(`Install express, morgan and cors.`)

    if (yarn) {
      cd(`${name}`);
      exec(`yarn install`);
      cd('..');
    } else if (!yarn) {
      cd(`${name}`);
      exec(`npm install`);
      cd('..');
    }

    success(`Generated project ${name} folder`)
  }
}
