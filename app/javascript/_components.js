import Vue from 'vue/dist/vue.esm'

import Tabs from './components/tabs/Tabs.vue'
import Tab from './components/tabs/Tab.vue'

import Modal from './components/modal/Modal.vue'

import Navigation from './components/nav/Nav.vue'
import NavItem from './components/nav/NavItem.vue'

import Pagination from './components/pagination/Pagination.vue'
import PaginationLink from './components/pagination/PaginationLink.vue'
import PaginationButton from './components/pagination/PaginationButton.vue'

document.addEventListener('DOMContentLoaded', () => {

  var components = '#components'

  if(document.querySelectorAll(components)){
    new Vue({
      el: components,
      components: { Tabs, Tab, Modal, Navigation, NavItem, Pagination }
    })
  }
})