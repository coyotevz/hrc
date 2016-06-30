<template>
  <div class="ui-dialog-mask" v-show="show" :transition="transition">
    <div class="ui-dialog-wrapper" @click="close" v-el:backdrop>
      <div class="ui-dialog" tabindex="-1" @keydown.esc="close" v-el:container>
        <div class="ui-dialog-header">
          <slot name="header">
            <h1 v-text="header" class="ui-dialog-header-text"></h1>
          </slot>

          <ui-icon-button clear icon="close" class="ui-dialog-close-button"
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
import UiIconButton from './ui-icon-button'
import UiButton from './ui-button'

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    dismissible: {
      type: Boolean,
      default: true
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    transition: {
      type: String,
      default: 'fade', // 'scale' or 'fade'
      coerce (t) {
        return 'ui-dialog-' + t
      }
    },
    header: String
  },

  methods: {
    close (e) {
      if (this.show) {
        if (e !== undefined) {
          if (e.currentTarget === this.$els.backdrop && e.target !== e.currentTarget) {
            return
          }
        }
        this.show = false
        this.$dispatch('close')
      }
    },
    open (e) {
      if (!this.show) {
        this.show = true
        this.$dispatch('open')
      }
    },
    redirectFocus (e) {
      e.stopPropagation()
      this.$els.container.focus()
    }
  },

  components: {
    UiIconButton,
    UiButton
  }
}
</script>

<style lang="scss">
@import "../scss/variables";
$transition-duration: 0.2s;

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

  .ui-dialog-wrapper {
    display: table-cell;
    vertical-align: middle;

    .ui-dialog {
      font-family: $font-stack;
      font-size: 14px;

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

      &.ui-dialog-large {
        width: 848px;
      }

      &.ui-dialog-small {
        width: 320px;
      }

      .ui-dialog-header {
        display: flex;
        align-items: center;
        padding: 24px 24px 8px;

        .ui-dialog-header-text {
          flex-grow: 1;
          font-size: 22px;
          display: flex;
          align-items: center;
          margin: 0;
          font-weight: normal;
        }

        .ui-dialog-close-button {
          margin-top: -12px;
          margin-right: -8px;
          margin-left: auto;

          &:hover:not([disabled]),
          body[modality="keyboard"] &:focus {
            .ui-icon {
              color: rgba($color-black, 0.8);
            }
          }

          .ui-icon {
            font-size: 20px;
            color: rgba($color-black, 0.4);
          }

          &[disabled] {
            opacity: 0.5;
          }
        }
      }

      .ui-dialog-body {
        padding: 16px 24px 24px;
      }

      .ui-dialog-footer {
        margin-top: -8px;
        padding: 24px;
        padding-top: 8px;

        &,
        [slot] {
          display: flex;
          justify-content: flex-end;
        }

        .ui-dialog-footer-left,
        [slot].ui-dialog-footer-left {
          justify-content: flex-start;
        }

        .ui-button {
          margin-left: 8px;

          &:first-child {
            margin-left: 0;
          }
        }
      }
    }
  }
}

.ui-dialog-fade-enter,
.ui-dialog-fade-leave {
  opacity: 0;
}

.ui-dialog-scale-enter,
.ui-dialog-scale-leave {
  opacity: 0;

  .ui-dialog {
    transform: scale(1.1);
  }
}
</style>
