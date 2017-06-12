<template>
  <div class="modal-wrapper">
    <button @click="openModal" class="modal__open">{{ buttonText }}</button>

    <div class="modal" :class="{ 'is-active' : isActive }">
      <div class="modal-background"></div>
      <div class="modal-content modal__content">
        <slot></slot>
      </div>
      <button @click="closeModal" class="modal-close"></button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      buttonText: { default: 'Open Modal'}
    },

    data(){
      return {
        isActive: false
      }
    },

    methods: {
      openModal(){
        this.isActive = true
      },

      closeModal(){
        this.isActive = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal {
    &__open {
      cursor: pointer;
    }

    &__content {
      background-color: white;
      padding: rem-calc(18 24);
    }
  }
</style>