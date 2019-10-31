module.exports = {
  name: 'generate',
  alias: ['g'],
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { info }
    } = toolbox

    const name = parameters.first

    await generate({
      template: 'model.js.ejs',
      target: `src/models/${name}-model.js`,
      props: { name }
    })

    info(`Generated file at src/models/${name}-model.js`)
  }
}
