<template>
  <div class="ui-textfield">
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
  </div>
</template>

<script>
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
</script>

<style lang="scss">
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
</style>
