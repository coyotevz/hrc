<template>
  <header class="ui-toolbar" :class="styleClasses">

    <div class="ui-toolbar-left">
      <ui-icon-button class="ui-toolbar-nav-icon" clear
        :color="iconColor" :icon="navIcon" @click="navIconClick"
        v-if="!hideNavIcon"></ui-icon-button>

      <div class="ui-toolbar-brand" v-if="showBrand">
        <slot name="brand">
          <div class="ui-toolbar-brand-text" v-text="brand"></div>
        </slot>
      </div>
    </div>

    <div class="ui-toolbar-center">
      <div class="ui-toolbar-divider" v-if="!hideBrandDivider && showBrand">
      </div>
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
import UiIconButton from './ui-icon-button'

export default {
  name: 'ui-toolbar',

  props: {
    title: String,
    brand: String,
    colored: {
      type: Boolean,
      default: false
    },
    textColor: {
      type: String,
      default: null
    },
    hideBrand: {
      type: Boolean,
      default: false
    },
    hideBrandDivider: {
      type: Boolean,
      default: false
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
      if (this.showBrand) {
        classes.push('with-brand')
      }
      return classes
    },

    showBrand () {
      return !this.hideBrand && this.brand !== undefined
    },

    iconColor () {
      return this.colored ? 'white' : 'black'
    }
  },

  methods: {
    navIconClick () {
      this.$dispatch('nav-icon-clicked')
    }
  },

  components: {
    UiIconButton
  }
}
</script>

<style lang="scss">
@import '../scss/variables';

.ui-toolbar {
  font-family: $font-stack;
  display: flex;
  height: $header-height;
  align-items: center;
  font-size: $header-font-size;
  position: relative;
  flex-shrink: 0;

  &:not(.ui-toolbar-raised):not(.ui-toolbar-colored) {
    border-bottom: 1px solid $color-primary-divider;
  }

  &.text-color-black {
    color: $text-color-primary;

    .ui-toolbar-divider {
      border-left-color: $color-primary-divider;
    }
  }

  &.text-color-white {
    color: $color-white;

    .ui-toolbar-divider {
      border-color: rgba($color-white, 0.4)
    }
  }

  .ui-icon-button {
    width: 48px;
    height: 48px
  }
}

.ui-toolbar-raised {
  box-shadow: 0 0 2px $color-primary-divider, 0 2px 2px rgba($color-black, 0.2);
}

.ui-toolbar-clear {
  background-color: transparent;
  box-shadow: none;
  border: none;
}

.ui-toolbar-default {
  background-color: $color-white;
}

.ui-toolbar-colored {
  background-color: $color-primary;
}

.ui-toolbar-left {
  display: flex;
  align-items: center;
  flex-shrink: 0;

  .width-brand & {
    width: $brand-holder-width;
  }
}

.ui-toolbar-brand-text {
  padding-right: 8px;
  flex-grow: 1;
}

.ui-toolbar-nav-icon {
  margin-right: 8px;
}

.ui-toolbar-brand {
  min-width: 160px;
}

.ui-toolbar-center {
  display: flex;
  flex-grow: 1;
}

.ui-toolbar-divider {
  border-left-width: 1px;
  border-left-style: solid;
  height: 24px;
  margin-right: 24px;
}

.ui-toolbar-right {
  flex-shrink: 0;
  margin-left: auto;

  [slot="actions"] {
    display: flex;
  }
}

</style>
