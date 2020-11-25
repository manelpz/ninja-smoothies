<template>
  <div class="add-smoothie container">
        <h2 class="center-align indigo-text">Add new smoothie Recipe</h2>
        <form @submit.prevent="AddSmoothie">
            <div class="field title">
                <label for="title">Smoothie</label>
                <input type="text" name="title" v-model="title">
            </div>
            <div class="field add-ingredient">
                <label for="add-ingredient">Add an ingredient:</label>
                <input type="text" name="add-ingredient" @keydown.tab="addIng" v-model="another">
            </div>
            <div class="field center-align">
                <button class="btn pink">Add Smoothie</button>
            </div>
        </form>
  </div>
</template>

<script>
export default{
    name:'AddSmoothie',
    data () {
        return{
            title: null,
            another: null,
            ingredients: []
        }
    },
    methods:{
        AddSmoothie(){
            console.log(this.title)
        },
        addIng(){
            if(this.another){
                this.ingredients.push(this.another)
            }
        }
    }
}
</script>

<style>
    .add-smoothie{
        margin-top: 60px;
        padding: 20px;
        max-width: 500px;
    }
    .add-smoothie h2{
        font-size: 2em;
        margin: 20px auto;
    }
    .add-smoothie .field{
        margin: 20px auto;
    }
</style>
