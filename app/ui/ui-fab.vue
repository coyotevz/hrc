<template>
  <button class="ui-fab" :class="styleClasses" :arial-label="ariaLabel || tooltip"
    v-disabled="disabled" v-el:button>
    <ui-icon class="ui-fab-icon" :icon="icon"></ui-icon>
    <ui-ripple-ink :trigger="$els.button" v-if="!hideRippleInk && !disabled"></ui-ripple-ink>
    <ui-tooltip :trigger="$els.button" :content="tooltip" :position="tooltipPosition"
      v-if="tooltip"></ui-tooltip>
  </button>
</template>

<script>
import UiIcon from './ui-icon'

import disabled from './directives/disabled'

import showTooltip from './mixins/show-tooltip'
import showRippleInk from './mixins/show-ripple-ink'

export default {
  name: 'ui-fab',

  props: {
    mini: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'default', // 'default', 'primary' or 'accent'
      coerce (color) {
        return 'color-' + color
      }
    },
    icon: {
      type: String,
      required: true
    },
    ariaLabel: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    styleClasses () {
      let classes = [this.color]
      if (this.mini) {
        classes.push('ui-fab-mini')
      }
      return classes
    }
  },

  components: {
    UiIcon
  },

  mixins: [
    showTooltip,
    showRippleInk
  ],

  directives: {
    disabled
  }
}
</script>

<style lang="scss">
@import '../scss/variables';

.ui-fab {
  position: relative;
  outline: none;
  border: none;
  z-index: $z-index-fab;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 rgba($color-black, 0.2), 0 2px 10px 0 rgba($color-black, 0.16);
  transition: box-shadow 0.3s ease;

  width: 56px;
  height: 56px;

  &.ui-fab-mini {
    width: 40px;
    height: 40px;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &:hover:hot([disabled]),
  body[modality="keyboard"] &:focus {
    box-shadow: 0 8px 17px 0 rgba($color-black, 0.25), 0 6px 20px 0 rgba($color-black, 0.2);
  }

  &:not([disabled]) {
    cursor: pointer;
  }

  &.color-default {
    background-color: $color-white;
    color: $text-color-secondary;

    .ui-fab-icon {
      color: $text-color-secondary;
    }

    .ui-ripple-ink .ripple.held {
      opacity: 0.2;
    }
  }

  &.color-primary,
  &.color-accent {
    color: $color-white;

    .ui-fab-icon {
      color: $color-white;
    }

    .ui-ripple-ink .ripple.held {
      opacity: 0.7;
    }
  }

  &.color-primary {
    background: $color-primary;

    body[modality="keyboard"] &:focus {
      background-color: darken($color-primary, 10%);
    }
  }

  &.color-accent {
    background: $color-accent;

    body[modality="keyboard"] &:focus {
      background-color: darken($color-accent, 10%);
    }
  }

  .ui-ripple-ink {
    border-radius: 50%;
  }

  .ui-fab-icon {
    margin: 0;
    width: initial; // Firefox needs the width and height reset for flexbox centering
    height: initial;
  }
}
</style>
