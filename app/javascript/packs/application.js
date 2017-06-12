import '../components/_modal.js'

import Vue from 'vue'
import Tabs from '../components/tabs/Tabs.vue'


document.addEventListener('DOMContentLoaded', () => {

  var tabs = '#vue-tabs'

  if(document.querySelectorAll(tabs)){
    new Vue(Tabs).$mount(tabs)
  }

})