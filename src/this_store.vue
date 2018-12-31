<template>
  <div>
    <p>{{ count }}</p>
    <button v-on:click="increment(1)">+1</button>    
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    // computed: {
    //   count () {
    //     return this.$store.state.count
    //   }
    // },
    computed: mapState([
      // 'count'
      value: 'count'
    ])
    // methods: {
    //   increment (value) {
    //     this.$store.commit('increment', value)
    //   }
    // }
    methods: mapMutations([
      'increment'
    ])
  }
</script>