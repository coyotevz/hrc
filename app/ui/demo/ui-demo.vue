<template>
  <div class="ui-demo-page ui-layout-container">
    <div class="ui-layout">

      <ui-toolbar class="ui-layout-header" brand="Demo UI"
        :title="currentComponent.text" @nav-icon-clicked="toggleSidebar">
      </ui-toolbar>

      <main class="ui-layout-content">
        <component :is="currentComponent.id"></component>
      </main>

    </div>
  </div>
</template>

<script>
import UiToolbar from '../ui-toolbar'

import UiFabDemo from './ui-fab-demo'

let menu = [
  { id: 'ui-toolbar-demo', text: 'UiToolbar' },
  { id: 'ui-button-demo', text: 'UiButton' },
  { id: 'ui-fab-demo', text: 'UiFab' }
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
        if (this.menu[i].id === id + '-demo') {
          return this.menu[i]
        }
      }
      return this.menu[0]
    },
    toggleSidebar (e) {
      console.log('toggle sidebar')
    }
  },
  components: {
    UiToolbar,

    UiFabDemo
  }
}
</script>
