<template>
  <div class="ui-dialog-mask" v-show="show">
    <div class="ui-dialog-wrapper" @click="close" v-el:backdrop>
      <div class="ui-dialog" tabindex="-1" @keydown.esc="close" v-el:container>
        Dialog content
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    close (e) {
      if (this.show) {
        if (e.currentTarget === this.$els.backdrop && e.target !== e.currentTarget) {
          return
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
    }
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
    }
  }
}
</style>
