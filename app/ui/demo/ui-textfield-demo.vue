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
      <ui-textfield label="Name" id="name" type="text" name="name">
      </ui-textfield>
    </div>

  </section>
</template>

<script>
import UiTextfield from '../ui-textfield'

export default {
  components: {
    UiTextfield
  }
}
</script>
