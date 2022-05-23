<template>
  <div class="body">
        <div class="row">
            <div class="row">
                    <h1 class="col left"><strong>FoodScanner</strong></h1>
                    <b-icon id="title"  v-show="select!=null" @click="select=null" icon="house-door-fill" class="NoLink" style="width: 50px; height: 50px; margin-left: -500px;"/>
                    <p class="col"></p>
                    <div class="col right mt-2">
                        <div class="row">
                            <div class="col-7">
                                 <b-img :src="require('../assets/Bench.jpg')" rounded="circle" alt="Circle image" height="60" width="60"></b-img> 
                            </div>
                            <div class="col-3">
                               <p class="NoLink">{{Person.username}}</p>
                                <p style="margin-top:-20px"><b-icon icon="dot" style="width: 40px; height: 40px; margin-right: 10px;"/>Conected</p> <!-- Poner el color y las redirecciones-->
                            </div>
                            <div class="col-2">
                                <b-icon icon="gear" class="NoLink" style="width: 40px; height: 40px; margin: 10px;"/>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="row">
                <div class="col-2" id="subtitle">
                   <h4 v-if="select==null">Main</h4>
                   <h4 v-else-if="select==1">Nutrition</h4>
                   <h4 v-else-if="select==2">Exercise</h4>
                   <h4 v-else-if="select==3">Friends</h4>
                </div>
            </div>
        </div>
        <div class="row mb-4">
            <p class="col-1">
            </p>
            <b-nav tabs align="center" class="col-10">
                <b-nav-item id="nutri" @click="select=1">Nutrition</b-nav-item>
                <b-nav-item id="exer" @click="select=2">Exercise</b-nav-item>
                <b-nav-item id="fr" @click="select=3">Friends</b-nav-item>
            </b-nav>
            <p class="col-1"></p>
        </div>
        <div class="row">
            <p class="col-1"></p>
            <Main class="col-10" v-if="select==null"></Main>
            <Nutrition class="col-10" v-if="select==1"></Nutrition>
            <Exercise class="col-10" v-if="select==2"></Exercise>
            <Friends class="col-10" v-if="select==3"></Friends>
            <p class="col-1"></p>
        </div>
  </div>
</template>

<script>
import Main from "../components/Main.vue";
import Exercise from "../components/Exercise.vue";
import Nutrition from "../components/Nutrition.vue";
import Friends from "../components/Friends.vue";
export default {
    name:"MainView",
    components:{ Main, Exercise, Nutrition, Friends },
    data: () =>({
        Person:"",
        select:null
    }),
    props: {
        user: Object
    },
    created(){
            this.Person = this.user
    },
    methods:{
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

#title{
    cursor: pointer;
}

#subtitle{
    margin-top: -40px;
}

.NoLink{
    text-decoration: none;
    color: black;
    text-align: right;
}

</style>