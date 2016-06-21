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
      <mdl-dialog v-ref:add-dialog title="New employee">
        <employee-form :employee="newEmployee"></employee-form>
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
import EmployeeForm from './employee.form'

export default {
  data () {
    return {
      employees: [],
      newEmployee: {}
    }
  },
  components: {
    EmployeeCard,
    EmployeeForm
  },
  methods: {
    showDialog () {
      this.$refs.addDialog.open()
      this.$nextTick(() => this.$refs.addDialog.$el.querySelector('input').focus())
    },
    okDialog () {
      this.$refs.addDialog.close()
      this.saveNewEmployee()
      this.resetNewEmployee()
    },
    cancelDialog () {
      this.$refs.addDialog.close()
      this.resetNewEmployee()
    },
    saveNewEmployee () {
      return this.$http.post('employees/validation', this.newEmployee)
        .then(response => {
          if (response.data.error) {
            console.log(response.data.messages)
          }
        })
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
