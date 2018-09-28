(function() {

  const { loadData } = require('./loader.js')
  const { generateHtml } = require('./generator.js')

  var prepareData = (file) => {
    var data = loadData(file)

    console.log(data.length, 'etiquetas cargadas')

    var i, j = 0;
    var stampsPerPage = 30;
    var temp = [];
    var pages = [];

    for (i = 0, j = data.length; i < j; i += stampsPerPage) {
        temp = data.slice(i, i + stampsPerPage)
        pages.push(temp)
    }

    return pages;
  }

  var generateStampFile = (file) => {
    var data = prepareData(file)

    var today = new Date()

    return generateHtml('./templates/stamps.ejs', data, `./gen/stamps/html/stamps_${today.getTime()}.html`)
  }

  exports.generateStampFile = generateStampFile;

})()
