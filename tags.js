(function () {

  const { loadData } = require('./loader.js')
  const { generateHtml } = require('./generator.js')
  const removeDiacritics = require('diacritics').remove

  var generateTagFiles = async (file, name, chunkSize = 100) => {
    var data = loadData(file)

    console.log(data.length, 'placas cargadas')

    var today = new Date()

    var i, j, k, finalResult = 0;
    var temp = []
    var filteredTemp = []
    var currentLetter = ''
    var tempLetter = ''
    for (i = 0, j = data.length, k = 1; i < j; k++) {
      temp = data.slice(i, i + chunkSize)

      // Grouped by letter
      /*
      tempLetter = removeDiacritics(temp[0]['nombre']).charAt(0).toUpperCase()
      if (currentLetter !== tempLetter) {
          currentLetter = tempLetter
      }

      filteredTemp = temp.filter((elem, index, array) => {
        //console.log(elem['nombre'], elem['perro']);
        return removeDiacritics(elem['nombre']).charAt(0).toUpperCase() === currentLetter;
      })

      i += filteredTemp.length

      let result = await generateHtml('./templates/tags.ejs', filteredTemp, `./gen/tags/html/${name}_${today.getTime()}_${currentLetter}_${k}.html`)
      */

      // Not grouped
      i += temp.length

      let result = await generateHtml('./templates/tags.ejs', temp, `./gen/tags/html/${name}_${today.getTime()}_${k}.html`)

      finalResult += result
    }

    console.log(finalResult, 'placas procesadas');

  }

  exports.generateTagFiles = generateTagFiles;

})()
