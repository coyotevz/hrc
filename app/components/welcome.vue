<template>
  <div class="welcome-page">
    <h2>Human Resource</h2>
    <p>An application to manage and track small people teams</p>
    <mdl-anchor-button raised primary v-mdl-ripple-effect v-link="{ name: 'employees' }">
      Let's start
    </mdl-button>
  </div>
</template>

<style lang="scss">
  .welcome-page {
    margin: auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    max-width: 400px;
    height: 100vh;

    h2 {
      text-align: center;
      margin: 12px 0;
    }

    p {
      font-size: 16px;
      text-align: center;
    }
  }
</style>
