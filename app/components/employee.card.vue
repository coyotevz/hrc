<template>
  <mdl-card class="reset-height" :title="employeeName">
    <div slot="supporting-text" class="mdl-card__supporting-text">
      Elit officiis dolor harum veritatis ipsam? Ipsum ut id quis officiis dicta! Minus quibusdam iure voluptatibus maxime et! Perferendis expedita sit quod doloribus soluta. Accusamus optio consequuntur cupiditate recusandae porro.
    </div>
  </mdl-card>
</template>

<script>
export default {
  props: ['employee'],
  computed: {
    employeeName () {
      let emp = this.employee
      return `${emp.last_name}, ${emp.first_name}`
    }
  }
}
</script>

<style scoped>
  .mdl-card {
    width: initial;
  }
</style>
