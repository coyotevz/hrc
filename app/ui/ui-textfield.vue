<template>
  <div class="ui-textfield" :class="styleClass">
    <div class="ui-textfield-content">

      <input v-if="!multiline" class="ui-textfield-input" :type="type"
        :placeholder="placeholder" :name="name" :id="id"
        @focus="onFocus" @blur="onBlur" @change="onChange" @keydown="onKeydown"
        v-model="value">

      <textarea v-else class="ui-textfield-textarea" :placeholder="placeholder"
        :name="name" :id="id"
        @focus="onFocus" @blur="onBlur" @change="onChange" @keydown="onKeydown"
        v-model="value"></textarea>

      <label :for="id" class="ui-textfield-label" v-text="label || floatingLabel"
        v-if="!hideLabel"></label>
      <div :for="id" class="ui-textfield-feedback" v-if="feedback">
      </div>
    </div>
  </div>
</template>

<script>
import Validator from 'validatorjs'
import disabled from './directives/disabled'

export default {
  name: 'ui-textfield',

  methods: {
    onFocus (e) {
      this.active = true
    },
    onBlur (e) {
      this.active = false
      this.dirty = true
      this.validate()
    },
    onChange (e) {
      this.$dispatch('change')
    },
    onKeydown (e) {
      this.$dispatch('keydown', e)
    },

    validate () {
      if (!this.validationRules || !this.dirty) {
        return
      }

      let data = {
        value: this.value
      }
      let rules = {
        value: this.validationRules
      }
      let validation = new Validator(data, rules, this.validationMessages)
      validation.setAttributeNames({ value: this.name.replace(/_/g, ' ') })
      this.valid = validation.passes()
      if (!this.valid) {
        this.validationError = validation.errors.first('value')
      }
    }
  },

  watch: {
    value () {
      this.dirty = true
      this.validate()
    }
  },

  props: {
    id: String,
    name: String,
    type: {
      type: String,
      default: 'text'
    },
    label: String,
    floatingLabel: String,
    hideLabel: {
      type: Boolean,
      default: false
    },
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
    valid: {
      type: Boolean,
      default: true,
      twoWay: true
    },
    dirty: {
      type: Boolean,
      default: false,
      twoWay: true
    },
    hideValidationErrors: {
      type: Boolean,
      default: false
    },
    validationRules: String,
    validationMessages: Object
  },

  computed: {
    styleClass () {
      return {
        'disabled': this.disabled,
        'invalid': !this.valid,
        'dirty': this.dirty,
        'active': this.active,
        'has-placeholder': this.placeholder,
        'has-content': Boolean(this.value),
        'floating-label': this.floatingLabel !== undefined,
        'has-label': !this.hideLabel,
        'is-multi-line': this.multiline,
        'icon-right': this.iconRight,
        'has-counter': this.maxLength
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
    outline: none;
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

    .ui-textfield.has-content & {
      visibility: hidden;
    }

    &:after {
      background-color: $color-primary;
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

  &.has-content:not(.floating-label) .ui-textfield-label {
    visibility: hidden;
  }

  &.active {
    .ui-textfield-label:after {
      left: 0;
      visibility: visible;
      width: 100%;
    }
  }

  &.floating-label {
    .ui-textfield-label {
      transition-duration: .2s;
      transition-timing-function: cubic-bezier(.4,0,.2,1);
    }

    &.active,
    &.has-content {
      .ui-textfield-label {
        color: $color-primary;
        font-size: 12px;
        top: 4px;
        visibility: visible;
      }
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
