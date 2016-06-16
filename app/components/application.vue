<template>
  <div id="application">
    <v-view class="application-body">
      <h1>Human Resource Application</h1>
      <p>An application to manage and track small people teams</p>
    </v-view>
    <mdl-button v-mdl-ripple-effect>Ripple Effect</mdl-button>
  </div>
</template>

<style lang="scss">
  html {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0;
  }

  #application {
    color: #2c3e50;
    max-width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;

    a {
      color: #42b983;
      text-decoration: none;
    }
  }
</style>
