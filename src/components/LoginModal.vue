<template lang="pug">
    //- b-modal(id="login-modal") Example
    b-modal(id="login-modal" title="Entrar" @hidden="clearData" hide-footer=true)
        b-overlay(:show="this.authProcessing" rounded="sm" no-wrap body-class="position-static")
        .modal-body
            form(@submit.prevent="login")
                .form-group.mb-3
                    input.form-control(id="username_modal" type="text" placeholder="username" v-model="form.username")
                .form-group.mb-3
                    input.form-control(id="password_modal" type="password" placeholder="password" v-model="form.password")
                p.text-center
                    button.btn.btn-outline-primary(type="submit") Entrar
                        i.fas.fa-door-open
            p.text-center.text-danger(v-if="this.showError") {{ this.error }}
            p.text-center.text-muted.small Ainda não cadastrado?
            p.text-center.text-muted.small
                router-link(to="/cadastrar" tag="a" @click.native="$bvModal.hide('login-modal')")
                    strong Cadastrar
</template>

<script>

export default {
    name: 'LoginModal',
    data() {
        return {
        form: {
            username: '',
            password: '',
            remember: false
        },
        // show: true,
        showError: false,
        error: '',
        // showModal: true,
        authProcessing: false
        }
    },
    methods: {
        login() {
            this.authProcessing = true
            this.$store.dispatch("login", this.form)
            .then( () => {
                this.showError = false
                this.$bvModal.hide('login-modal')
                this.authProcessing = false
                this.$router.push('About')
                } )
            .catch( error => {this.authProcessing = false; this.showError = true; this.error = error})
        },
        clearData() {
            this.form.username = ''
            this.form.password = ''
            this.showError = false
        }
    },
    
}
</script>

<style>

</style>