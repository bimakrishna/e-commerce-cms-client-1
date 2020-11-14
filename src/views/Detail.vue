<template>
  <div class="container">
      <div class="row">
          <div class="col-8">
              <h1>Detail</h1>
              <h1>{{ product.products }}</h1>
          </div>
      </div>
  </div>
</template>

<script>
// import axios from '../axios/axios'
export default {
  methods: {
    getProductById () {
      const id = this.$route.params.id
      this.$store.dispatch('getProductById', id)
    }
  },
  created () {
    this.getProductById()
  },
  computed: {
    product () {
      return this.$store.state.products
    }
  }
}
</script>

<style>

</style>
