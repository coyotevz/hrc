import Vue from 'vue'
import hljs from 'highlight.js/lib/highlight'

require('highlight.js/styles/solarized-light.css')

Vue.directive('hljs', {
  update (value) {
    this.el.innerText = value
    hljs.highlightBlock(this.el)
  }
})

Vue.mixin({
  ready () {
    hljs.initHighlighting.called = false
    hljs.initHighlighting()
    let main = document.querySelector('#app main')
    if (main) {
      main.scrollTop = 0
    }
  }
})

hljs.registerLanguage('css', require('highlight.js/lib/languages/css'))
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'))
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'))
