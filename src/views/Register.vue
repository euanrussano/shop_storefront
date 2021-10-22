<template lang="pug">
   section.py-5
     .container.py-4
       .row.g-5
          //- REGISTER BLOCK
          .col-lg-6
            header.mb-5
              h2.text-uppercase.mb-4 Nova Conta
              p.lead Ainda não está cadastrado?
            p. 
              With registration with us new world of fashion, fantastic discounts and much more opens to you! The whole
              process will not take you more than a minute!
            p.text-muted.mb-4.
              If you have any questions, please feel free to 
              #[a(href="#") contact us]
              our customer service center is working for you 24/7
            hr.border-gray-200
            //- REGISTER FORM
            b-overlay(:show="this.authProcessing")
              form(@submit.prevent="register")
                .form-group.mb-3
                  label.form-label(for="username")
                  input.form-control(id="username" type="text" name="username" placeholder="Nome completo" v-model="form.username")
                .form-group.mb-3
                  label.form-label(for="email")
                  input.form-control(id="email" type="email" name="email" placeholder="E-mail" v-model="form.email")
                .form-group.mb-3
                  label.form-label(for="password")
                  input.form-control(id="password" type="password" name="password" placeholder="Senha" v-model="form.password")
                .form-group.mb-3.text-center
                  button.btn.btn-outline-primary(type="submit") Cadastrar
                    i.fas.fa-user.me-2
                p.text-center.text-success(v-if="this.message != '' " :class="{'text-danger': this.showError }" ) {{ this.message }}
          //- LOGIN BLOCK
          .col-lg-6
            header.mb-5
              h2.text-uppercase.mb-4 Login
              p.lead Já é cadastrado?
              p.text-muted.mb-4.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
            hr.border-gray-200
            //- LOGIN FORM
            form(action="customer-orders.html")
              .form-group.mb-3
                label.form-label(for="loginemail")
                input.form-control(id="loginemail" type="text" name="loginemail"
                  placeholder="E-mail")
              .form-group.mb-3
                label.form-label(for="loginpassword")
                input.form-control(id="loginpassword" type="password" name="loginpassword"
                  placeholder="Senha")
              .form-group.mb-3.text-center
                button.btn.btn-outline-primary(type="submit") Entrar
                  i.fas.fa-door-open.me-2
      
</template>

<script>
 export default {
    data(){
      return {
        form:
          {
            username: '',
            email: '',
            password: ''
          },
          showError: false,
          message: '',
          authProcessing: false
      }
    },
    methods: {
      register() {
        this.authProcessing = true
        this.$store.dispatch("register", this.form)
        .then( () => {
            this.showError = false
            this.clearData()
            this.authProcessing = false
            this.message = 'Usuário criado com sucesso!'
            } )
        .catch( error => {this.authProcessing = false; this.showError = true; this.message = error})
      },
      clearData() {
        this.form = {
            username: '',
            email: '',
            password: ''
          }
      }
    }
  }
</script>

<style>

</style>