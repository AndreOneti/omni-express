const fs = require('fs');
const pkgUp = require('pkg-up');

module.exports = {
  name: 'generate:component',
  alias: ['g:c'],
  description: 'Generate a new component',
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { info, success, error }
    } = toolbox

    const name = parameters.first

    let packagePath = await pkgUp();

    if (!packagePath) {
      error("Express project not found");
      return;
    }

    let index = packagePath.lastIndexOf('/') !== -1 ? packagePath.lastIndexOf('/') : packagePath.lastIndexOf('\\');
    let path = packagePath.slice(0, index + 1);

    var lineNumber = 0;
    var haveComponent = false;

    try {
      fs.readFileSync(`${path}/src/middleware/${name}.js`, "utf8").toString();
      error("Component already exist");
      return;
    } catch (err) { }

    var data = fs.readFileSync(`${path}/src/routes.js`, "utf8").toString().split("\n");
    data.forEach((data, index) => {
      if (data.indexOf("components/") !== -1 || data.indexOf('Routs') !== -1) lineNumber = index + 1;
      if (data.indexOf(`components/${name}`) !== -1) haveComponent = true;
    });

    if (lineNumber !== 0 && !haveComponent) {
      data.splice(lineNumber, 0, `require('./components/${name}/router')(app);`);
      var text = data.join("\n");

      fs.writeFile(`${path}/src/routes.js`, text, function (err) {
        if (err) return error(err);
      });
    } else {
      error("Component already exist");
      return;
    }

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

    success(`Generated component at src/components/${name}`)
  }
}
