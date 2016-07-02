<template>
  <section class="section section-ui-button">
    <p><code>ui-button</code> is a versatile button component that largely
      implements the Material Design spec. Buttons can show dropdown and a
      loading spinner.  They also support focus (mouse and keyboard
      separately), hover and disabled states.</p>

    <p>Visually, buttons have to main types:</p> <ul>
      <li><b>Normal:</b> has a background color, with white or black text color.</li>
      <li><b>Flat:</b> has no background, text color is the button color.</li>
    </ul>

    <p>Supported colors are <code>default</code>, <code>primary</code>,
      <code>accent</code>, <code>success</code>, <code>warning</code> and
      <code>danger</code>.</p>

    <p>Additionally, both normal and flat buttons can be raised (with a
      box-shadow) using <code>raised</code> prop.</p>

    <p><b>Note:</b> If you are having alignment issues when using multiple
      buttons next to each other, put the buttons in a container and add a
      class of <code>ui-button-group</code> for a flex-based workaround.</p>

    <h3>Examples</h3>

    <div class="demo">
      <h4>Normal</h4>

      <div class="group">
        <ui-button>Default</ui-button>
        <ui-button color="primary">Primary</ui-button>
        <ui-button color="accent">Accent</ui-button>
        <ui-button color="success">Success</ui-button>
        <ui-button color="warning">Warning</ui-button>
        <ui-button color="danger">Danger</ui-button>
      </div>

      <pre><code>
      &lt;ui-button&gt;Default&lt;/ui-button&gt;
      &lt;ui-button color="primary"&gt;Primary&lt;/ui-button&gt;
      &lt;ui-button color="accent"&gt;Accent&lt;/ui-button&gt;
      &lt;ui-button color="success"&gt;Success&lt;/ui-button&gt;
      &lt;ui-button color="warning"&gt;Warning&lt;/ui-button&gt;
      &lt;ui-button color="danger"&gt;Danger&lt;/ui-button&gt;
      </code></pre>
    </div>
  </section>
</template>

<script>
import UiButton from '../ui-button'

export default {
  components: {
    UiButton
  }
}
</script>

<style>
.section-ui-button .ui-button {
  margin-bottom: 12px;
  margin-right: 8px;
}
</style>
