<template>
  <section class="section section-ui-fab">
    <p><code>ui-fab</code> is the Floating Action Button (FAB) from Material
      Design. It supports focus (keyboard separately), hover and disabled
      states.</p>

    <p>There are thow types: <code>normal</code> and <code>mini</code> and
      there are three colors: <code>default</code> (white),
      <code>primary</code> and <code>accent</code>.</p>

    <h3>Examples</h3>

    <div class="demo">
      <div class="group">
        <ui-fab color="primary" icon="add"></ui-fab>
        <ui-fab color="primary" icon="add" mini></ui-fab>

        <ui-fab color="accent" icon="edit"></ui-fab>
        <ui-fab color="accent" icon="edit" mini></ui-fab>

        <ui-fab icon="keyboard_voice"></ui-fab>
        <ui-fab icon="keyboard_voice" mini></ui-fab>
      </div>

      <pre><code>
      &lt;ui-fab color="primary" icon="add"&gt;&lt;/ui-fab&gt;
      &lt;ui-fab color="primary" icon="add" mini&gt;&lt;/ui-fab&gt;

      &lt;ui-fab color="accent" icon="edit"&gt;&lt;/ui-fab&gt;
      &lt;ui-fab color="accent" icon="edit" mini&gt;&lt;/ui-fab&gt;

      &lt;ui-fab icon="keyboard_voice"&gt;&lt;/ui-fab&gt;
      &lt;ui-fab icon="keyboard_voice" mini&gt;&lt;/ui-fab&gt;
      </code></pre>

      <h4>With tooltip</h4>

      <div class="group">
        <ui-fab color="primary" icon="edit" tooltip="Top center"
          tooltip-position="top center"></ui-fab>
        <ui-fab color="primary" icon="edit" tooltip="Bottom center"
          tooltip-position="bottom center"></ui-fab>
        <ui-fab color="primary" icon="edit" tooltip="Left middle"
          tooltip-position="left middle"></ui-fab>
        <ui-fab color="primary" icon="edit" tooltip="Right middle"
          tooltip-position="right middle"></ui-fab>
      </div>

      <pre><code>
      &lt;ui-fab color="primary" icon="edit" tooltip="Top center" tooltip-position="top center"&gt;&lt;/ui-fab&gt;
      &lt;ui-fab color="primary" icon="edit" tooltip="Bottom center" tooltip-position="bottom center"&gt;&lt;/ui-fab&gt;
      &lt;ui-fab color="primary" icon="edit" tooltip="Left middle" tooltip-position="left middle"&gt;&lt;/ui-fab&gt;
      &lt;ui-fab color="primary" icon="edit" tooltip="Right middle" tooltip-position="right middle"&gt;&lt;/ui-fab&gt;
      </code></pre>

    </div>
  </section>
</template>

<script>
import UiFab from '../ui-fab'

export default {
  components: {
    UiFab
  }
}
</script>

<style lang="scss">
.section-ui-fab {
  .group {
    display: flex;
    margin-bottom: 16px;
    align-items: flex-end;

    .ui-fab {
      margin-right: 18px;
    }
  }
}
</style>
