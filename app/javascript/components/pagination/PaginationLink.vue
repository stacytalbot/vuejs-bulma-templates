<template>
  <li>
    <a class="pagination-link" :class="{ 'is-current' : checkIfCurrent }" @click="clickPage">{{ index }}</a>
  </li>
</template>

<script>
  export default {
    name: 'pagination-link',

    props: {
      index: { required: true },
      currentPage: { required: true }
    },

    computed: {
      checkIfCurrent: function(){
        return this.index == this.currentPage
      },
    },

    methods: {
      clickPage: function(){
        this.$emit('change-page')
      }
    }
  }
</script>