(function () {

  const TAGS = require('./tags.js')
  const STAMPS = require('./stamps.js')

  var processStamps = (file, name, callback) => {
    console.log('Procesando etiquetas del archivo:', file)
    STAMPS.generateStampFile(file, name).then((result) => {
      console.log('Archivo con', result, 'páginas')
    }, (err) => {
      console.log(err)
    })
  }

  var processTags = (file, name, callback) => {
    console.log('Procesando placas del archivo:', file)
    TAGS.generateTagFiles(file, name)
  }

  var processArgs = arg => {
    switch (arg) {
      case '-e':
      case '--etiquetas':
        return processStamps;
      case '-p':
      case '--placas':
        return processTags;
    }
  }

  var main = (args) => {
    var processor;
    var filePath;
    var resultName;

    args.forEach((val, index) => {
      if (index == 2) {
        processor = processArgs(val);
      } else if (index == 3) {
        filePath = val;
      } else if (index == 4) {
        resultName = val;
      }
    })

    return (callback) => processor(filePath, resultName, callback);
  }

  var fileProcessor = main(process.argv);
  fileProcessor((err, data, resultFile) => {
    if (err) {
      console.log(err)
    } else {
      console.log(data.length, 'etiquetas procesadas.')
    }
  });

})()
