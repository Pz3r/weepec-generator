(function() {

  const { renderFile } = require('ejs')
  const { writeFile } = require('fs')

  exports.generateHtml = (template, data, resultFile, callback) => {
    renderFile(template, {data: data}, (err, str) => {
      if (err) {
        callback(err, data, resultFile)
      } else {
        writeFile(resultFile, str, (err) => {
          callback(err, data, resultFile)
        })
      }
    })
  }

})()
