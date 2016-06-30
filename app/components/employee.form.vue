<template>
  <div>
    <ui-textfield floating-label="Name" :value.sync="employee.first_name"></mdl-textfield>
    <ui-textfield floating-label="Last Name" :value.sync="employee.last_name"></mdl-textfield>
  </div>
</template>

<script>
import UiTextfield from 'ui/ui-textfield'

export default {
  props: {
    employee: {
      type: Object,
      required: true
    }
  },
  methods: {
    validate () {
      return this.$http.post('employees/validation', this.employee)
        .then(response => {
          return {
            isValid: Boolean(response.data.error === null),
            messages: response.data.messages || null
          }
        })
    }
  },

  components: {
    UiTextfield
  }
}
</script>
