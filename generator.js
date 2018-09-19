(function() {

  const { renderFile } = require('ejs')
  const { writeFile } = require('fs')

  exports.generateHtml = (template, data, resultFile) => {

    return new Promise((resolve, reject) => {

      renderFile(template, {data: data}, (err, str) => {
        if (err) {
          reject(err)
        } else {
          writeFile(resultFile, str, (err) => {
            if (err) {
              reject(err)
            } else {
              resolve(data.length)
            }
          })
        }
      })

    })

  }

})()
