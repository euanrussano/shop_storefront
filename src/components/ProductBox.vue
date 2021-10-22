<template lang="pug">
.col-lg-4.col-md-6
  // Product
  .product.h-100(v-if="this.product.id != null")
    .product-image
      router-link(:to="{ name: 'ProductDetail', params: { product_id: product.id }}" )
        a
          img.img-fluid(v-if="product.images.length > 0" :src="product.images[0].image" :alt='product.name')
    .py-4.px-3.text-center
      h3.h5.text-uppercase.mb-3
        router-link(:to="{ name: 'ProductDetail', params: { product_id: product.id }}" ) 
          a.reset-link {{ product.name }}
      p.mb-0
        del.text-gray-500.me-2(v-if="false") $200.00
        | R$ {{ product.price | dot2comma()}}
    ul.list-unstyled.p-0.ribbon-holder.mb-0
      li.mb-1
        .ribbon.sale.ribbon-primary SALE
      li.mb-1
        .ribbon.new.ribbon-info NEW
</template>

<script>
import ProductRating from '@/components/ProductRating.vue'

export default {
    components:{
        ProductRating
    },
    props:{
        product:{
            id: {type:Number},
            name:{type:String},
            price:{type:String},
            images:{type:Array},
            // rating:{type:Object}
        } 
    },
    filters: {
        dot2comma: function (value) {
             return value.replace(".", ",");
        },
        truncate: function (text, length, suffix) {
            if (text.length > length) {
                return text.substring(0, length) + suffix;
            } else {
                return text;
            }
        },
    }
}
</script>

<style>

</style>