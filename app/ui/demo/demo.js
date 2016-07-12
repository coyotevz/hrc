import Vue from 'vue'
import hljs from 'highlight.js/lib/highlight'

require('highlight.js/styles/solarized-light.css')
require('./demo.scss')

Vue.directive('hljs', {
  update (value) {
    this.el.innerText = value
    hljs.highlightBlock(this.el)
  }
})

Vue.mixin({
  ready () {
    let blocks = document.querySelectorAll('pre code')
    blocks.each(block => {
      if (!block.hljs) {
        hljs.highlightBlock(block)
        block.hljs = true
      }
    })
  }
})

hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
