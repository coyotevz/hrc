<template>
  <section class="section-ui-ripple-ink">

    <p><code>ui-ripple-ink</code> allows you to show a ripple ink on a material
      when it is touched or clicked. Using CSS, you can customize the ripple
      color and opacity.</p>

    <p>To change the color, set a <code>color</code> property on the containing
      element (which the ripple will inherit as background color) or set a
      <code>background-color</code> property on <code>.ui-ripple-ink
        .ripple</code>.</p>

    <p>To change the opacity, set <code>opacity</code> on <code>.ui-ripple-ink
        .ripple.held</code>.</p>

    <p><code>ui-ripple-ink</code> is used internally by many components,
      including <a v-link="{ name: 'demo.component', params: { componentId:
        'ui-button-demo' } }">Button</a>, <a v-link="{ name: 'demo.component',
        params: { componentId: 'ui-fab-demo' } }">Fab</a>, and <a v-link="{
        name: 'demo.component', params: { componentId: 'ui-icon-button-demo' }
        }">Icon Button</a>.</p>

    <p><b>Note:</b> <code>ui-ripple-ink</code> must be used on containers that
      have <code>position: relative</code> to work properly.</p>

    <h3>Examples</h3>

    <div class="demo">
      <h4>Color: blue</h4>

      <div class="group tv-shows custom-color color-blue">
        <image-pane inline-template :image="show.image" v-for="show in tvShows">
          <div class="image-pane" v-el:show
            :style="{ 'background-image': 'url(' + image + ')' }">
            <ui-ripple-ink :trigger="$els.show"></ui-ripple-ink>
          </div>
        </image-pane>
      </div>

      <pre><code>
      &lt;div class="color-blue" v-el:show :style="{ 'background-image': 'url(some-image.png)' }"&gt;
        &lt;ui-ripple-ink :trigger="$els.show"&gt;&lt;/ui-ripple-ink&gt;
      &lt;/div&gt;
      </code></pre>

      <pre><code>
      .color-blue {
        color: blue;
      }
      </code></pre>

      <h4>Color: orange, opacity: 0.95</h4>

      <div class="group the-simpsons custom-color color-orange custom-opacity">
        <image-pane :image="simpson.image" v-for="simpson in theSimpsons"
          inline-template>
          <div class="image-pane" v-el:portait
            :style="{ 'background-image': 'url(' + image + ')' }">
            <ui-ripple-ink :trigger="$els.portait"></ui-ripple-ink>
          </div>
        </image-pane>
      </div>

      <pre><code>
      &lt;div class="color-orange custom-opacity" v-el:portait :style="{ 'background-image': 'url(some-image.png)' }"&gt;
        &lt;ui-ripple-ink :trigger="$els.portait"&gt;&lt;/ui-ripple-ink&gt;
      &lt;/div&gt;
      </code></pre>

      <pre><code>
      .color-orange {
        color: orange;
      }
      .custom-opacity .ui-ripple-ink .ripple.held {
        opacity: 0.95;
      }
      </code></pre>

      <props-table :props="propsDoc"></props-table>

    </div>

  </section>
</template>

<script>
import UiRippleInk from '../ui-ripple-ink'
import PropsTable from './props-table'

let tvShows = [
  { name: 'Better Call Saul', image: 'http://i.imgur.com/SwZPSS2.jpg' },
  { name: 'Breaking Bad', image: 'http://i.imgur.com/tz6FJeN.jpg' },
  { name: 'Sherlock', image: 'http://i.imgur.com/Pf1TkJY.jpg' },
  { name: 'The Simpsons', image: 'http://i.imgur.com/HJmBlzf.jpg' }
]

let theSimpsons = [
  { value: 'maggie', text: 'Maggie Simpson', image: 'http://i.imgur.com/eK26qtK.jpg' },
  { value: 'lisa', text: 'Lisa Simpson', image: 'http://i.imgur.com/wIb44g9.jpg' },
  { value: 'bart', text: 'Bart Simpson', image: 'http://i.imgur.com/XkEz9zg.jpg' }
]

let propsDoc = [
  { name: 'trigger', type: 'HTMLElement', default: '', description:
    '<b>(Required)</b><br/>An element to attach the click/touch event ' +
    'listeners to. When this element is clicked or touched, a ripple ink will' +
    ' be shown.' }
]

export default {
  data () {
    return {
      propsDoc,
      theSimpsons,
      tvShows
    }
  },

  components: {
    ImagePane: {
      props: ['image'],
      components: {
        UiRippleInk
      }
    },
    PropsTable
  }
}
</script>

<style lang="scss">
@import '../../scss/_variables';

.section-ui-ripple-ink {
  .group {
    display: flex;
    justify-content: center;
  }

  .custom-color {
    &.color-orange {
      color: $palette-orange-500;
    }
    &.color-blue {
      color: $palette-blue-500;
    }

    .ui-ripple-ink .ripple.held {
      opacity: 0.6;
    }
  }

  .custom-opacity {
    .ui-ripple-ink .ripple.held {
      opacity: 0.95;
    }
  }

  .image-pane {
    background-size: cover;
    background-position: 50%;
    margin-right: 16px;
    margin-bottom: 16px;

    position: relative;
  }

  .tv-shows {
    .image-pane {
      width: 120px;
      height: 180px;
    }
  }

  .the-simpsons {
    .image-pane {
      width: 120px;
      height: 120px;
      border-radius: 8px;
    }
  }

}
</style>
