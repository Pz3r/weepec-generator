(function() {

  const XLSX = require('xlsx')

  exports.loadData = (file) => {
    var workbook = XLSX.readFile(file)
    var worksheet = workbook.Sheets[workbook.SheetNames[0]]
    var data = XLSX.utils.sheet_to_json(worksheet)
    return data
  }

})()
