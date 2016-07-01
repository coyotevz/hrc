<template>
  <ui-card class="reset-height">
    <div slot="title" class="ui-card-title">
      <h2 class="ui-card-title-text ellipsis-text">{{ employee.last_name }}, {{ employee.first_name }}</h2>
    </div>
    <div slot="supporting-text" class="ui-card-supporting-text">
      Elit officiis dolor harum veritatis ipsam? Ipsum ut id quis officiis dicta! Minus quibusdam iure voluptatibus maxime et! Perferendis expedita sit quod doloribus soluta. Accusamus optio consequuntur cupiditate recusandae porro.
    </div>
  </mdl-card>
</template>

<script>
import UiCard from 'ui/ui-card'

export default {
  props: ['employee'],
  components: {
    UiCard
  }
}
</script>
