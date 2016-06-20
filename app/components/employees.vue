<template>
  <div class="employees-layout mdl-grid">
    <div v-for="employee in employees" class="mdl-cell mdl-cell--4-col">
      <employee-card :employee="employee"></employee-card>
    </div>
    <mdl-tooltip for="add-button" class="mdl-tooltip--top">Add Employee</mdl-tooltip>
    <mdl-button id="add-button" v-mdl-ripple-effect accent fab>
      <i class="material-icons">add</i>
    </mdl-button>
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

  #add-button {
    position: fixed;
    right: 0;
    bottom: 0;
    margin-right: 24px;
    margin-bottom: 24px;
    z-index: 12;
  }
</style>
