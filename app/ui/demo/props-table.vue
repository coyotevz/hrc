<template>
  <template v-if="props.length">
    <h3>Properties</h3>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="prop in props">
            <td class="name">{{ prop.name }}</td>
            <td class="type">{{ prop.type }}</td>
            <td class="default"><code>{{ prop.default }}</code></td>
            <td class="description">{{{ prop.description }}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
</template>

<script>
export default {
  props: {
    props: {
      type: Array,
      required: true
    }
  }
}
</script>
