<template>
  <section class="section-ui-card">

    <p><code>ui-card</code> is a user interface element representing a virtual
      piece of paper that contains related data &mdash; such as a photo, some
      text, and a link &mdash; that are all about a single subject.</p>

    <p>Cards are a convenient means of coherently displaying related content
      that is composed of different types of objects. They are also well-suited
      for presenting similar objects whose size or supoprted action can vary
      considerably, like photos with captions of variable length. Cards have a
      constatn with and a variable height, depending on their content.</p>

    <h3>Example</h3>

    <ui-card title="Update" :supporting-text="lorem" actions="actions" actions-text="View updates"></ui-card>

    <pre><code>
    &lt;ui-card title="Update" :supporting-text="lorem" actions="actions" actions-text="View updates"&gt;
    &lt;/ui-card&gt;
    </code></pre>

  </section>
</template>

<script>
import UiCard from '../ui-card'

export default {
  data () {
    return {
      lorem: 'Consectetur optio autem minus odio consectetur molestiae' +
      ' accusantium veritatis odio, illum.'
    }
  },

  components: {
    UiCard
  }
}
</script>
