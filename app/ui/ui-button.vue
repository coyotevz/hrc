<template>
  <button class="ui-button" :class="styleClasses" v-disabled="disabled || loading"
    v-el:button>
    <div class="ui-button-content" :class="{ 'invisible': loading }">
      <ui-icon class="ui-button-icon" :class="{ 'position-right': iconRight }"
        :icon="icon" v-if="showIcon"></ui-icon>

      <div class="ui-button-text">
        <slot>
          <span v-text="text"></span>
        </slot>
      </div>

      <ui-icon class="ui-button-dropdown-icon" icon="&#xE5C5;"
        v-if="!iconRight && showDropdownIcon && (hasDropdownMenu || hasPopover)">
      </ui-icon>
    </div>

    <!--ui-progress-circular class="ui-button-spinner" :color="spinnerColor"
      :size="18" :stroke="4.5" disable-transition v-show="loading">
    </ui-progress-circular-->

    <ui-ripple-ink v-if="!hideRippleInk && !disabled" :trigger="$els.button">
    </ui-ripple-ink>

    <!--ui-menu class="ui-button-dropdown-menu" :trigger="$els.button"
      :options="menuOptions" :show-icons="showMenuIcons"
      :show-secondary-text="showMenuSecondaryText" :opne-on="openDropdownOn"
      @option-selected="menuOptionSelect" :dropdown-position="dropdownPosition"
      v-if="hasDropdownMenu"></ui-menu-->

    <!--ui-popover :trigger="$els.button" :open-on="openDropdownOn"
      v-if="hasPopover">
      <slot name="popover"></slot>
    </ui-popover-->

  </button>
</template>

<script>
import UiIcon from './ui-icon'

import disabled from './directives/disabled'

import showRippleInk from './mixins/show-ripple-ink'

export default {
  name: 'ui-button',

  props: {
    flat: {
      type: Boolean,
      default: false
    },
    clear: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'default', // 'default', 'primary', 'accent', 'success', 'warning' or 'danger'
      coerce (color) {
        return 'color-' + color
      }
    },
    text: String,
    icon: String,
    iconRight: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    showDropdownIcon: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    styleClasses () {
      let classes = [this.color]
      if (this.flat && this.clear) {
        console.warn('Must specefy one type of ui-button: flat or clear')
      }
      if (this.flat) {
        classes.push('ui-button-flat')
      } else if (!this.clear) {
        classes.push('ui-button-raised')
      }
      if (this.hasDropdownMenu || this.hasPopover) {
        classes.push('has-dropdown')
      }
      return classes
    },

    spinnerColor () {
      if (this.color === 'color-default' || this.flat) {
        return 'black'
      }
      return 'white'
    },

    showIcon () {
      return Boolean(this.icon)
    }
  },

  components: {
    UiIcon
  },

  mixins: [
    showRippleInk
  ],

  directives: {
    disabled
  }
}
</script>

<style lang="scss">
@import '../scss/variables';

.ui-button {
  font-family: $font-stack;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0;
  line-height: 36px;

  background: none;
  overflow: hidden;
  outline: none;
  border: none;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  touch-action: manipulation; // IE
  cursor: default;

  border-radius: 2px;
  padding: 0 16px;
  min-width: 64px;
  height: 36px;

  &::-moz-focus-inner {
    border: 0;
  }

  &.autofocus:focus,
  body[modality="keyboard"] &:focus {
    outline-style: solid;
    outline-width: 2px;
    outline-offset: 2px;
  }

  &[disabled] {
    opacity: 0.6;
  }

  &:not([disabled]) {
    cursor: pointer;
  }

  .ui-button-dropdown-menu {
    display: none;
  }

  .ui-button-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &.ui-button-raised {
    box-shadow: 0 2px 2px rgba($color-black, 0.14),
                0 3px 1px -2px rgba($color-black, 0.2),
                0 1px 5px 0 rgba($color-black, 0.12);
    transition: box-shadow 0.2s;

    &.autofocus:focus,
    body[modality="keyboard"] &:focus {
      outline: none;
      box-shadow: 0 0 5px rgba($color-black, 0.22), 0 3px 6px rgba($color-black, 0.3);
    }
  }

  &.color-primary,
  &.color-accent,
  &.color-success,
  &.color-warning,
  &.color-danger {
    color: white;

    .ui-ripple-ink .ripple.held {
      opacity: 0.5;
    }
  }

  &.color-default {
    color: $text-color-primary;
    background-color: $palette-grey-200;

    &:hover:not([disabled]),
    &.dropdown-open {
      // background-color: darken($palette-grey-200, 7.5%);
    }

    &.autofocus:focus,
    body[modality="keyboard"] &:focus {
      background-color: darken($palette-grey-200, 15%);
      outline-color: darken($palette-grey-200, 30%);
    }

    .ui-ripple-ink .ripple.held {
      opacity: 0.2;
    }

    .ui-button-icon,
    .ui-button-dropdown-icon {
      color: $text-color-secondary;
    }
  }

  &.color-primary {
    background-color: $color-primary;

    &.autofocus:focus,
    body[modality="keboard"] &:focus {
      outline-color: darken($color-primary, 20%);
    }
  }

  &.color-accent {
    background-color: $color-accent;

    &.autofocus:focus,
    body[modality="keyboard"] &:focus {
      outline-color: darken($color-accent, 20%)
    }
  }

  &.color-success {
    background-color: $color-success;

    &.autofocus:focus,
    body[modality="keyboard"] &:focus {
      outline-color: darken($color-success, 25%)
    }
  }

  &.color-warning {
    background-color: $color-warning;

    &.autofocus:focus,
    body[modality="keyboard"] &:focus {
      outline-color: darken($color-warning, 25%)
    }
  }

  &.color-danger {
    background-color: $color-danger;

    &.autofocus:focus,
    body[modality="keyboard"] &:focus {
      outline-color: darken($color-danger, 25%)
    }
  }

  &.ui-button-clear {
    background: transparent;

    &:hover:not([disabled]),
    &.dropdown-open {
      background-color: $palette-grey-200;
    }

    &.color-default { color: $text-color-primary; }
    &.color-primary { color: $color-primary; }
    &.color-accent  { color: $color-accent; }
    &.color-success { color: $color-success; }
    &.color-danger  { color: $color-danger; }
    &.color-warning { color: $color-warning; }
  }
}
</style>
