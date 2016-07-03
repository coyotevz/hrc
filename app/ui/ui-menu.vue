<template>
  <ul class="ui-menu" role="menu" tabindex="-1" v-el:dropdown 
    @keydown.esc="closeDropdown"
    :class="{ 'has-icons': showIcons, 'has-secondary-text': showSecondaryText }">

    <ui-menu-item :type="o.type" :icon="o.icon" :text="o.text"
      :secondary-text="o.secondaryText" :show-icon="showIcons"
      :show-secondary-text="showSecondaryText" :hide-ripple-ink="hideRippleInk"
      :disabled="o.disabled" @click="optionSelect(o)"
      @keydown.enter.prevent="optionSelect(o)" v-for="o in options">
    </ui-menu-item>

    <div class="ui-menu-focus-redirector" @focus="redirectFocus" tabindex="0">
    </div>

  </ul>
</template>

<script>
import UiMenuItem from './ui-menu-item'
import showDropdown from './mixins/show-dropdown'

export default {
  name: 'ui-menu',

  props: {
    options: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    showIcons: {
      type: Boolean,
      default: false
    },
    showSecondaryText: {
      type: Boolean,
      default: false
    },
    hideRippleInk: {
      type: Boolean,
      default: false
    }
  },

  events: {
    'dropdown-opened' () {
      if (this.conainFocus) {
        document.addEventListener('focus', this.restrictFocus, true)
      }

      this.$dispatch('opened')
      // Bubble event up
      return true
    },
    'dropdown-closed' () {
      if (this.containFocus) {
        document.removeEventListener('focus', this.restrictFocus, true)
      }
      this.$dispatch('closed')
      return true
    }
  },

  methods: {
    optionSelect (option) {
      if (!(option.disabled || option.type === 'divider')) {
        this.$dispatch('option-selected', option)
        this.closeDropdown()
      }
    },
    restrictFocus (e) {
      if (!this.$els.dropdown.contains(e.target)) {
        e.stopPropagation()
        this.$els.dropdown.querySelector('.ui-menu-item').focus()
      }
    },
    redirectFocus (e) {
      e.stopPropagation()
      this.$els.dropdown.querySelector('.ui-menu-item').focus()
    }
  },

  components: {
    UiMenuItem
  },

  mixins: [
    showDropdown
  ]
}
</script>
