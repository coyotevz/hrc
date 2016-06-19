<template>
  <div class="employees-layout mdl-grid mdl-cell--8-col">
    <div v-for="employee in employees" class="mdl-cell mdl-cell--6-col">
      <employee-card :employee="employee"></employee-card>
    </div>
  </div>
</template>

<script>
import EmployeeCard from './employee.card'

export default {
  components: {
    EmployeeCard
  }
}
</script>

<style>
</style>
