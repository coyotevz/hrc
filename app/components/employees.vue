<template>
  <div class="employees-layout">
    <h3>Employees</h3>
    <ul class="employees-list">
      <li v-for="employee in employees">
        {{ employee.last_name }}, {{ employee.first_name }} ({{ employee.cuil }})
      </li>
    </ul>
  </div>
</template>
