<template>
  <div class="employees-layout mdl-grid">
    <div v-for="employee in employees" class="mdl-cell mdl-cell--4-col">
      <employee-card :employee="employee"></employee-card>
    </div>
    <mdl-tooltip for="add-button" class="mdl-tooltip--top">Add Employee (ctrl+a)</mdl-tooltip>
    <mdl-button id="add-button" v-mdl-ripple-effect accent fab
      @click="showDialog()">
      <i class="material-icons">add</i>
    </mdl-button>
    <div v-transfer-dom>
      <mdl-dialog v-ref:add-dialog title="Add new employee">
        <div>
          <mdl-textfield floating-label="Name" :value.sync="newEmployee.first_name" autofocus></mdl-textfield>
          <mdl-textfield floating-label="Last Name" :value.sync="newEmployee.last_name"></mdl-textfield>
        </div>
        <template slot="actions">
          <mdl-button v-mdl-ripple-effect @click.stop="okDialog()" primary>Ok</mdl-button>
          <mdl-button v-mdl-ripple-effect @click.stop="cancelDialog()">Cancel</mdl-button>
        </template>
      </mdl-dialog>
    </div>
  </div>
</template>

<script>
import EmployeeCard from './employee.card'

export default {
  data () {
    return {
      employees: [],
      newEmployee: {
        first_name: '',
        last_name: ''
      }
    }
  },
  components: {
    EmployeeCard
  },
  methods: {
    showDialog () {
      this.$refs.addDialog.open()
      console.log('focus first input please!')
    },
    okDialog () {
      this.$refs.addDialog.close()
      console.log('Save this data:', this.newEmployee)
      this.resetNewEmployee()
    },
    cancelDialog () {
      this.$refs.addDialog.close()
      this.resetNewEmployee()
    },
    resetNewEmployee () {
      this.newEmployee.first_name = ''
      this.newEmployee.last_name = ''
    }
  },
  created () {
    window.addEventListener('keydown', event => {
      if (event.ctrlKey && event.key === 'a') {
        this.showDialog()
        event.preventDefault()
      }
    })
  },
  beforeDestroy () {
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
