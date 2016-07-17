<template>
  <section class="section-ui-menu">

    <p><code>ui-menu</code> is used to show a menu. Menu options can show an
      icon, secondary text (like keyboard shortcuts), or show a divider.
      Individual options can also be disabled.</p>

    <p>A trigger element can be added to create a dropdown menu and the
      dropdown position relative to the trigger can be customized. The dropdown
      menu can be always open or set to open on hover, click or focus of the
      trigger element.</p>

    <p><code>ui-menu</code> is keyboard accessible and is set by default to
      contain tab focus in the menu until it is closed, at which point it
      returns focus to the trigger element. It also emits events when opened,
      closed and when an option is selected from the menu.</p>

    <p>The dropdown is powered by <a href="https://github.com/HubSpot/drop"
        target="_blank">Drop</a>, which uses <a
        href="https://github.com/HubSpot/tether"
        target="_blank">Tether</a>.</p>

    <p><code>ui-menu</code> is used internally by the <a v-link="{ name:
        'demo.component', params: { componentId: 'ui-button-demo'
        }}">Button</a> and <a v-link="{ name: 'demo.component', params: {
        componentId: 'ui-icon-button-demo' }}">Icon Button</a> components.</p>

    <div class="initial-data">
      <p>With follwing options property:</p>
      <pre><code>
      let menuOptions = [
        {
          id: 'edit',
          text: 'Edit',
          icon: 'edit',
          secondaryText: 'Ctrl+E'
        },
        {
          id: 'duplicate',
          text: 'Duplicate',
          icon: 'content_copy',
          secondaryText: 'Ctrl+D'
        },
        {
          id: 'share',
          text: 'Share',
          icon: 'share',
          secondaryText: 'Ctrl+Shift+S',
          disabled: true
        },
        {
          type: 'divider'
        },
        {
          id: 'delete',
          text: 'Delete',
          icon: 'delete',
          secondaryText: 'Del'
        }
      ]
      </code></pre>
    </div>

    <div class="demo">
      <h4>Default</h4>
      <ui-menu :options="menuOptions"></ui-menu>

      <pre><code>
      &lt;ui-menu :options="menuOptions"&gt;&lt;/ui-menu&gt;
      </code></pre>

      <h4>Width icons</h4>
      <ui-menu :options="menuOptions" show-icons></ui-menu>

      <pre><code>
      &lt;ui-menu :options="menuOptions" show-icons&gt;&lt;/ui-menu&gt;
      </code></pre>

      <h4>With secondary text (keyboard shortcuts)</h4>
      <ui-menu :options="menuOptions" show-secondary-text></ui-menu>

      <pre><code>
      &lt;ui-menu :options="menuOptions" show-secondary-text&gt;&lt;/ui-menu&gt;
      </code></pre>

      <h4>With icons and secondary text</h4>
      <ui-menu :options="menuOptions" show-icons show-secondary-text></ui-menu>

      <pre><code>
      &lt;ui-menu :options="menuOptions" show-icons show-secondary-text&gt;&lt;/ui-menu&gt;
      </code></pre>

      <h4>With trigger element (creates a dropdown)</h4>
      <a v-el:trigger-a class="link-trigger">Click here for the menu</a>
      <ui-menu :trigger="$els.triggerA" :options="menuOptions" show-icons></ui-menu>

      <pre><code>
      &lt;a v-el:trigger-a class="link-trigger"&gt;Click here for the menu&lt;/a&gt;
      &lt;ui-menu :trigger="$els.triggerA" :options="menuOptions" show-icons&gt;&lt;/ui-menu&gt;
      </code></pre>

      <h4>Open on hover</h4>
      <a v-el:trigger-b class="link-trigger">Hover here for the menu</a>
      <ui-menu :trigger="$els.triggerB" :options="menuOptions" show-icons
        open-on="hover"></ui-menu>

    </div>

    <props-table :props="propsDoc"></props-table>

  </section>
</template>

<script>
import UiMenu from '../ui-menu'
import PropsTable from './props-table'

let propsDoc = [
  { name: 'options', type: 'Array', default: '[]', description:
    '<b>(Required)</b></br>The list of options to show in the menu. Each option' +
    ' should be an Object with at least two properties: <code>id</code> and' +
    ' <code>text</code>. An option can be shown as a divider by setting its' +
    ' <code>type</code> property to <code>"divider"</code>. The <code>text</code>' +
    ' is shown to the user and <code>id</code> is passed to the' +
    ' <code>@option-selected</code> event handler. A menu option can also include' +
    ' these properties:<ul><li><code>type</code>: Set to <code>"divider"</code> for' +
    ' a divider.</li><li><code>icon</code>: An icon to show with the option. Can be' +
    ' any of the <a href="https://design.google.com/icons/">Material Icons</a>.' +
    ' Note that this sould be the icon codepoint if you want to support' +
    ' IE9.</li><li><code>secondaryText</code>: Text to show to the right of the' +
    ' option in the dropdown. Useful for showing keyboard shortcuts and' +
    ' badges.</li><li><code>disabled</code>: A Boolean that determines whether or' +
    ' not the option is disabled.</li></ul>' },
  { name: 'showIcons', type: 'Boolean', default: 'false', description:
    'Determines whether or not icons are shown for the menu options. Set to' +
    ' <code>flase</code> to hide the icons.' },
  { name: 'showSecondaryText', type: 'Boolean', default: 'false', description:
    'Determines whether or not secondary text is shown for the menu options.' +
    ' Set to <code>false</code> to hide the secondary text.' },
  { name: 'trigger', type: 'HTMLElement', default: '', description:
    'An element to attach the menu to. Specifying this prop cresates a' +
    ' dropdown menu (i.e. the menu is hidden until the target is' +
    ' clicked/hovered/focussed).' },
  { name: 'dropdownPosition', type: 'String', default: '"bottom left"', description:
    'The position of the dropdown menu relative to the trigger.' },
  { name: 'openOn', type: 'String', default: '"click"', description:
    'The type of event that will cause the dropdown menu to open. One of' +
    ' <code>click</code>, <code>hover</code>, <code>focus</code> or' +
    ' <code>always</code>. For <code>always</code> the dropdown is opened when' +
    ' rendered and it remains open.' },
  { name: 'containFocus', type: 'Boolean', default: 'true', description:
    'Determines whether or not tab focus should be contained in the menu. Set' +
    ' to <code>false</code> to allow tabbing to focus elements outside the menu.' },
  { name: 'hideRippleInk', type: 'Boolean', default: 'false', description:
    'Determines whether or not the ripple ink animation is hidden when a menu' +
    ' item is clicked. Set to <code>true</code> to hide the ripple ink' +
    ' animation.' }
]

let menuOptions = [
  { id: 'edit', text: 'Edit', icon: 'edit', secondaryText: 'Ctrl+E' },
  { id: 'duplicate', text: 'Duplicate', icon: 'content_copy', secondaryText: 'Ctrl+D' },
  { id: 'share', text: 'Share', icon: 'share', secondaryText: 'Ctrl+Shift+S', disabled: true },
  { type: 'divider' },
  { id: 'delete', text: 'Delete', icon: 'delete', secondaryText: 'Del' }
]

export default {
  data () {
    return {
      propsDoc,
      menuOptions
    }
  },

  components: {
    UiMenu,
    PropsTable
  }
}
</script>

<style lang="scss">
@import '../../scss/variables';

.section-ui-menu {
  .link-trigger {
    color: $color-accent;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
