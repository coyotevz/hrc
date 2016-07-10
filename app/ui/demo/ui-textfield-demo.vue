<template>
  <section class="section-ui-textfield">
    <p><code>ui-textfield</code> component is highly customizable and allows
      you to use text inputs and textareas. Can perform validation and show
      erros. It support hover, focus, active and disabled states.</p>

    <p>A label can be shown above the input as well as help text below the
      input. This component can also show an icon the the left or right of the
      input. It can also show a counter of the number of characters
      entered.</p>

    <p>Validation rules are written declaratively and validation is powered by
      <a href="https://github.com/skaterdav85/validatorjs">validatorjs</a>. If
      validation fails, an error message is shown below the input. Error
      messages can be customized.</p>

    <h3>Examples</h3>
    <div class="demo">
      <h4>Default</h4>
      <ui-textfield label="Name" name="name" :value.sync="t1" validation="required">
      </ui-textfield>
      <span>{{ t1 }}</span>
      <br>
      <ui-textfield floating-label="Age" name="age" :value.sync="t2"
        validation="required"></ui-textfield>
      <span>{{ t2 }}</span>

      <br>
      <ui-textfield name="dis1" label="Disabled textfield" disabled></ui-textfield>

      <br>
      <ui-textfield name="help" label="With Help" :value.sync="t4"
        help-text="This is text for assistance on above field"></ui-textfield>
    </div>

    <props-table :props="propsDoc"></props-table>

  </section>
</template>

<script>
import UiTextfield from '../ui-textfield'
import PropsTable from './props-table'

let propsDoc = [
  { name: 'name', type: 'String', default: '', description: '<b>(Required)</b>' +
    '<br>The <code>name</code> attribute of the <code>&lt;input&gt;</code>.' +
    ' Used when generating validation error messages, and to assign' +
    ' <code>id</code> attribute prefixed with <code>textfied-</code>. A name' +
    ' with multiple words should be written in <code>snake_case</code>.'},
  { name: 'value', type: 'String, Number', default: '', description:
    '<b>(Required, Two-way)</b><br>The model that the input value syncs to.' },
  { name: 'type', type: 'String', default: '"text"', description: 'The' +
    ' <code>type</code> attribute of the <code>&lt;input&gt;</code>. Supported' +
    ' values are <code>text</code>, <code>search</code>, <code>email</code>,' +
    ' <code>url</code>, <code>tel</code>, and <code>number</code>.' },
  { name: 'label', type: 'String', default: '', description: 'The label shown' +
    ' above the input (text only).' },
  { name: 'floatingLabel', type: 'String', default: '', description: 'The label' +
    ' with the floating effect.' },
  { name: 'helpText', type: 'String', default: '', description: 'The help text' +
    ' (hint) shown to the user below the input. Extra space is reserved under' +
    ' the input for the help text, validation errors and the input length' +
    ' counter. If non of these are enabled, this space is collapsed.' },
  { name: 'disabled', type: 'Boolean', default: 'false', description:
    'Determines whether or not the input is disabled. Set to <code>true</code>' +
    ' to disable the input.' }
]

export default {
  components: {
    UiTextfield,
    PropsTable
  },

  data () {
    return {
      propsDoc: propsDoc,
      t1: '',
      t2: '5',
      t4: ''
    }
  }
}
</script>
