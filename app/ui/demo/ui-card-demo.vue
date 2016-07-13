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

    <p>You can replace any of the existing content by using slots. Available
      slots are <code>title</code>, <code>subtitle</code>,
      <code>supporting-text</code>, <code>media</code>, <code>actions</code>
      and <code>menu</code>.</p>

    <h3>Example</h3>

    <ui-card :title="card1Title" :supporting-text="card1SupportingText" actions="actions" actions-text="View updates"></ui-card>

    <ui-textfield :value.sync="card1Title" name="card_title" floating-label="Card Title"></ui-textfield>

    <pre><code>
    &lt;ui-card :title="cardTitle" :supporting-text="supportingText"
      actions="actions" actions-text="View updates"&gt;&lt;/ui-card&gt;
    </code></pre>

    <ui-card :supporting-text="card1SupportingText" actions="actions" actions-text="View updates"></ui-card>

    <br><br>

    <ui-card :supporting-text="card1SupportingText" actions="actions" actions-text="View updates">
      <h3 slot="title" class="ui-card-title-text">Other&nbsp;<em>title</em></h3>
    </ui-card>

  </section>
</template>

<script>
import UiTextfield from '../ui-textfield'
import UiCard from '../ui-card'

export default {
  data () {
    return {
      card1Title: 'Update',
      card1SupportingText: 'Consectetur optio autem minus odio consectetur' +
      ' molestiae accusantium veritatis odio, illum.'
    }
  },

  components: {
    UiTextfield,
    UiCard
  }
}
</script>
