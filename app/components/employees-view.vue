<template>
<ul class="list">
  <li v-for="employee in employees">
    {{ employee.last_name }}, {{ employee.first_name }}
  </li>
</ul>
</template>

<script>
export default {
  data () {
    return { employees: [] }
  },
  ready () {
    this.$http.get('employees').then((response) => {
      // get status
      response.status

      // get all headers
      response.headers()

      // get 'expires' header
      response.headers('expires')

      // set data on vm
      this.$set('employees', response.data['objects'])
    }, (response) => {
      // error callback
    })
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>
