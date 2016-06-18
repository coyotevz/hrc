<template>
  <mdl-card class="reset-height" :title="employeeName"></mdl-card>
</template>

<script>
export default {
  props: ['employee'],
  computed: {
    employeeName () {
      let emp = this.employee
      return `${emp.last_name}, ${emp.first_name}`
    }
  }
}
</script>
