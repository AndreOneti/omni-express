const fs = require('fs');
const pkgUp = require('pkg-up');

module.exports = {
  name: 'generate:middleware',
  alias: ['g:m'],
  description: 'Generate a new middleware',
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { info, success, error }
    } = toolbox

    const name = parameters.first
    const global = Object.keys(parameters.options)[0]
      ? Object.keys(parameters.options)[0]
      : "global";

    let packagePath = await pkgUp();

    if (!packagePath) {
      error("Express project not found");
      return;
    }
    let index = packagePath.lastIndexOf('/') !== -1 ? packagePath.lastIndexOf('/') : packagePath.lastIndexOf('\\');
    let path = packagePath.slice(0, index + 1);

    var lineNumber = 0;
    var haveMiddleware = false;

    var projectTemplate = "";

    projectTemplate = global === "global"
      ? 'middleware/middleware-global.js.ejs'
      : 'middleware/middleware-local.js.ejs';

    try {
      fs.readFileSync(`${path}/src/middleware/${name}.js`, "utf8").toString();
      error("Middleware already exist");
      return;
    } catch (err) { }

    var data = fs.readFileSync(`${path}/src/routes.js`, "utf8").toString().split("\n");
    data.forEach((data, index) => {
      if (data.indexOf("middleware") !== -1) lineNumber = index + 1;
      if (data.indexOf(`middleware/${name}`) !== -1) haveMiddleware = true;
    });

    if (lineNumber !== 0 && !haveMiddleware) {
      if (global === "global") {
        data.splice(lineNumber, 0, `require('./middleware/${name}.js')(app);`);
      }

      var text = data.join("\n");

      fs.writeFile(`${path}/src/routes.js`, text, function (err) {
        if (err) return error(err);
      });
    } else {
      error("Middleware already exist");
      return;
    }

    await generate({
      template: projectTemplate,
      target: `${path}/src/middleware/${name}.js`,
      props: { name }
    })

    success(`Generated middleware at src/middleware/${name}`)
  }
}
