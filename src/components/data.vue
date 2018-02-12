<template>
  <div class="">
    {{items}}
  </div>
</template>



<script>
  export default {
    data() {
      return {
        type: this.$route.params.type,
        items: []
      }
    },
    watch: {
      '$route': 'fetchItems'
    },
    methods: {
      fetchItems() {
        this.items = []
        let initial_ids = [1, 3, 4]

        for (let i in initial_ids) {
          let id = initial_ids[i]
          console.log('id', id)
          fetch(`http://swapi.co/api/${this.type}/${id}`, {
            method: 'GET'
          })
          .then(response => response.json())
          .then(json => this.items.push(json))
        }
      }
    },
    created() {
      this.fetchItems()
    }
  }
</script>
