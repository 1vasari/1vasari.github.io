/*! Plugin options and other jQuery stuff */

let $ = window.$

// Responsive Nav
var navigation = window.responsiveNav('#site-nav', { // Selector: The ID of the wrapper
  animate: true, // Boolean: Use CSS3 transitions, true or false
  transition: 200, // Integer: Speed of the transition, in milliseconds
  label: '<i class=\'fa fa-bars\'></i> Menu', // String: Label for the navigation toggle
  insert: 'before', // String: Insert the toggle before or after the navigation
  customToggle: '', // Selector: Specify the ID of a custom toggle
  openPos: 'relative', // String: Position of the opened nav, relative or static
  jsClass: 'js', // String: 'JS enabled' class which is added to <html> el
  init: function () {},
  open: function () {},
  close: function () {}
})

$('html').click(function () {
  // Hide the menus if visible
  if ($(navigation.wrapper).hasClass('opened')) {
    navigation.toggle()
  }
})

$('#site-nav').click(function (event) {
  event.stopPropagation()
})

// FitVids options
$(function () {
  $('article').fitVids()
})

// Lazy load images
$(function () {
  [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
    img.setAttribute('src', img.getAttribute('data-src'))
    img.onload = function () {
      img.removeAttribute('data-src')
    }
  })
})
