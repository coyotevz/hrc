<template>
  <section class="section-ui-toolbar">

    <p><code>ui-toolbar</code> component show a toolbar with a navigation icon,
      branding, a title as well as actions.</p>

    <p>Visually, <code>ui-toolbar</code> has two types: <code>defautl</code>
      and <code>colorized</code>. The toolbar can be raised (with a drop
      shadow) or flat. You can also customize the navigation icon as well as
      the brand, title and actions using slots.</p>

    <h3>Examples</h3>

    <div class="demo">
      <h4>Default</h4>

      <div class="group">
        <ui-toolbar title="Inbox">
          <div slot="actions">
            <ui-icon-button icon="arrow_back" clear></ui-icon-button>
            <ui-icon-button icon="star_border" clear></ui-icon-button>
            <ui-icon-button icon="more_vert" clear></ui-icon-button>
          </div>
        </ui-toolbar>
      </div>

      <pre><code>
      &lt;ui-toolbar title="Inbox"&gt;
        &lt;div slot="actions"&gt;
          &lt;ui-icon-button icon="arrow_back" clear&gt;&lt;/ui-icon-button&gt;
          &lt;ui-icon-button icon="star_border" clear&gt;&lt;/ui-icon-button&gt;
          &lt;ui-icon-button icon="more_vert" clear&gt;&lt;/ui-icon-button&gt;
        &lt;/div&gt;
      &lt;/ui-toolbar&gt;
      </code></pre>

      <h4>Default flat</h4>

      <div class="group">
        <ui-toolbar title="Inbox" flat>
          <div slot="actions">
            <ui-icon-button icon="arrow_back" clear></ui-icon-button>
            <ui-icon-button icon="star_border" clear></ui-icon-button>
            <ui-icon-button icon="more_vert" clear></ui-icon-button>
          </div>
        </ui-toolbar>
      </div>

      <pre><code>
      &lt;ui-toolbar title="Inbox" flat&gt;
        &lt;div slot="actions"&gt;...&lt;/div&gt;
      &lt;/ui-toolbar&gt;
      </code></pre>

      <h4>Default with Brand</h4>

      <div class="group">
        <ui-toolbar brand="Mail App" title="Inbox">
          <div slot="actions">
            <ui-icon-button icon="arrow_back" clear></ui-icon-button>
            <ui-icon-button icon="star_border" clear></ui-icon-button>
            <ui-icon-button icon="more_vert" clear></ui-icon-button>
          </div>
        </ui-toolbar>
      </div>

      <pre><code>
      &lt;ui-toolbar brand="Mail App" title="Inbox"&gt;
        &lt;div slot="actions"&gt;...&lt;/div&gt;
      &lt;/ui-toolbar&gt;
      </code></pre>
    </div>

      <h4>Colored</h4>

      <div class="group">
        <ui-toolbar title="Inbox" colored>
          <div slot="actions">
            <ui-icon-button icon="arrow_back" color="white" clear></ui-icon-button>
            <ui-icon-button icon="star_border" color="white" clear></ui-icon-button>
            <ui-icon-button icon="more_vert" color="white" clear></ui-icon-button>
          </div>
        </ui-toolbar>
      </div>

      <pre><code>
      &lt;ui-toolbar title="Inbox" colored&gt;
        &lt;div slot="actions"&gt;
          &lt;ui-icon-button icon="arrow_back" color="white" clear&gt;&lt;/ui-icon-button&gt;
          &lt;ui-icon-button icon="star_border" color="white" clear&gt;&lt;/ui-icon-button&gt;
          &lt;ui-icon-button icon="more_vert" color="white" clear&gt;&lt;/ui-icon-button&gt;
        &lt;/div&gt;
      &lt;/ui-toolbar&gt;
      </code></pre>

      <h4>Colored flat</h4>

      <div class="group">
        <ui-toolbar title="Inbox" colored flat>
          <div slot="actions">
            <ui-icon-button icon="arrow_back" color="white" clear></ui-icon-button>
            <ui-icon-button icon="star_border" color="white" clear></ui-icon-button>
            <ui-icon-button icon="more_vert" color="white" clear></ui-icon-button>
          </div>
        </ui-toolbar>
      </div>

      <pre><code>
      &lt;ui-toolbar title="Inbox" colored flat&gt;
        &lt;div slot="actions"&gt;...&lt;/div&gt;
      &lt;/ui-toolbar&gt;
      </code></pre>

  </section>
</template>

<script>
import UiToolbar from '../ui-toolbar'
import UiIconButton from '../ui-icon-button'

export default {
  components: {
    UiToolbar,
    UiIconButton
  }
}
</script>
