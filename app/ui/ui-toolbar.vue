<template>
  <header class="ui-toolbar" :class="styleClasses">

    <div class="ui-toolbar-left">
      <ui-icon-button class="ui-toolbar-nav-icon" clear
        :icon="iconColor" :icon="navIcon" @click="navIconClick"
        v-if="!hideNavIcon"></ui-icon-button>
    </div>

    <div class="ui-toolbar-center">
      <slot>
        <div class="ui-toolbar-title" v-text="title"></div>
      </slot>
    </div>

    <div class="ui-toolbar-right">
      <slot name="actions"></slot>
    </div>

  </header>
</template>

<script>
export default {
  name: 'ui-toolbar',

  props: {
    title: String,
    colored: {
      type: Boolean,
      default: false
    },
    textColor: {
      type: String,
      default: null
    },
    navIcon: {
      type: String,
      default: 'menu'
    },
    hideNavIcon: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    styleClasses () {
      let classes = ['ui-toolbar-' + (this.colored ? 'colored' : 'default')]

      if (!this.flat) {
        classes.push('ui-toolbar-raised')
      }
      if (this.textColor !== null) {
        classes.push('text-color-' + this.textColor)
      } else {
        classes.push(this.colored ? 'text-color-white' : 'text-color-black')
      }
      return classes
    },

    iconColor () {
      return this.colored ? 'white' : 'black'
    }
  },

  methods: {
    navIconClick () {
      this.$dispatch('nav-icon-clicked')
    }
  }
}
</script>
