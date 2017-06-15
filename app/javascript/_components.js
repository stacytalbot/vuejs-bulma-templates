import Vue from 'vue/dist/vue.esm'

import Tabs from './components/tabs/Tabs.vue'
import Tab from './components/tabs/Tab.vue'

import Modal from './components/modal/Modal.vue'

import Navigation from './components/nav/Nav.vue'
import NavItem from './components/nav/NavItem.vue'

import Pagination from './components/pagination/Pagination.vue'

import Accordion from './components/accordion/Accordion.vue'

document.addEventListener('DOMContentLoaded', () => {

  var components = '#components'

  if(document.querySelectorAll(components)){
    new Vue({
      el: components,
      components: { Tabs, Tab, Modal, Navigation, NavItem, Pagination, Accordion }
    })
  }
})