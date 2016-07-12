<template>
  <div class="ui-demo-page ui-layout-container">
    <div class="ui-layout with-sidebar">

      <ui-toolbar class="ui-layout-header" brand="Demo UI"
        :title="currentComponent.text" @nav-icon-clicked="toggleSidebar">
      </ui-toolbar>

      <aside class="ui-layout-sidebar">
        <ul class="menu">
          <div class="menu-header">Components</div>
          <a class="menu-item" v-link="demoLink(item)" v-for="item in menu">{{ item.text }}</a>
        </ul>
      </aside>

      <main class="ui-layout-content">
        <component :is="currentComponent.id"></component>
      </main>

    </div>
  </div>
</template>

<script>
import UiToolbar from '../ui-toolbar'

import UiButtonDemo from './ui-button-demo'
import UiCardDemo from './ui-card-demo'
import UiFabDemo from './ui-fab-demo'
import UiMenuDemo from './ui-menu-demo'
import UiRippleInkDemo from './ui-ripple-ink-demo'
import UiTextfieldDemo from './ui-textfield-demo'
import UiToolbarDemo from './ui-toolbar-demo'

require('./demo')

let menu = [
  { id: 'ui-button-demo', text: 'Button' },
  { id: 'ui-card-demo', text: 'Card' },
  { id: 'ui-fab-demo', text: 'Fab' },
  { id: 'ui-menu-demo', text: 'Menu' },
  { id: 'ui-ripple-ink-demo', text: 'Ripple Ink' },
  { id: 'ui-textfield-demo', text: 'Textfield' },
  { id: 'ui-toolbar-demo', text: 'Toolbar' }
]

export default {
  data () {
    return {
      componentId: null,
      menu
    }
  },
  computed: {
    currentComponent () {
      return this.findComponentById(this.componentId)
    }
  },
  methods: {
    findComponentById (id) {
      for (let i = 0; i < this.menu.length; i++) {
        if (this.menu[i].id === id) {
          return this.menu[i]
        }
      }
      return this.menu[0]
    },
    demoLink (item) {
      return {
        name: 'demo.component',
        params: { componentId: item.id }
      }
    },
    toggleSidebar (e) {
      console.log('toggle sidebar')
    }
  },
  components: {
    UiToolbar,

    UiButtonDemo,
    UiCardDemo,
    UiFabDemo,
    UiMenuDemo,
    UiRippleInkDemo,
    UiTextfieldDemo,
    UiToolbarDemo
  }
}
</script>

<style>
code {
  font-size: 14px;
  font-family: Consolas, Monaco, 'Andale Mono', monospace;
  word-spacing: normal;
}

pre > code {
  font-size: 12.18px;
  line-height: 18.27px;
  white-space: pre-wrap;
}

pre {
  width: 100%;
}

code,
code.hljs {
  background-color: rgba(0, 0, 0, 0.06);
}

code.hljs {
  margin: 0 -40px;
  padding: 1em 48px;
}
</style>
