<template>
  <div class="ui-card">

    <div class="ui-card-title" v-if="!$els.title">
      <slot name="title">
        <h2 v-el:title class="ui-card-title-text" v-if="title" v-text="title"></h2>
      </slot>
    </div>

    <!--slot name="title" v-if="title">
      <div class="ui-card-title">
        <h2 class="ui-card-title-text" v-text="title"></h2>
      </div>
    </slot-->

    <slot name="subtitle" v-if="subtitle">
      <div class="ui-card-subtitle-text" v-text="subtitle"></div>
    </slot>

    <slot name="media" v-if="media">
      <img :src="media">
    </slot>

    <slot name="supporting-text" v-if="supportingText">
      <div class="ui-card-supporting-text" v-text="supportingText"></div>
    </slot>

    <slot name="actions" v-if="actions">
      <div class="ui-card-actions">
        <ui-button clear color="primary">{{ actionsText }}</ui-button>
      </div>
    </slot>

    <slot name="menu" v-if="menu">
      <div class="ui-card-menu"></div>
    </slot>

  </div>
</template>

<script>
import UiButton from './ui-button'

const slots = [
  'title',
  'subtitle',
  'media',
  'supportingText',
  'actions',
  'menu'
]

export default {
  name: 'ui-card',

  props: {
    title: {
      type: String,
      default: true
    },
    subtitle: {
      type: String,
      default: true
    },
    media: {
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
    },
    actionsText: String
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
  },

  components: {
    UiButton
  }
}
</script>

<style lang="scss">
@import '../scss/variables';

.ui-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 330px;
  position: relative;
  background: $color-white;
  border-radius: $card-border-radius;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),
              0 3px 1px -2px rgba(0,0,0,.2),
              0 1px 5px 0 rgba(0,0,0,.14);

  .ui-card-title {
    align-items: center;
    color: $card-title-color;
    display: flex;
    line-height: normal;
    padding: 16px;

    .ui-card-title-text {
      color: inherit;
      align-self: flex-end;
      display: flex;
      font-size: $card-title-font-size;
      font-weight: $card-title-font-weight;
      line-height: normal;
      overflow: hidden;
      margin: 0;
    }
  }

  .ui-card-supporting-text {
    color: $card-text-color;
    font-size: $card-text-font-size;
    line-height: $card-text-line-height;
    padding: 16px;
    width: 90%;
    overflow: hidden;
  }

  .ui-card-actions {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: 8px;
    background-color: transparent;
  }
}
</style>
