<template>
<p v-if="error">{{ error }}</p>
<ul class="list">
  <li v-for="employee in objects">
    {{ employee.last_name }}, {{ employee.first_name }} ({{ employee.cuil }})
  </li>
</ul>
<p v-if="objects">Showing {{ objects.length }} of {{ num_results }}</p>
</template>

<script>
export default {
  data () { return {} },
  ready () { this.loadEmployees() },
  methods: {
    loadEmployees () {
      console.log('loadEmployees')
      this.$http.get('employees').then((response) => {
        // response is ok
        this.$set('$data', response.data)
      }, (response) => {
        // handle error
        console.log('error:', response)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
}
</style>
