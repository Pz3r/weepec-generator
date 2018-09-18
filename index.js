(function () {

  const TAGS = require('./tags.js')

  var processStamps = (file, callback) => {
    console.log('Procesando etiquetas del archivo:', file)
  }

  var processTags = (file, callback) => {
    console.log('Procesando placas del archivo:', file)
    var generator = TAGS.getLoadedGenerator(file);
    generator(callback)
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
    var fileProcessor;

    args.forEach((val, index) => {
      if (index == 2) {
        processor = processArgs(val);
      } else if (index > 2) {
        fileProcessor = (callback) => processor(val, callback);
      }
    })

    return fileProcessor;
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
