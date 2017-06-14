<template>
  <div class="nav-right">
     <span v-show="burger" class="nav-toggle" :class="{ 'is-active' : burgerOpen }" @click="toggleBurgerNav">
      <span></span>
      <span></span>
      <span></span>
    </span>

    <nav class="nav-right nav-menu" :class="{ 'is-active' : burgerOpen }">
      <slot></slot>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'navigation',

    props: {
      burger: { default: true }
    },

    data() {
      return {
        links: [],
        burgerOpen: false
      }
    },

    created(){
      this.links = this.$children
    },

    mounted(){
      this.links[0].isActive = true
    },

    methods: {
      updateNav(name){
        this.links.forEach(link => {
          link.isActive = (link.name == name)
        })
      },

      toggleBurgerNav(){
        this.burgerOpen = !this.burgerOpen
      }
    }
  }
</script>