var path = require('path')
var pojo = require('pojo-ops')

function store (files) {
  var o = {}
  var doublesplits = files.map(function (filepath) {
    return filepath.split(path.sep)
  })
  doublesplits.forEach(function (splits) {
    var prev = {}
    splits.forEach(function (level, i, arr) {
      if (i === (arr.length - 1))
      if (!pojo.hasKeys(prev, level)) prev[level] = {}
      prev
    })
  })
}
