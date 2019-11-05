const fs = require('fs');

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

    let path = process.cwd().split('src')[0].replace(/\\/g, '/');

    var lineNumber = 0;
    var haveMiddleware = false;

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
      data.splice(lineNumber, 0, `require('./middleware/${name}.js');`);
      var text = data.join("\n");

      fs.writeFile(`${path}/src/routes.js`, text, function (err) {
        if (err) return error(err);
      });
    } else {
      error("Middleware already exist");
      return;
    }

    await generate({
      template: 'middleware/middleware.js.ejs',
      target: `${path}/src/middleware/${name}.js`,
      props: { name }
    })

    success(`Generated middleware at src/middleware/${name}`)
  }
}
