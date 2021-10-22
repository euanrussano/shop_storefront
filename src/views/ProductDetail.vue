<template lang="pug">

section.py-5
    b-overlay(:show="this.cartState('updating')" rounded="sm" no-wrap)
    .container.py-4
        .row.g-5
            .col-lg-9
                p.lead.mb-4
                    | {{ product.description }}
                .text-center.mb-5
                    a.text-muted.text-center.small.text-uppercase.text-decoration-underline(href="#details") Scroll to product details, material &amp; care and sizing
                .row.gy-5.align-items-stretch
                    //- PRODUCTS SLIDER-->
                    .col-lg-6
                        .swiper-container.shop-detail-slider
                            swiper(:options="swiperOption" ref="mySwiper")
                                swiper-slide(v-for="image in product.images" :key="image.id")
                                    img.img-fluid(:src="image.image"  alt="...")
                                .swiper-button-prev(slot="button-prev")
                                .swiper-button-next(slot="button-next")
                    //- PRODUCT INFO
                    .col-lg-6.d-flex.flex-column.justify-content-between
                        .p-4.p-lg-5.border.mb-5.bg-light
                            form(@submit.prevent="addToBasket")
                                h3.text-center.mb-3 Available sizes
                                select.form-select.js-sizes.mb-5(data-customclass="bg-white rounded-0 border-2 text-uppercase border-gray-200")
                                    option(value="small") Small
                                    option(value="large") Large
                                    option(value="x-large") X Large
                                p.h1.text-muted.mb-4.text-center.fw-normal R$ {{ product.price | currencyFormat() }}
                                .form-group.mb-3.text-center
                                    select.form-select.js-sizes.mb-5(v-model="addToBasketForm.quantity" data-customclass="bg-white rounded-0 border-2 text-uppercase border-gray-200")
                                        option 1
                                        option 2
                                        option 3
                                    button.btn.btn-outline-primary(type="submit") Adicionar à sacola
                                        i.fas.fa-shopping-cart
                                    button.btn.btn-secondary(type="submit" data-bs-toggle="tooltip" data-placement="top" title="Adicionar à lista de desejos")
                                        i.far.fa-heart
                        //- SLIDERS THUMBS
                        .swiper-container.shop-detail-slider-thumbs.w-100
                            .swiper-wrapper
                                .swiper-slide.swiper-slide-thumb.flex-fill(v-for="image in product.images" :key="image.id")
                                    img.img-fluid(v-on:click="changeImage(image.id-1)" :src="image.image" alt="...")
                        //-         .swiper-slide.swiper-slide-thumb.flex-fill
                        //-             img.img-fluid(v-on:click="changeImage(0)" :src="product.images[1].image" alt="...")
                        //-         //- .swiper-slide.swiper-slide-thumb.flex-fill
                        //-         //-     img.img-fluid(v-on:click="changeImage(1)" src="@/assets/img/detailsquare2.jpg" alt="...")
                        //-         //- .swiper-slide.swiper-slide-thumb.flex-fill
                        //-         //-     img.img-fluid(v-on:click="changeImage(2)" src="@/assets/img/detailsquare3.jpg" alt="...")
                //- PRODUCT INFO
                .details
                    .border-top.border-bottom.py-4.px-0.px-lg-4.my-5
                        h4 Product details
                        p White lace top, woven, has a round neck, short sleeves, has knitted lining attached
                        h4 Material &amp; care
                        ul
                            li Polyester
                            li Machine wash
                        h4 Size &amp; Fit
                        ul.mb-4
                            li Regular fit
                            li The model (height 5'8 "and chest 33") is wearing a size S
                        figure.p-4.bg-light.border-start.border-4.border-primary
                            blockquote.blockquote
                                p.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            figcaption.blockquote-footer.mb-0 Someone famous in #[cite(title="Source Title") Source Title]
                    //- SOCIAL SHARE ITEM
                    .py-4.border-top.border-bottom.text-center.mb-5
                        h4.fw-light.mb-3 Show it to your friends
                        ul.list-inline.mb-0
                            li.list-inline-item
                                a.social-link.facebook(href="#")
                                    i.fab.fa-facebook-f
                            li.list-inline-item
                                a.social-link.twitter(href="#")
                                    i.fab.fa-twitter
                            li.list-inline-item
                                a.social-link.youtube(href="#")
                                    i.fab.fa-youtube
                            li.list-inline-item
                                a.social-link.email(href="#")
                                    i.fab.fa-envelope
                    //- SIMILAR PRODUCTS
                    .row.gy-4.mb-5
                        .col-lg-3.col-md-6
                            .py-4.px-0.px-lg-4.border-top.border-bottom
                                h3.text-uppercase.mb-0 You may also like these products
                        .col-lg-3.col-md-6
                            //- <!-- Product-->
                            .product.h-100
                                .product-image
                                    a(href="shop-detail.html")
                                        img.img-fluid(src="img/product2.jpg" alt="Fur coat")
                                .py-4.px-3.text-center
                                    h3.h5.text-uppercase.mb-3
                                        a.reset-link(href="shop-detail.html") Fur coat
                                    p.mb-0 $143.00
                                ul.list-unstyled.p-0.ribbon-holder.mb-0
                        .col-lg-3.col-md-6
                            //- <!-- Product-->
                            .product.h-100
                                .product-image
                                    a(href="shop-detail.html")
                                        img.img-fluid(src="img/product3.jpg" alt="Fur coat")
                                .py-4.px-3.text-center
                                    h3.h5.text-uppercase.mb-3
                                        a.reset-link(href="shop-detail.html") Fur coat
                                    p.mb-0 $143.00
                                        del.text-gray-500.me-2 $ 200
                                ul.list-unstyled.p-0.ribbon-holder.mb-0
                    //- RECENTLY VIEWED PRODUCTS
                    .row.gy-4
                        .col-lg-3.col-md-6
                            .py-4.px-0.px-lg-4.border-top.border-bottom
                                h3.text-uppercase.mb-0 Products viewed recently
                        .col-lg-3.col-md-6
                            //- <!-- Product-->
                            .product.h-100
                                .product-image
                                    a(href="shop-detail.html")
                                        img.img-fluid(src="img/product3.jpg" alt="Fur coat")
                                .py-4.px-3.text-center
                                    h3.h5.text-uppercase.mb-3
                                        a.reset-link(href="shop-detail.html") Fur coat
                                    p.mb-0 $143.00
                                ul.list-unstyled.p-0.ribbon-holder.mb-0
                        .col-lg-3.col-md-6
                            //- <!-- Product-->
                            .product.h-100
                                .product-image
                                    a(href="shop-detail.html")
                                        img.img-fluid(src="img/product1.jpg" alt="Fur coat")
                                .py-4.px-3.text-center
                                    h3.h5.text-uppercase.mb-3
                                        a.reset-link(href="shop-detail.html") Fur coat
                                    p.mb-0 $143.00
                                        del.text-gray-500.me-2 $ 200.00
                                ul.list-unstyled.p-0.ribbon-holder.mb-0

</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'ProductDetail',
    components: {
    },
    data() {
      return {
        swiperOption: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        addToBasketForm: {
            product_id: '',
            quantity: 1
        }
        // id: null,
        // product_quantity: 0
      }
    },
    created() {
      this.fetchData()
    },
    computed: {
        ...mapGetters(["product", "productState","authUser", "cartState", "cart"]),
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
    },
    methods: {
        ...mapActions(["loadDetailProduct", "loadCartFromUser"]),
        async fetchData(){
          
          let id = this.$route.params.product_id
          this.loadDetailProduct(id)
          if ('id' in this.authUser){
            this.loadCartFromUser(this.authUser.id);
          }
        },

        changeImage(image_id) {
            this.swiper.slideTo(image_id)
        },

        addToBasket(){
            let id = this.product.id
            let products = this.cart.data.products
            let flag = false
            for(let i = 0; i< products.length; i++){
                if(this.cart.data.products[i].productId == id){
                    products[i].quantity += this.addToBasketForm.quantity
                    flag = true
                }
            }
            if(flag == false){
                products.push({productId: this.product.id, quantity: this.addToBasketForm.quantity})
            }
            let cart_data = {
                userId: this.authUser.id,
                date: '2021-10-18',
                products: products
            }
            this.updateCart(cart_data)  
        }
    },
    filters: {
        currencyFormat: function (value) {
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