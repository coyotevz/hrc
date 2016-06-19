<template>
  <div class="employees-layout mdl-grid">
    <div v-for="employee in employees" class="mdl-cell mdl-cell--4-col">
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
  .employees-layout {
    max-width: 1024px;
  }
</style>
