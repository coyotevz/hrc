<template>
  <div id="application" class="ui-layout-container">
    <div class="ui-layout">
      <topbar :title="title"></topbar>
      <drawer :title="title"></drawer>
      <main class="ui-layout-content">
        <v-view class="application-body"></v-view>
      </main>
    </div>
  </div>
</template>

<script>
import Topbar from './topbar'
import Drawer from './drawer'
export default {
  data () {
    return {
      title: 'Employees'
    }
  },
  components: {
    Topbar,
    Drawer
  }
}
</script>
