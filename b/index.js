var test = require('tape')

test('b', function (t) {
  setTimeout(function () {
    t.notOk(global.locked)
    global.locked = true
    setTimeout(function () {
      global.locked = false
      t.end()
    })
  })
})
