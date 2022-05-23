<template>
  <div>
    <div class="row">
      <b-button class="col-1" size="sm" v-b-modal.modal_exercise>Add food</b-button>
      <div class="col-11">
      </div>
    </div>

    <b-modal id="modal_exercise" class="modal" title="Add a meal" hide-backdrop centered size="lg" hide-footer>
      <div>
        <h1>Welcome to FoodScanner!!</h1>
        <small>You are one step closer of your new life</small>
        <div class="mb-6">
            <b-button class="buttons" variant="outline-secondary"> <router-link :to="{ name: 'login' }"> Return to Log in </router-link></b-button>
            <b-button class="buttons" variant="outline-primary"><router-link :to="{ name: 'main' }"> Sign In</router-link></b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
name:"NutritionView"

}
</script>

<style>

</style>