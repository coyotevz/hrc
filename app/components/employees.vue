<template>
  <div class="employees-layout ui-grid">
    <div v-for="employee in employees" class="ui-cell">
      <employee-card :employee="employee"></employee-card>
    </div>

    <ui-fab id="add-button" icon="add" @click="showDialog()" color="accent"
      tooltip="Add Employee" tooltip-position="top center"></ui-fab>

    <ui-dialog v-ref:add-dialog v-transfer-dom header="New employee">
      <employee-form v-ref:employee-form :employee="newEmployee"></employee-form>
      <template slot="footer">
        <ui-button @click.stop="okDialog" primary>Ok</ui-button>
        <ui-button @click.stop="cancelDialog">Cancel</ui-button>
      </template>
    </ui-dialog>

  </div>
</template>

<script>
import UiFab from 'ui/ui-fab'
import UiDialog from 'ui/ui-dialog'
import UiButton from 'ui/ui-button'

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
    UiButton,

    EmployeeCard,
    EmployeeForm
  },
  methods: {
    showDialog () {
      console.log('show dialog')
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
