/** @type {import('shelljs')} */
const { exec, cd } = require('shelljs');
const fs = require('fs');

module.exports = {
  name: 'new',
  alias: ['n'],
  description: 'Generate a new project with express\nInstall packages with yarn use --yarn\nGit init automatic, to disable use --git\n--code to open project on vscode',
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { info, success, error }
    } = toolbox

    const name = parameters.first
    const yarn = parameters.options.yarn || false
    const code = parameters.options.code || false
    const git = parameters.options.git === undefined ? true : false

    if (!!!name) {
      error("Project name is required!")
      return;
    }

    if (fs.existsSync(`./${name}`)) {
      error("Project or folder already exist");
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
      template: '.env.ejs',
      target: `${name}/.env`,
      props: { name }
    })

    await generate({
      template: '.editorconfig.ejs',
      target: `${name}/.editorconfig`,
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

    cd(`${name}`);
    if (git) {
      exec(`git init`);
      await createGitIgnore()
        .catch(err => { return err })
    }
    yarn ? exec(`yarn install`) : exec(`npm install`);
    if (code) exec(`code .`);
    cd('..');

    success(`Generated project ${name} folder`)
  }
}

function createGitIgnore(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile('.gitignore', 'node_modules\n.env', (err) => {
      if (err)
        reject(data);
      resolve('node_modules saved!');
    });
  })
}