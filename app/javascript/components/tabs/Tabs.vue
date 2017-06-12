<template>
  <div class="tab-wrapper">
    <div class="tabs">
      <ul role="tablist">
        <li v-for="tab in tabs" @click="selectTab(tab)" class="tab--title" :class="{ 'is-active' : tab.isActive }" role="tab">{{ tab.name }}</li>
      </ul>
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabs',

    data() {
      return {
        tabs: []
      }
    },

    created(){
      this.tabs = this.$children
    },

    methods: {
      selectTab(selectedTab){
        this.tabs.forEach(tab => {
          tab.isActive = (tab.name == selectedTab.name)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tab--title {
    cursor: pointer;
    padding: rem-calc(5);
  }
</style>