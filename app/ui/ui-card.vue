<template>
  <div class="ui-card">

    <slot name="title" v-if="title">
      <div class="ui-card-title">
        <h2 class="ui-card-title-text" v-text="title"></h2>
      </div>
    </slot>

    <slot name="subtitle" v-if="subtitle">
      <div class="ui-card-subtitle-text" v-text="subtitle"></div>
    </slot>

    <slot name="supporting-text" v-if="supportingText">
      <div class="ui-card-supporting-text" v-text="supportingText"></div>
    </slot>

    <slot name="actions" v-if="actions">
      <div class="ui-card-actions"></div>
    </slot>

  </div>
</template>

<script>
const slots = [
  'title',
  'subtitle',
  'supportingText',
  'actions'
]

export default {
  props: {
    title: {
      type: String,
      default: true
    },
    subtitle: {
      type: String,
      default: true
    },
    supportingText: {
      type: String,
      default: true
    },
    actions: {
      type: String,
      default: true
    }
  },

  compiled () {
    slots.forEach((slot, pos) => {
      if (this[slot] === true) {
        let el = this.$el.children[pos]
        if (!el.attributes.getNamedItem('slot')) {
          this[slot] = ''
        }
      }
    })
  }
}
</script>
