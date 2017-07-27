<template>
  <div>
    <p class="menu-label">{{ name }}</p>
  </div>
</template>

<script>
  export default {
    'name': 'menu-section',

    props: {
      name: { required: true }
    }
  }
</script>