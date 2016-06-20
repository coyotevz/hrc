<template>
  <mdl-card class="reset-height">
    <div slot="title" class="mdl-card__title">
      <h2 class="mdl-card__title-text ellipsis-text">{{ employee.last_name }}, {{ employee.first_name }}</h2>
    </div>
    <div slot="supporting-text" class="mdl-card__supporting-text">
      Elit officiis dolor harum veritatis ipsam? Ipsum ut id quis officiis dicta! Minus quibusdam iure voluptatibus maxime et! Perferendis expedita sit quod doloribus soluta. Accusamus optio consequuntur cupiditate recusandae porro.
    </div>
  </mdl-card>
</template>

<script>
export default {
  props: ['employee']
}
</script>

<style scoped>
  .mdl-card {
    width: initial;
  }
</style>
