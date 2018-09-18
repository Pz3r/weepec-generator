(function () {

  const { loadData } = require('./loader.js')
  const { generateHtml } = require('./generator.js')

  exports.getLoadedGenerator = (file) => {
    var data = loadData(file)
    var today = new Date()
    return (callback) => {
      generateHtml('./templates/tags.ejs', data, `./gen/tags/tags_${today.getTime()}.html`, callback)
    }
  }

})()
