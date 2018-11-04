<template>
  <q-collapsible
  indent
  :label="resource.name">
      <div><q-icon :name="icon" /> {{resource.phone}}</div>
  </q-collapsible>
</template>

<script>
export default {
  props: ['resource', 'icon'],
};
</script>

<style>

</style>
