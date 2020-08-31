Array.prototype.head = function() {
  return this[0]
}

Array.prototype.tail = function() {
  this.shift()
  return this
}

Array.prototype.range = function(start, end = null) {
  if (end === null) {
    end = start
    start = 1
  }

  var result = []

  for (var i = start; i <= end; i++) {
    result.push(i)
  }
  return result
}

Array.prototype.sum = function() {
  var result = 0

  for (var i = 0; i < this.length; i++) {
    result += this[i]
  }
  return result
}

Array.prototype.product = function() {
  var result = this[0]

  for (var i = 1; i < this.length; i++) {
    result *= this[i]
  }
  return result
}

Array.prototype.compact = function() {
  var result = []

  for (var i = 0; i < this.length; i++) {
    if (Boolean(this[i]) != false) {
      result.push(this[i])
    }
  }
  return result
}

Array.prototype.take = function(last) {
  var result = []

  for (var i = 0; i < last; i++) {
    result.push(this[i])
  }
  return result
}

Array.prototype.drop = function(first) {
  var result = []

  for (var i = first; i < this.length; i++) {
    result.push(this[i])
  }
  return result
}

Array.prototype.unique = function() {
  return this.filter((item, index) => this.indexOf(item) === index)
}

Array.prototype.sample = function() {
  return this[Math.floor(Math.random() * this.length)]
}

Array.prototype.shuffle = function() {
  var currentIndex = this.length
  var temporaryValue, randomIndex

  while (currentIndex--) {
    randomIndex = Math.floor(Math.random() * currentIndex)

    temporaryValue = this[currentIndex]
    this[currentIndex] = this[randomIndex]
    this[randomIndex] = temporaryValue
  }
  return this
}

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

String.prototype.title = function() {
  str = this.toLowerCase().split(' ')

  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
  }
  return str.join(' ')
}
String.prototype.truncate = function(limit, after = null) {
  if (!limit) return this

  return (
    this.trim()
      .split(' ')
      .slice(0, limit)
      .join(' ') + (after ?? '')
  )
}

String.prototype.isBlank = function() {
  if (this.trim().length > 0) {
    return false
  }
  return true
}

String.prototype.words = function() {
  return this.split(/[ ]{1,}/)
}

String.prototype.format = function(dict) {
  var result = this

  if (typeof dict === 'object') {
    Object.keys(dict).forEach(key => {
      result = result.replace('{' + key + '}', dict[key])
    })
    return result
  }

  // [...arguments] === Array.from(arguments)
  Array.from(arguments).forEach(argument => {
    result = result.replace('{}', argument)
  })
  return result
}

// console.log([].range(10))
var a = [].range(1, 10)
// console.log(a)
// console.log(a.take(2))
// console.log(a.drop(5))
// console.log(a.product())
// console.log(a.sum())
// console.log(a.head())
// console.log(a.tail())
// console.log(a.shuffle())
// console.log([1, 1, 2, 2, 3, 4, 5].unique())
// console.log(
//   [false, true, 0, '', null, 5, undefined, NaN, 'JavaScript'].compact()
// )
// console.log('aaaa bbbb'.capitalize())
// console.log('aaaa bbbb cccc dddd'.truncate(3).title())
// console.log('     '.isBlank())
// console.log(''.isBlank())
// console.log('This is a very                  clever    sentence'.words())
// console.log('{} {} {}'.format('one', 'two', 'three'))
// console.log(
//   'Hello {name}, I am {friend}'.format({
//     name: 'Jack',
//     friend: 'Rachael',
//   })
// )
