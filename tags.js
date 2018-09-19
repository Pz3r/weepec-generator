(function () {

  const { loadData } = require('./loader.js')
  const { generateHtml } = require('./generator.js')

  var generateTagFiles = async (file, chunkSize = 100) => {
    var data = loadData(file)

    console.log(data.length, 'placas cargadas')

    var today = new Date()

    var i, j, k, finalResult = 0;
    var temp = []
    for (i = 0, j = data.length, k = 1; i < j; i += chunkSize, k++) {
      temp = data.slice(i, i + chunkSize)
      let result = await generateHtml('./templates/tags.ejs', temp, `./gen/tags/tags_${today.getTime()}_${k}.html`)
      finalResult += result
    }

    console.log(finalResult, 'placas procesadas');

  }

  exports.generateTagFiles = generateTagFiles;

})()
