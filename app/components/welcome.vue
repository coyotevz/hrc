<template>
  <div class="welcome-page">
    <h2>Human Resource</h2>
    <p>An application to manage and track small people teams</p>

    <div class="ui-button-group">
      <ui-button color="primary" v-link="{ name: 'employees' }"
        text="Let's start"></ui-button>
      <ui-button color="accent" v-link="{ name: 'demo' }" text="View ui demo">
      </ui-button>
    </div>
  </div>
</template>

<script>
import UiButton from 'ui/ui-button'

export default {
  components: {
    UiButton
  }
}
</script>

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
