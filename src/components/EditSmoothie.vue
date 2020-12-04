<template>
    <div class="edit-smoothie container">
        <h2>Edit a smoothie {{ this.$route.params.smoothie_slug}}</h2>
    </div>
</template>

<script>
import db from '@/firebase/init'
    export default{
    name:'EditSmoothie',
    data () {
        return {

        }
    },
    created(){
        let ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug)
    }
    }
</script>

<style>

</style>