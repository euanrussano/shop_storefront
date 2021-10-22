<template lang="pug">
  section.py-5
    b-overlay(:show="this.productState('loading')" rounded="sm" no-wrap)
    .container.py-4
      .row.g-5
        // SHOP LISTING
        .col-lg-9
          p.text-muted.lead.text-center.mb-5
            | In our Ladies department we offer wide selection of the best products we have found and carefully selected worldwide. Pellentesque habitant morbi tristique senectus et netuss.
          .row.gy-5.align-items-stretch
            product-box(v-for="product in this.productList.results" :key="product.id" :product="product")
          a.d-block.text-center.py-4
            img.img-fluid(src='@/assets/img/banner2.jpg' alt='banner')
          .text-center.mb-5
            a.btn.btn-outline-primary(href='#')
              i.fas.fa-angle-down.me-2
              | Load more
          nav(aria-label='Page navigation example')
            ul.pagination.justify-content-center
              li.page-item
                a.page-link(href='#' aria-label='Previous')
                  span(aria-hidden='true') &laquo;
              li.page-item.active
                a.page-link(href='#') 1
              li.page-item
                a.page-link(href='#') 2
              li.page-item
                a.page-link(href='#') 3
              li.page-item
                a.page-link(href='#') 4
              li.page-item
                a.page-link(href='#') 5
              li.page-item
                a.page-link(href='#' aria-label='Next')
                  span(aria-hidden='true') &raquo;
        // SHOP SIDEBAR
        .col-lg-3
          // Categories
          h3.h4.lined.text-uppercase.mb-4 Departamentos
          ul.nav.flex-column.nav-pills.mb-4
            li.nav-item
              router-link.nav-link(to='/')
                .d-flex.align-items-center.justify-content-between
                  span.fw-bold.text-uppercase Todos os Departamentos
            //- router-link(tag="b-nav-item" v-for="(category, i) in categories" :key="i" :to="{ name: 'ProductByCategory', params: { category_name: category } }") {{ category.charAt(0).toUpperCase() + category.slice(1) }}
            li.nav-item(v-for="(category, i) in categoryList.results" :key="i")
              router-link.nav-link(:to="{ name: 'ProductByCategory', params: { category_id: category.id } }")
                a
                .d-flex.align-items-center.justify-content-between
                  span.fw-bold.text-uppercase {{ category.name }}
                  .badge.bg-secondary 42
              ul.list-unstyled.text-sm.text-muted.mb-0(v-if="false")
                li
                  a.nav-link.ps-4.text-muted.letter-spacing-1(href='shop-category.html')
                    span.ps-2 T-shirts
                li
                  a.nav-link.ps-4.text-muted.letter-spacing-1(href='shop-category.html')
                    span.ps-2 Shirts
                li
                  a.nav-link.ps-4.text-muted.letter-spacing-1(href='shop-category.html')
                    span.ps-2 Pants
                li
                  a.nav-link.ps-4.text-muted.letter-spacing-1(href='shop-category.html')
                    span.ps-2 Accessories
          // Brands
          .d-flex.align-items-center.justify-content-between.mb-3
            h3.h4.lined.text-uppercase Brands
            button.btn.btn-sm.btn-danger(type='button')
              i.fas.fa-times-circle.me-2
              | Clear
          form.mb-4(action='#')
            .form-check
              input#armani.form-check-input(type='checkbox')
              label.ps-2.form-check-label(for='armani') Armani (10)
            .form-check
              input#versace.form-check-input(type='checkbox')
              label.ps-2.form-check-label(for='versace') Versace (12)
            .form-check
              input#carloBruni.form-check-input(type='checkbox')
              label.ps-2.form-check-label(for='carloBruni') Carlo Bruni (15)
            .form-check
              input#jackHoney.form-check-input(type='checkbox')
              label.ps-2.form-check-label(for='jackHoney') Jack Honey (14)
            button.btn.btn-sm.btn-outline-primary.mt-3(type='button')
              i.fas.fa-pencil-alt.me-2
              | Apply
          // Colors
          .d-flex.align-items-center.justify-content-between.mb-3
            h3.h4.lined.text-uppercase Colors
            button.btn.btn-sm.btn-danger(type='button')
              i.fas.fa-times-circle.me-2
              | Clear
          form.mb-4(action='#')
            .form-check
              input#colorWhite.form-check-input(type='checkbox')
              label.ps-2.form-check-label.d-flex.align-items-center(for='colorWhite')
                span.color-box.me-2.bg-white
                span White
            .form-check
              input#colorBlue.form-check-input(type='checkbox')
              label.ps-2.form-check-label.d-flex.align-items-center(for='colorBlue')
                span.color-box.me-2.bg-info
                span Blue
            .form-check
              input#colorGreen.form-check-input(type='checkbox')
              label.ps-2.form-check-label.d-flex.align-items-center(for='colorGreen')
                span.color-box.me-2.bg-success
                span Green
            .form-check
              input#colorYellow.form-check-input(type='checkbox')
              label.ps-2.form-check-label.d-flex.align-items-center(for='colorYellow')
                span.color-box.me-2.bg-warning
                span Yellow
            .form-check
              input#colorRed.form-check-input(type='checkbox')
              label.ps-2.form-check-label.d-flex.align-items-center(for='colorRed')
                span.color-box.me-2.bg-danger
                span Red
            button.btn.btn-sm.btn-outline-primary.mt-3(type='button')
              i.fas.fa-pencil-alt.me-2
              | Apply
          // Colors
          .d-flex.align-items-center.justify-content-between.mb-3
            h3.h4.lined.text-uppercase Preço
          form.mb-4(action='#')
            .form-check
              h3.h5.text-uppercase Mínimo
              b-form-input(type="range" :min="min_price" :max="filters.price.max" v-model="filters.price.min")
              p {{ this.filters.price.min }}
            .form-check
              h3.h5.text-uppercase Máximo
              b-form-input(type="range" :min="filters.price.min" :max="max_price" v-model="filters.price.max")
              p {{ this.filters.price.max }}
            //- button.btn.btn-sm.btn-outline-primary.m-1(type='button' @click="applyFilters")
              i.fas.fa-pencil-alt.me-2
              | Filtrar
            button.btn.btn-sm.btn-danger.m-1(type='button' @click="clearFilters")
              i.fas.fa-times-circle.me-2
              | Limpar todos os filtros
          a.d-inline-block(href='#')
            img.img-fluid(src='img/banner.jpg' alt='')

