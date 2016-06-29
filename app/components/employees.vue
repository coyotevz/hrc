<template>
  <div class="employees-layout ui-grid">
    <div v-for="employee in employees" class="ui-cell">
      <employee-card :employee="employee"></employee-card>
    </div>

    <ui-fab id="add-button" icon="add" @click="showDialog()" color="accent"
      tooltip="Add Employee" tooltip-position="top center"></ui-fab>

    <ui-dialog v-ref:add-dialog :show.sync="false"></ui-dialog>

    <!--div v-transfer-dom>
      <mdl-dialog v-ref:add-dialog title="New employee">
        <employee-form v-ref:employee-form :employee="newEmployee"></employee-form>
        <template slot="actions">
          <mdl-button v-mdl-ripple-effect @click.stop="okDialog()" primary>Ok</mdl-button>
          <mdl-button v-mdl-ripple-effect @click.stop="cancelDialog()">Cancel</mdl-button>
        </template>
      </mdl-dialog>
    </div-->
  </div>
</template>

<script>
import UiFab from 'ui/ui-fab'
import UiDialog from 'ui/ui-dialog'

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
    UiFab,
    UiDialog,

    EmployeeCard,
    EmployeeForm
  },
  methods: {
    showDialog () {
      console.log('show dialog')
      // this.$refs.addDialog.open()
      this.$refs.addDialog.show = true
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
      return this.$refs.employeeForm.validate().then(data => {
        if (data.isValid) {
          this.$http.post('employees', this.newEmployee)
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
