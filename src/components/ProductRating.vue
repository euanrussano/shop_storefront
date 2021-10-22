<template lang="pug">
  div.container
    .row
        .col
            b-icon-star-fill(variant="warning" v-for="n in rate_int")
            b-icon-star-half(variant="warning" v-if="rate_remainder > 0.5")
            b-icon-star(variant="warning" v-for="n in rate_to_five")
    .row
        p.text-muted.small {{ count }} Avaliações
        
</template>

<script>
export default {
    props: {
        rate:{type:Number},
        count:{type:Number},
    },
    computed: {
        rate_int: function () {
            return Math.trunc(this.rate)
        },
        rate_remainder: function () {
            return this.rate % Math.trunc(this.rate)
        },
        rate_to_five: function () {
            return Math.floor(5 - Math.round(this.rate))
        }
    }

}
</script>

<style>

</style>