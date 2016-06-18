<template>
  <div class="employees-layout">
    <div v-for="employee in employees">
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
