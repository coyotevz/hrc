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

      <div class="ui-textbox-feedback">
        
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
