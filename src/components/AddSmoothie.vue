<template>
  <div class="add-smoothie container">
        <h2 class="center-align indigo-text">Add new smoothie Recipe</h2>
        <form>
            <div class="field title">
                <label for="title">Smoothie</label>
                <input type="text" name="title" v-model="title">
            </div>
            <div class="field add-ingredient">
                <label for="add-ingredient">Add an ingredient:</label>
                <input type="text" name="add-ingredient">
            </div>
            <div class="field center-"></div>
        </form>
  </div>
</template>

<script>
export default{
    name:'AddSmoothie',
    data () {
        return{

        }
    }
}
</script>

<style>

</style>
