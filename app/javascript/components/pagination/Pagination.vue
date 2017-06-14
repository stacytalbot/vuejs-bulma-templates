<template>
  <nav class="pagination is-centered">
    <pagination-button 
      v-on:change-page="updatePage(previousIndex)" 
      class="pagination-previous" 
      :disabled="previousDisabled"
    >
      Previous
    </pagination-button>

    <pagination-button 
      v-on:change-page="updatePage(nextIndex)" 
      class="pagination-next"
      :disabled="nextDisabled"
    >
     Next
    </pagination-button>

    <ul v-if="compactLayout" class="pagination-list">
      <pagination-link 
        :index="1" 
        :current-page="currentPage"
        v-on:change-page="updatePage(1)"
      >
      </pagination-link>

      <li v-show="currentPage > 3">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>

      <pagination-link 
        v-for="i in paginationRange" 
        :index="i" 
        :key="i" 
        :current-page="currentPage"
        v-on:change-page="updatePage(i)"
      >
      </pagination-link>

      <li v-show="currentPage < totalPages - 2">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>

      <pagination-link 
        :index="totalPages" 
        :current-page="currentPage"
        v-on:change-page="updatePage(totalPages)"
      >
      </pagination-link>
    </ul>

    <ul v-else="compactLayout" class="pagination-list">
      <pagination-link 
        v-for="i in totalPages" 
        :index="i" 
        :key="i" 
        :current-page="currentPage"
        v-on:change-page="updatePage(i)"
      >
      </pagination-link>
    </ul>
  </nav>
</template>

<script>
  import PaginationLink from './PaginationLink.vue'
  import PaginationButton from './PaginationButton.vue'

  export default {
    name: 'pagination',

    components: { 
      'pagination-link': PaginationLink,
      'pagination-button': PaginationButton 
    },

    props: {
      totalPages: { required: true, type: Number }
    },

    data(){
      return {
        currentPage: 1
      }
    },

    computed: {
      previousIndex: function(){
        return this.currentPage - 1
      },

      nextIndex: function(){
        return this.currentPage + 1
      },

      previousDisabled: function(){
        return this.previousIndex < 1 
      },

      nextDisabled: function(){
        return this.nextIndex > this.totalPages
      },

      compactLayout: function(){
        return this.totalPages > 8
      },

      paginationRange: function(){
        var rangeMin, rangeMax
        
        if (this.currentPage <= 3){
          rangeMin = 0
          rangeMax = 4

        } else if (3 < this.currentPage  && this.currentPage < this.totalPages - 2){
          rangeMin = this.currentPage - 1
          rangeMax = this.currentPage + 1
        
        } else {
          rangeMin = this.totalPages - 3
          rangeMax = this.totalPages
        }

        return this.range(rangeMin, rangeMax)
      },

      maxPages: function(){
        return this.currentPage + 1
      }
    },

    methods: {
      updatePage: function(index){
        this.currentPage = index
      },

      range: function(min, max){
        var array = [];

        for(var i = min; i <= max; i++){
          if( i > 1 && i < this.totalPages)
            array.push(i)
        }

        return array
      }
    }
  }
</script>