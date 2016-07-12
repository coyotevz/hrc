<template>
  <div class="ui-textfield" :class="styleClass">
    <div class="ui-textfield-content">

      <input :id="id" class="ui-textfield-input" :type="type" :name="name"
        @focus="_focus" @blur="_blur" @change="_change" @keydown="_keydown"
        v-model="value" :disabled="disabled">

      <label :for="id" class="ui-textfield-label" v-text="label || floatingLabel">
      </label>

      <div class="ui-textfield-feedback" v-if="showFeedback">
        <div class="ui-textfield-error" transition="ui-textfield-feedback-toggle"
          v-text="validationError" v-show="!valid"></div>
        <div class="ui-textfield-help" transition="ui-textfield-feedback-toggle"
          v-text="helpText" v-else></div>
      </div>

      </div>
    </div>
  </div>
</template>

<script>
import Validator from 'validatorjs'
import disabled from './directives/disabled'

export default {
  name: 'ui-textfield',

  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      twoWay: true
    },
    type: {
      type: String,
      default: 'text' // 'text', 'search', 'email', 'url', 'tel' and 'number'
    },
    label: String,
    floatingLabel: String,
    helpText: String,
    disabled: {
      type: Boolean,
      default: false
    },
    validation: [String, Array, Object]
  },

  computed: {
    id () {
      return 'textfield-' + this.name
    },
    styleClass () {
      return {
        'disabled': this.disabled,
        'invalid': !this.valid,
        'dirty': this.dirty,
        'active': this.active,
        'has-content': Boolean(this.value === 0 || this.value),
        'floating-label': this.floatingLabel !== undefined
      }
    },
    showFeedback () {
      return Boolean(this.helpText || this.validation)
    }
  },

  methods: {
    _focus (e) {
      this.active = true
      this.$dispatch('focus', e)
    },
    _blur (e) {
      this.active = false
      this._checkDirty()
      this.validate()
      this.$dispatch('blur', e)
    },
    _checkDirty () {
      this.dirty = this.initialValue !== this.value
    },
    _change (e) {
      this.$dispatch('change', e)
    },
    _keydown (e) {
      this.$dispatch('keydown', e)
    },

    validate () {
      if (!this.validation) {
        return
      }

      let rules
      let messages = null

      if (typeof this.validation === 'string' ||
          this.validation instanceof Array) {
        rules = this.validation
      } else if (this.validation instanceof Object) {
        // keys are rules name, values are arguments of rule or object with
        // arguments and messages, ex:
        // { required: true, regex: { rule: /\d/, message: 'invalid value' } }
        rules = []
        messages = {}
        for (let key in this.validation) {
          console.log('key:', key, 'value:', this.validation[key])
          let val = this.validation[key]
          let arg, message
          if (val instanceof Object) {
            // second case expect rule and message
            arg = val['rule']
            message = val['message'] || null
          } else {
            // first case expect argument for key
            arg = val
          }
          rules.push(key+':'+arg)
          if (message) {
            messages[key] = message
          }
        }
      } else {
        console.warn('Unknown typeof this.validation')
        return
      }

      let validation = new Validator(
        { value: this.value }, // input
        { value: rules }, // rules
        messages // custom messages
      )
      validation.setAttributeNames({ value: this.name.replace(/_/g, ' ') })
      this.valid = validation.passes()
      if (!this.valid) {
        this.validationError = validation.errors.first('value')
      }
    }
  },

  watch: {
    value () {
      this._checkDirty()
      this.validate()
    }
  },

  data () {
    return {
      active: false,
      dirty: false,
      valid: true,
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
  font-family: $font-stack;
  display: inline-block;
  width: 300px;
  max-width: 100%;
  margin: 0;
  padding: 20px 0;

  &:hover:not(.disabled):not(.invalid):not(.has-content):not(.active) {
    .ui-textfield-label {
      color: $input-label-color-hover;
    }

    .ui-textfield-input {
      border-bottom-color: $input-border-color-hover;
    }
  }

  .ui-textfield-input {
    border: none;
    border-bottom: 1px solid rgba($color-black, 0.12);
    display: block;
    outline: none;
    font-size: $textfield-font-size;
    font-family: $font-stack;
    width: 100%;
    background: none;
    text-align: left;
    color: inherit;
  }

  .ui-textfield-label {
    color: rgba($color-black, 0.26);
    font-size: $textfield-font-size;
    bottom: 0;
    left: 0;
    right: 0;
    top: 20px;
    pointer-events: none;
    position: absolute;
    display: block;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-align: left;

    &:after {
      background-color: $input-border-color-active;
      bottom: 20px;
      content: '';
      height: 2px;
      left: 45%;
      position: absolute;
      transition-duration: .2s;
      transition-timing-function: cubic-bezier(.4,0,.2,1);
      width: 10px;
      visibility: hidden;
    }
  }

  &.has-content:not(.floating-label) .ui-textfield-label {
    visibility: hidden;
  }

  &.active .ui-textfield-label:after {
    left: 0;
    visibility: visible;
    width: 100%;
  }

  &.floating-label {
    .ui-textfield-label {
      transition-duration: .2s;
      transition-timing-function: cubic-bezier(.4,0,.2,1);
    }

    &.active,
    &.has-content {
      .ui-textfield-label {
        color: $input-label-color-active;
        font-size: 12px;
        top: 4px;
        visibility: visible;
      }
    }
  }

  &.disabled {
    .ui-textfield-input {
      color: rgba($color-black, 0.38);
      border-bottom-style: dotted;
      border-bottom-width: 2px;
    }
    .ui-textfield-feedback {
      opacity: 0.8;
    }
  }

  .ui-textfield-feedback {
    position: absolute;
    display: block;
    font-size: 14px;
    margin: 0;
    min-height: 20px;
    overflow: hidden;
    padding-top: 2px;

    .ui-textfield-help {
      color: rgba($color-black, 0.38);
    }
  }

  &.invalid {
    &.floating-label.active,
    &.floating-label.has-content {
      .ui-textfield-label {
        color: $input-label-color-invalid;
      }
    }

    .ui-textfield-label:after {
      background-color: $input-border-color-invalid;
    }
    .ui-textfield-error {
      color: $input-color-invalid;
    }
    .ui-textfield-input {
      border-bottom-color: $input-border-color-invalid;
    }
  }
}

.ui-textfield-feedback-toggle-transition {
  transition-property: opacity, margin-top;
  transition-duration: .3s;
  margin-top: 0;
  opacity: 1;
}

.ui-textfield-feedback-toggle-enter,
.ui-textfield-feedback-toggle-leave {
  margin-top: -20px;
  opacity: 0;
}
</style>
