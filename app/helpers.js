// Install some functions on global elements like window
// https://github.com/james2doyle/saltjs

/* DOM selector
 * $('#id') -> get by id
 * $('.class') -> get by class name
 * $('@elem') -> get by element name
 * $('=div') -> get by tag name
 * $('*div div.inside') -> get by query selector
 *
 * Can return a single element or NodeList (list of elements) that match
 */

window.$ = (selector, context) => {
  let c = {
    '#': 'getElementById',
    '.': 'getElementsByClassName',
    '@': 'getElementsByName',
    '=': 'getElementsByTagName',
    '*': 'querySelectorAll'}[selector[0]]
  return ((context === undefined) ? document : context)[c](selector.slice(1))
}

let ep = window.Element.prototype
let nlp = window.NodeList.prototype

ep.find = function (selector) {
  return window.$(selector, this)
}

// element.addClass('name')
ep.addClass = function (name) {
  name.split(' ').forEach(name => this.classList.add(name))
  return this
}

// element.removeClass('name')
ep.removeClass = function (name) {
  name.split(' ').forEach(name => this.classList.remove(name))
  return this
}

// element.toggleClass('name')
ep.toggleClass = function (name) {
  name.split(' ').forEach(name => this.classList.toggle(name))
  return this
}

// element.hasClass('name')
ep.hasClass = function (name) {
  return this.classList.contains(name)
}

nlp.find = function (selector) {
  console.error('You cannot find in a NodeList. Just use $(*selector %s)', selector)
  return this
}

// $().addClass('name')
nlp.addClass = function (name) {
  this.each(el => el.addClass(name))
  return this
}

// $().removeClass('name')
nlp.removeClass = function (name) {
  this.each(el => el.removeClass(name))
  return this
}

// $().toggleClass('name')
nlp.toggleClass = function (name) {
  this.each(el => el.toggleClass(name))
  return this
}

nlp.each = Array.prototype.forEach
