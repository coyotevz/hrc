<template>
  <header class="mdl-layout__header">
    <div class="mdl-layout-icon"></div>
    <div class="mdl-layout__header-row">
      <span class="mdl-layout__title">{{ title }}</span>
      <div class="mdl-layout-spacer"></div>
      <mdl-tooltip for="app-menu">Open Menu</mdl-tooltip>
      <mdl-button id="app-menu" icon="more_vert" v-mdl-ripple-effect></mdl-button>
      <mdl-menu for="app-menu" v-mdl-ripple-effect class="mdl-menu--bottom-right">
        <mdl-menu-item v-link="{ name: 'about' }">About</mdl-menu-item>
        <mdl-menu-item>Contact</mdl-menu-item>
        <mdl-menu-item>Legal Information</mdl-menu-item>
      </mdl-menu>
    </div>
  </header>
</template>

<script>
  export default {
    props: ['title']
  }
</script>
