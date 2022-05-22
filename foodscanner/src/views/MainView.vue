<template>
  <div class="body">
        <div class="row">
            <div class="row">
                    <h1 class="col left">FoodScanner</h1>
                    <p class="col"></p>
                    <div class="col right mt-2">
                        <div class="row">
                            <div class="col-7">
                                <b-img :src="require('../assets/Bench.jpg')" rounded="circle" alt="Circle image" height="50" width="50"></b-img>
                            </div>
                            <div class="col-3">
                                {{Person.username}}
                                <p><b-icon icon="dot" style="width: 40px; height: 40px; margin-right: 10px;"/>Conected</p> <!-- Poner el color y las redirecciones-->
                            </div>
                            <div class="col-2">
                                <b-icon icon="gear" style="width: 40px; height: 40px; margin: 10px;"/>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="row">
                <div class="col-2">
                   <h4 v-if="select==null">Main</h4>
                   <h4 v-else-if="select==1">Nutrition</h4>
                   <h4 v-else-if="select==2">Exercise</h4>
                   <h4 v-else-if="select==3">Friends</h4>
                </div>
            </div>
        </div>
        <div class="row mb-4">
            <b-nav class="col" tabs align="center" >
                <b-nav-item>Nutrition</b-nav-item>
                <b-nav-item>Exercise</b-nav-item>
                <b-nav-item>Friends</b-nav-item>
            </b-nav>
        </div>
        <div class="row">
            <p class="col-1"></p>
            <Main class="col-10" v-if="select==null"></Main>
            <p class="col-1"></p>
        </div>
  </div>
</template>

<script>
import Main from "../components/Main.vue";
export default {
    name:"MainView",
    components:{ Main },
    data: () =>({
        Person:"",
        select:null
    }),
    props: {
        user: Object
    },
    created(){
        this.Person = this.user
    }

}
</script>

<style>

.left{
    text-align: left;
}

.right{
    text-align: right;
}

.body{
    overflow-x: hidden;
}

</style>