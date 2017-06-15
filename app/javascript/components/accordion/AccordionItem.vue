<template>
  <div>
    <div class="accordion__title" @click="clickAccordionItem(name)">{{name}}</div>

    <div v-show="checkIfActive" class="accordion__content" v-html="content"></div>
  </div>
</template>

<script>
  export default {
    name: 'accordion-item',

    props: {
      name: { required: true },
      content: { default: ''},
      activeItem: { required: true }
    },

    data(){
      return {
        isActive: false
      }
    },

    computed: {
      checkIfActive: function(){
        return this.name == this.activeItem
      }
    },

    methods: {
      clickAccordionItem: function(name){
        this.$emit('click-item', name)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .accordion {
    &__title {
      background-color: lighten($grey-lighter, 10%);
      cursor: pointer;
      padding: rem-calc(8 10);

      &:hover {
        background-color: $grey-lighter;
      }
    }

    &__content {
      padding: rem-calc(8 10);
    }
  }
</style>