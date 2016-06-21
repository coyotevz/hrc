<template>
  <div>
    <mdl-textfield floating-label="Name" :value.sync="employee.first_name"></mdl-textfield>
    <mdl-textfield floating-label="Last Name" :value.sync="employee.last_name"></mdl-textfield>
  </div>
</template>

<script>
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
  }
}
</script>
