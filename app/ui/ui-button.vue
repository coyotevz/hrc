<template>
  <button class="ui-button">
    <div class="ui-button-text">
      <slot>
        <span v-text="text"></span>
      </slot>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>
