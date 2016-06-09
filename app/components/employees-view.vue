<template>
<ul class="list">
  <li v-for="employee in objects">
    {{ employee.last_name }}, {{ employee.first_name }} ({{ employee.cuil }})
  </li>
</ul>
<p>Showing {{ objects.length }} of {{ num_results }}</p>
</template>

<script>
export default {
  data () {
    return { }
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
      // this.$set('employees', response.data['objects'])
      this.$set('$data', response.data)
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
