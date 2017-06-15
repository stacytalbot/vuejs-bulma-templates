<template>
  <div class="accordion">
    <accordion-item 
      v-for="item, index in items" 
      :name="item.name" 
      :content="item.content" 
      :key="index"
      :activeItem="activeItem"
      v-on:click-item="toggleAccordion(item.name)"
    ></accordion-item>
  </div>
</template>

<script>
  import AccordionItem from './AccordionItem.vue'

  export default {
    name: 'accordion',

    components: { 'accordion-item': AccordionItem },

    data(){
      return {
        activeItem: '',

        items: [
          { 
            name: 'First',
            content: '<p><strong>Lorem ipsum dolor sit amet</strong>, consectetur adipiscing elit. Maecenas bibendum vulputate est quis convallis. Maecenas eget dolor bibendum, venenatis urna nec, elementum felis. Suspendisse vestibulum metus enim. Integer at odio tellus. Sed mollis dictum purus sit amet malesuada. Aliquam lacinia pellentesque risus eu pretium. Cras fringilla pretium tortor. Integer mollis leo ac purus ultricies, aliquam aliquam velit posuere. Proin sit amet consectetur nunc.</p>'
          },
          {
            name: 'Second',
            content: '<p><strong>Maecenas bibendum vulputate</strong> est quis convallis. Maecenas eget dolor bibendum, venenatis urna nec, elementum felis. Suspendisse vestibulum metus enim. Integer at odio tellus. Sed mollis dictum purus sit amet malesuada. Aliquam lacinia pellentesque risus eu pretium. Cras fringilla pretium tortor. Integer mollis leo ac purus ultricies, aliquam aliquam velit posuere. Proin sit amet consectetur nunc.</p>'
          },
          {
            name: 'Third',
            content: '<p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Maecenas bibendum vulputate est quis convallis. Maecenas eget dolor bibendum, venenatis urna nec, elementum felis. Suspendisse vestibulum metus enim. Integer at odio tellus.</p><p>Sed mollis dictum purus sit amet malesuada. Aliquam lacinia pellentesque risus eu pretium. Cras fringilla pretium tortor. Integer mollis leo ac purus ultricies, aliquam aliquam velit posuere. Proin sit amet consectetur nunc.</p>'
          }
        ]
      }
    },

    methods: {
      toggleAccordion: function(name){
        this.activeItem = name
      }
    }
  }
</script>