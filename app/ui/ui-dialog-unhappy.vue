<template>
  <div class="ui-dialog ui-dialog-mask" v-show="show" :transition="transition"
    :class="[type]" :role="role">
    <div class="ui-dialog-wrapper" @click="close" v-el:dialog-mask>
      <div class="ui-dialog-container" tabindex="-1" @keydown.esc="close"
        v-el:dialog-container>
        <div class="ui-dialog-header">
          <slot name="header">
            <h1 v-text="header" class="ui-dialog-header-text"></h1>
          </slot>

          <ui-icon-button type="clear" icon="close" class="ui-dialog-close-button"
            @click="close" :disabled="!dismissible" v-if="showCloseButton"
            v-el:close-button></ui-icon-button>
        </div>

        <div class="ui-dialog-body">
          <slot>
            <div v-text="body"></div>
          </slot>
        </div>

        <div class="ui-dialog-footer" v-if="!hideFooter">
          <slot name="footer">
            <ui-button @click="close" v-if="dismissible">Close</ui-button>
          </slot>
        </div>

        <div class="focus-redirector" @focus="redirectFocus" tabindex="0"></div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'dominus'

import UiIconButton from './ui-icon-button'
import UiButton from './ui-button'

export default {
  name: 'ui-dialog',

  props: {
    show: {
      type: Boolean,
      required: true,
      twoWay: true
    },
    type: {
      type: String,
      default: 'normal',
      coerce (type) {
        return 'ui-dialog-' + type
      }
    },
    header: {
      type: String,
      default: 'UiDialog Header'
    },
    body: {
      type: String,
      default: 'UiDialog body'
    },
    role: {
      type: String,
      default: 'dialog' // 'dialog' or 'alertdialog'
    },
    transition: {
      type: String,
      default: 'ui-dialog-scale' // 'ui-dialog-scale' or 'ui-dialog-fade'
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    hideFooter: {
      type: Boolean,
      default: false
    },
    dismissible: {
      type: Boolean,
      default: true
    },
    backdropDismissible: {
      type: Boolean,
      default: true
    }
  },

  data () {
    return {
      lastFocussedElement: null
    }
  },

  watch: {
    'show' () {
      this.$nextTick(() => {
        if (this.show) {
          this.opened()
        } else {
          this.closed()
        }
      })
    }
  },

  beforeDestroy () {
    if (this.show) {
      this.tearDown()
    }
  },

  methods: {
    close (e) {
      console.log('close')
      if (!this.dismissible) {
        return
      }

      // Make sure the element clicked was the dialog mask and not a child whose
      // click event has bubbled up
      if (e.currentTarget === this.$els.dialogMask && e.target !== e.currentTarget) {
        return
      }

      // Don't close if this event was triggered by the dialog mask and
      // this.backdropDismissible is false
      if (e.currentTarget === this.$els.dialogMask && !this.backdropDismissible) {
        return
      }

      this.show = false
    },
    opened () {
      this.lastFocussedElement = document.activeElement
      this.$els.dialogContainer.focus()

      $('body').addClass('ui-modal-open')
      document.addEventListener('focus', this.restrictFocus, true)
      this.$dispatch('opened')
    },
    closed () {
      this.tearDown()
      this.$dispatch('closed')
    },
    redirectFocus (e) {
      e.stopPropagation()
      this.$els.dialogContainer.focus()
    },
    restrictFocus (e) {
      if (!this.$els.dialogContainer.contains(e.target)) {
        e.stopPropagation()
        this.$els.dialogContainer.focus()
      }
    },
    tearDown () {
      $('body').removeClass('ui-dialog-open')
      document.removeEventListener('focus', this.restrictFocus, true)
      this.lastFocussedElement.focus()
    }
  },

  components: {
    UiIconButton,
    UiButton
  }
}
</script>

<style lang="scss">
@import '../scss/variables';
$transition-duration: 0.2s;

.ui-dialog {
  font-family: $font-stack;
  font-size: 14px;

  &.ui-dialog-large {
    .ui-dialog-container {
      width: 848px;
    }
  }

  &.ui-dialog-small {
    .ui-dialog-container {
      width: 320px;
    }
  }
}

.ui-dialog-mask {
  position: fixed;
  z-index: $z-index-modal;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color-black, 0.5);
  display: table;
  transition: opacity $transition-duration ease;
}

.ui-dialog-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.ui-dialog-container {
  outline: none;
  width: 528px;
  margin: 0px auto;
  padding: 0;
  background-color: $color-white;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba($color-black, 0.33);
  transition: all $transition-duration ease;

  max-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
