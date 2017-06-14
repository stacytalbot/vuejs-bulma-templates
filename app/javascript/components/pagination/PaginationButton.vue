<template>
  <a @click="clickButton()"><slot></slot></a>
</template>

<script>
  export default {
    name: 'pagination-button',

    methods: {
      clickButton: function(){
        this.$emit('change-page')
      }
    }
  }
</script>