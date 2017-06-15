<template>
  <div v-show="isActive" class="tab__content" role="tabpanel" v-bind="{ 'aria-hidden' : ariaHidden }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'tab',

    props: {
      name: { required: true },
      selected: { default: false }
    },

    data(){
      return {
        isActive: false
      }
    },

    computed: {
      ariaHidden(){
        return (!this.isActive).toString();
      }
    },

    mounted(){
      this.isActive = this.selected
    }
  }
</script>