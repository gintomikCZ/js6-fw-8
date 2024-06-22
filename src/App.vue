<template>

<TAccordion :accData="accData" />


</template>

<script>
import TAccordion from '@/components/TAccordion.vue'
export default {
  name: 'App',
  data () {
    return {
      accData: [
        { header: 'labrador', id: 1 },
        { header: 'header 2', id: 2 },
        { header: 'header 3', id: 3 },
        { header: 'header 4', id: 4 },
      ]
    }
  },
  components: { TAccordion }
}

/*
name
datové položky (props, data, computed)
lifecycle hooks (enter)
methods
components
lifecycle hooks (leave)
*/


</script>