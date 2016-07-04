<template>
  <div class="ui-textfield" :class="styleClass">
    <div class="ui-textfield-content">

      <input v-if="!multiline" class="ui-textfield-input" :type="type" :id="id"
        v-model="value|trim" :placeholder="placeholder" :name="name">

      <textarea v-else class="ui-textfield-textarea" v-model="value|trim"
        :placeholder="placeholder" :name="name"></textarea>

      <label :for="id" class="ui-textfield-label" v-text="label"
        v-if="!hideLabel"></label>
      <div :for="id" class="ui-textfield-feedback"></div>
    </div>
  </div>

  <!--div class="ui-textfield">
    <div class="ui-textfield-content">

      <label class="ui-textfield-label">
        <div class="ui-textfield-label-text" v-text="label" v-if="!hideLabel"></div>

        <input v-if="!multiline" class="ui-textfield-input" :type="type"
          v-model="value | trim">
        <textarea v-else class="ui-textfield-textarea" v-model="value | trim">
        </textarea>
      </label>

      <div class="ui-textfield-feedback">
      </div>

    </div>
  </div-->
</template>

<script>
import disabled from './directives/disabled'

export default {
  name: 'ui-textfield',

  props: {
    id: String,
    name: String,
    type: {
      type: String,
      default: 'text'
    },
    label: String,
    floatingLabel: String,
    value: {
      type: [String, Number],
      default: '',
      twoWay: true
    },
    placeholder: String,
    helpText: String,
    multiline: {
      type: Boolean,
      default: false
    },
    trimValue: {
      type: Boolean,
      default: true
    },
    valid: {
      type: Boolean,
      default: true,
      twoWay: true
    },
    dirty: {
      type: Boolean,
      default: false,
      twoWay: true
    }
  },

  computed: {
    styleClass () {
      return {
        'disabled': this.disabled,
        'invalid': !this.valid,
        'dirty': this.dirty,
        'active': this.active,
        'has-placeholder': this.placeholder,
        'has-label': !this.hideLabel,
        'is-multi-line': this.multiline,
        'icon-right': this.iconRight,
        'has-counter': this.maxLength
      }
    }
  },

  filters: {
    trim: {
      write (value) {
        if (this.type !== 'number' && this.trimValue) {
          return value.trim()
        }
        return value
      }
    }
  },

  data () {
    return {
      active: false,
      initialValue: '',
      validationError: ''
    }
  },

  created () {
    // Cache value for later reset
    this.initialValue = this.value
  },

  directives: {
    disabled
  }
}
</script>

<!--script>
export default {
  data () {
    return {
      value: null
    }
  },

  filters: {
    trim: {
      // Trim the value when it's wirtten to the model
      write (value) {
        if (this.type !== 'number' && this.trimValue) {
          return value.trim()
        }
        return value
      }
    }
  }
}
</script-->

<style lang="scss">
@import "../scss/variables";

$textfield-font-size: 16px;

.ui-textfield {
  position: relative;
  font-size: $textfield-font-size;
  display: inline-block;
  width: 300px;
  max-width: 100%;
  margin: 0;
  padding: 20px 0;

  .ui-textfield-input {
    border: none;
    border-bottom: 1px solid rgba($color-black, .12);
    display: block;
    font-size: $textfield-font-size;
    font-family: Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 4px 0;
    width: 100%;
    background: none;
    text-align: left;
    color: inherit;
  }

  .ui-textfield-label {
    bottom: 0;
    color: rgba($color-black, 0.26);
    font-size: 16px;
    left: 0;
    right: 0;
    pointer-events: none;
    position: absolute;
    display: block;
    top: 24px;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-align: left;

    &:after {
      background-color: #009688;
      bottom: 20px;
      content: '';
      height: 2px;
      left: 45%;
      position: absolute;
      transition-duration: .2s;
      transition-timing-function: cubic-bezier(.4,0,.2,1);
      visibility: hidden;
      width: 10px;
    }
  }

  &.is-dirty,
  &.has-placeholder {
    .ui-textfield-label {
      visibility: hidden;
    }
  }
}
</style>

<!--style lang="scss">
@import "../scss/variables";

.ui-textfield {
  font-family: $font-stack;
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;

  &:hover:not(.disabled):not(.invalid) {
    .ui-textfield-label-text {
      color: $input-label-color-hover;
    }

    .ui-textfield-input,
    .ui-textfield-textarea {
      border-bottom-color: $input-border-color-hover;
    }
  }

  &.active:not(.disabled) {
    .ui-textfield-input,
    .ui-textfield-textarea {
      border-bottom-width: 2px;
    }

    &:not(.invalid) {
      .ui-textfield-label-text,
      .ui-textfield-icon {
        color: $input-border-color-active;
      }
      .ui-textfield-input,
      .ui-textfield-textarea {
        border-bottom-color: $input-border-color-active;
      }
    }
  }

  .ui-textfield-input,
  .ui-textfield-textarea {
    cursor: auto;
    background: none;
    outline: none;
    border: none;
    padding: 0;
    display: block;

    width: 100%;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: $input-border-color;

    transition: border 0.1s ease;

    color: $input-color;
    font-weight: normal;
    font-size: 16px;
    font-family: $font-stack;
  }
}

.t-ui-textfield {
  position: relative;
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  width: 300px;
  max-width: 100%;
  margin: 0;
  padding: 20px 0;

  // Align buttons, if used.
  & .ui-button {
    position: absolute;
    bottom: 20px;
  }

  &.align-right {
    text-align: right;
  }

  &.full-width {
    width: 100%;
  }

  .ui-textfield-input {
    border: none;
    border-bottom: 1px solid $color-primary-divider;
    display: block;
    font-size: 16px;
    margin: 0;
    padding: 4px 0;
    width: 100%;
    background: none;
    text-align: left;
    color: inherit;

    &[type="number"] {
      -moz-appearance: textfield;
    }

    &[type="number"]::-webkit-inner-spin-button,
    &[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:focus {
      outline: none;
    }
  }

  &.is-focused .ui-textfield-input {
    outline: none;
  }

  &.is-invalid .ui-textfield-input {
    border-color: $palette-red-A700;
  }

  &.is-disabled .ui-textfield-input {
    background-color: transparent;
    border-bottom: 1px dotted $color-primary-divider;
  }
}

.ui-textfield-label {
  .ui-textfield-floating-label & {
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
}
</something-->