</template>

<script>
import { mapGetters, mapActions } from "vuex";

import ProductBox from '@/components/ProductBox.vue'

export default {
  name: 'Home',
  components: {
    ProductBox
  },
  data() {
      return {
        items: [
          {
            text: 'Admin',
            href: '#'
          },
          {
            text: 'Manage',
            href: '#'
          },
          {
            text: 'Library',
            active: true
          }
        ],
        filters: {
          price: {
            min: -Infinity,
            max: Infinity,
          }
        }
      }
    },
    beforeCreate() {
      this.$store.commit('auth_initializeStore')
    },
    created() {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    computed: {
      ...mapGetters(["categoryList","productList", "productState"]),
      min_price(){
        if ('results' in this.productList) {
          return Math.min.apply(Math, this.productList.results.map(function(product) {return parseFloat(product.price);}));
        }
        return -Infinity
      },
      max_price(){
        if ('results' in this.productList) {
          return Math.max.apply(Math, this.productList.results.map(function(product) {return parseFloat(product.price);}));
        }
        return Infinity
      },
      // filteredProducts(){
      //   return this.productList.results.filter(this.filterByPrice)
      // }
    },
    methods:{
       ...mapActions(["loadAllProducts", "loadProductsInCategory", "loadAllCategories"]),

      fetchData(){
          this.loadAllCategories()
          if (this.$route.params.category_id) {
            let category_id = this.$route.params.category_id
            this.loadProductsInCategory(category_id)
          } else {
            this.loadAllProducts()
          }
      },
      clearFilters(){
        this.filters.price.min = -Infinity
        this.filters.price.max = Infinity
      },
      filterByPrice(item) {
        if (item.price >= this.filters.price.min && item.price <= this.filters.price.max) {
          return true
        }
        return false;
      }
    }
}
</script>
