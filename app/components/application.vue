<template>
  <div id="application" class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <topbar :title="title"></topbar>
    <drawer :title="title"></drawer>
    <main class="mdl-layout__content mdl-color--grey-100">
      <v-view class="application-body"></v-view>
    </main>
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
