<template>
  <div>
    <div class="product">
      <div class="col-1">
        <div class="product-property product-num">{{no}}</div>
      </div>
      <div class="col-3">
        <div class="product-property product-image"><img id="product-image" :src="product.image_url" width="200px" height="200px"></div>
      </div>
      <div class="col-2">
        <div class="product-property product-name">{{product.name}}</div>
      </div>
      <div class="col-2">
        <div class="product-property product-price" id="product-price">{{priceInRupiah}}</div>
      </div>
      <div class="col-2">
        <div class="product-property product-stock" id="product-stock">St.:{{product.stock}}</div>
      </div>
      <div class="col-1">
        <a href="#" class="btn btn-warning" @click.prevent="goToDetail(product.id)">Detail</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['product', 'counter'],
  methods: {
    goToDetail (id) {
      this.$router.push({ name: 'Detail', params: { id } })
    },
    addProduct () {
      this.$emit('addProduct', this.product)
    }
  },
  computed: {
    no () {
      return this.counter + 1
    },
    priceInRupiah () {
      var rupiah = ''
      var angkarev = this.product.price.toString().split('').reverse().join('')
      for (var i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.'
      return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('')
    }
  }
}
</script>

<style scoped>
#product-image {
  border-radius: 5px;
}

.icon:hover {
  transition: 300ms;
}

.product {
  align-items: center;
  background-color:white;
  display: flex;
  font-size: 2em;
  justify-content: space-around;
  margin: 10px;
  padding: 10px;
}

.product-property {
  font-size: 2rem !important;
}

div .kategori {
  display: flex;
  justify-content: space-evenly;
}

</style>
