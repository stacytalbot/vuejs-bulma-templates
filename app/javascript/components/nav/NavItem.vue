<template>
  <a class="nav-item" :class="{ 'is-active' : isActive }" :href="url" @click="$parent.updateNav(name)">
    {{ name }}
  </a>
</template>

<script>
  export default {
    name: 'nav-item',

    props: {
      name: { required: true },
      url: { required: true }
    },

    data(){
      return {
        isActive: false
      }
    }
  }
</script>