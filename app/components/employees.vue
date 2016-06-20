<template>
  <div class="employees-layout mdl-grid">
    <div v-for="employee in employees" class="mdl-cell mdl-cell--4-col">
      <employee-card :employee="employee"></employee-card>
    </div>
    <mdl-tooltip for="add-button" class="mdl-tooltip--top">Add Employee</mdl-tooltip>
    <mdl-button id="add-button" v-mdl-ripple-effect accent fab
      @click="$refs.addDialog.open()">
      <i class="material-icons">add</i>
    </mdl-button>
    <div v-transfer-dom>
      <mdl-dialog v-ref:add-dialog title="Add new employee">
        <p>Hello. This is and information message. You can click outside or in the close button to close it.</p>
        <template slot="actions">
          <mdl-button primary>Ok</mdl-button>
          <mdl-button @click.stop="$refs.addDialog.close()">Cancel</mdl-button>
        </template>
      </mdl-dialog>
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

  #add-button {
    position: fixed;
    right: 0;
    bottom: 0;
    margin-right: 24px;
    margin-bottom: 24px;
    z-index: 12;
  }
</style>
