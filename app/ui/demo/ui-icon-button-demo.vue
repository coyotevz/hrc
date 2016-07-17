<template>
  <section class="section-ui-icon-button">
    <p><code>ui-icon-button</code> shows an icon button wich can include a
      dropdown (menu or popover) and can also show a loading spinner. It
      support focus (mouse and keyboard separately), hover and disabled
      states.</p>
    <p>Visually, icon buttons have three types:</p>

    <ul>
      <li><b>Normal</b>: has a background color, with white or black text color.</li>
      <li><b>Flat</b>: has no background, text color is the button color.</li>
      <li><b>Clear</b>: has no background, text color is black or white.
        Suitable for use in components like <a v-link="{ name:
          'demo.component', params: { componentId: 'ui-toolbar-demo'
          }}">Toolbar</a>.</li>
    </ul>

    <p>Supported colors for types <code>normal</code> and <code>flat</code>
      only are <code>default</code>, <code>primary</code>, <code>accent</code>
      <code>success</code>, <code>warning</code> and <code>danger</code>.
      Supported colors for type <code>clear</code> are <code>black</code> and
      <code>white</code>.
    </p>

    <h3>Examples</h3>

    <div class="demo">
      <h4>Normal</h4>

      <div class="group">
        <ui-icon-button icon="refresh"></ui-icon-button>
        <ui-icon-button icon="add" color="primary"></ui-icon-button>
        <ui-icon-button icon="edit" color="accent"></ui-icon-button>
        <ui-icon-button icon="star" color="success"></ui-icon-button>
        <ui-icon-button icon="favorite" color="warning"></ui-icon-button>
        <ui-icon-button icon="delete" color="danger"></ui-icon-button>
      </div>

      <pre><code>
      &lt;ui-icon-button icon="refresh"&gt;&lt;/ui-icon-button&gt;
      &lt;ui-icon-button icon="add" color="primary"&gt;&lt;/ui-icon-button&gt;
      &lt;ui-icon-button icon="edit" color="accent"&gt;&lt;/ui-icon-button&gt;
      &lt;ui-icon-button icon="star" color="success"&gt;&lt;/ui-icon-button&gt;
      &lt;ui-icon-button icon="favorite" color="warning"&gt;&lt;/ui-icon-button&gt;
      &lt;ui-icon-button icon="delete" color="danger"&gt;&lt;/ui-icon-button&gt;
      </code></pre>
    </div>

    <props-table :props="propsDoc"></props-table>

  </section>
</template>

<script>
import UiIconButton from '../ui-icon-button'
import PropsTable from './props-table'

let propsDoc = [
  { name: 'color', type: 'String', default: '"normal"', description: 'For normal' +
  ' or flat buttons, one of <code>default</code>, <code>primary</code>,' +
  ' <code>accent</code>, <code>success</code>, <code>warning</code> and' +
  ' <code>danger</code>. For clear buttons, <code>black</code> or' +
  ' <code>white</code>.' }
]

export default {
  data () {
    return {
      propsDoc
    }
  },
  components: {
    UiIconButton,
    PropsTable
  }
}
</script>

<style>
.section-ui-icon-button .ui-icon-button {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
