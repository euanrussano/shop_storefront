<template lang="pug">
    div
        //- Top bar
        .top-bar.py-2(id="topBar" style="background: #555")
            .container.px-lg-0.text-light.py-1
                .row.d-flex.align-items-center
                    .col-md-6.d-md-block.d-none
                        p.mb-0.text-xs Entre em contato conosco através do tel (21) 9999-9999 ou hello@universal.com.
                    .col-md-6
                        .d-flex.justify-content-md-end.justify-content-between
                            ul.list-inline.d-block.d-md-none.mb-0
                                li.list-inline-item
                                    a.text-xs(href="#")
                                        i.fa.fa-phone
                                li.list-inline-item
                                    a.text-xs(href="#")
                                        i.fa.fa-envelope
                            ul.list-inline.mb-0
                                li.list-inline-item
                                    a.text-xs.text-uppercase.fw-bold.text-reset(v-b-modal.login-modal)
                                        i.fas.fa-door-open.me-2
                                        span.d-none.d-md-inline-block Entrar
                                    //- a.text-xs.text-uppercase.fw-bold.text-reset(href="#" data-bs-toggle="modal" data-bs-target="#login-modal")
                                li.list-inline-item
                                    router-link(to="/cadastrar")
                                        a.text-xs.text-uppercase.fw-bold.text-reset
                                            i.fas.fa-user.me-2
                                            span.d-none.d-md-inline-block Cadastrar    
                            ul.list-inline.mb-0.ms-lg-4
                                li.list-inline-item.text-gray-600.m-0
                                    a.text-xs.social-link-hover(href="#" title="Facebook")
                                        i.fab.fa-facebook-f
                                li.list-inline-item.text-gray-600.m-0
                                    a.text-xs.social-link-hover(href="#" title="Twitter")
                                        i.fab.fa-twitter
                                li.list-inline-item.text-gray-600.m-0
                                    a.text-xs.social-link-hover(href="#" title="Linkedin")
                                        i.fab.fa-linkedin-in
                                li.list-inline-item.text-gray-600.m-0
                                    a.text-xs.social-link-hover(href="#" title="Email")
                                        i.fas.fa-envelope
        //-  Navbar Sticky
        header.nav-holder.make-sticky
            .navbar.navbar-light.bg-white.navbar-expand-lg.py-0(id="navbar")
                .container.py-3.py-lg-0.px-lg-0
                    //- Navbar brand
                    router-link(to="/")
                        a.navbar-brand
                            img.d-none.d-md-inline-block(src="@/assets/img/logo.png" alt="Universal logo")
                            img.d-inline-block.d-md-none(src="@/assets/img/logo-small.png" alt="Universal logo")
                            span.sr-only Universal - Páginal inicial
                    //- Navbar toggler
                    button.navbar-toggler.text-primary.border-primary(type="button" data-bs-toggle="collapse"
                        data-bs-target="#navigationCollapse" aria-controls="navigationCollapse" aria-expanded="false"
                        aria-label="Toggle navigation")
                        span.sr-only Abrir menu 
                        i.fas.fa-align-justify
                    //- Collapsed Navigation
                    .collapse.navbar-collapse(id="navigationCollapse")
                        ul.navbar-nav.ms-auto.mb-2.mb-lg-0
                            //- homepage dropdown
                            li.nav-item.dropdown
                                a.nav-link.dropdown-toggle(id="hpDropdown" href="#" 
                                                            role="button" 
                                                            data-bs-toggle="dropdown" aria-expanded="false") Páginas
                                ul.dropdown-menu(aria-labelledby="hpDropdown")
                                    li
                                        a.dropdown-item.text-uppercase.border-bottom(href="index.html") Sobre nós
                                    li
                                        a.dropdown-item.text-uppercase.border-bottom(href="index.html") Outra página
                                    //- homepage submenu
                                    li.dropdown-submenu.dropend.border-0.p-0
                                        a.dropdown-item.text-uppercase.dropdown-submenu-toggle(href="#"
                                                                role="button" aria-expanded="false") Outras páginas
                                        ul.dropdown-menu.dropdown-submenu.m-0
                                            li
                                                a.dropdown-item.text-uppercase.border-bottom(href="") Subpágina
                            //- megamenu [features]
                            li.nav-item.dropdown.menu-large
                                a.nav-link.dropdown-toggle(id="featuresMegamenu" href="#" role="button"
                                                         data-bs-toggle="dropdown" aria-expanded="false") Departamentos
                                ul.dropdown-menu.megamenu.p-4(aria-labelledby="featuresMegamenu")
                                    li
                                        .row
                                            //- .col-lg-6
                                            //-     img.img-fluid.d-none.d-lg-block(src="img/template-easy-customize.png" alt="")
                                            //- .col-lg-3.col-md-6
                                            router-link(
                                                v-for="category, i in this.categoryList.results" :key="i"
                                                :to="{ name: 'ProductByCategory', params: { category_id: category.id } }") 
                                                a.h5.text-dark.text-uppercase.pb-2.border-bottom {{ category.name }}
                                                //- ul.list-unstyled.mb-3
                                                //-     li.nav-item
                                                //-         a.nav-link-sub.py-2.text-uppercase(href="template-accordions.html") Legumes
                                                //-     li.nav-item
                                                //-         a.nav-link-sub.py-2.text-uppercase(href="template-accordions.html") Frutas
        section.bg-pentagon.py-4
            .container.py-3
                .row.d-flex.align-items-center.gy-4
                    .col-md-7
                        h1.h2.mb-0.text-uppercase White blouse armani
                    
                    .col-md-5
                        //- Breadcrumb
                        ol.text-sm.justify-content-start.justify-content-lg-end.mb-0.breadcrumb.undefined
                            li.breadcrumb-item
                                a.text-uppercase(href="index.html") Home
                            li.breadcrumb-item
                                a.text-uppercase(href="shop-category.html") Ladies
                            li.breadcrumb-item
                                a.text-uppercase(href="shop-category.html") Top
                            li.breadcrumb-item
                                a.text-uppercase(href="shop-category.html") White blouse armani
        //- Top bar end
        login-modal
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import LoginModal from '@/components/LoginModal'
export default {
    name: 'AppHeader',
    props: {
        path: Array
    },
    components: {
        LoginModal
    },
    data () {
        return {
        }  
    },
    created() {
        this.fetchData()
    },
    computed: {
        ...mapGetters(["categoryList"]),
    },
    methods:{
      ...mapActions(["loadAllCategories"]),

      fetchData(){
          this.loadAllCategories()
      },
    }

}
</script>

<style>

</style>