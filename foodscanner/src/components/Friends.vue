<template>
  <div>
    <div class="row mb-5">
      <b-button class="col-1" size="sm" v-b-modal.modal_friends>Add friend</b-button>
    </div>
    <div class="row">
      <ul>
        <li class="row" v-for="i in aux" :key="i">
          <div class="col-2">
            <b-img :src="require('../assets/Bench.jpg')" rounded="circle" alt="Circle image" height="60" width="60"></b-img>
          </div>
          <div class="col-6">
            <p style="margin-left:-140px"><strong>{{i.name}}</strong></p>
            <p>{{i.propmt}}</p>
          </div >
          <div class="col-4">
              <b-img :src="require('../assets/break.jpg')" height="70" width="70"></b-img>
          </div>
        </li>
      </ul>
    </div>
    <b-modal id="modal_friends" class="modal" title="Add a friend" hide-backdrop centered size="lg" @show="resetModal" @hidden="resetModal" @ok="handleOk">
      <div>
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <div class="row">
            <div class="col">
              <b-form-group label="Search a friend" label-for="Exer-input">
                <b-form-input style="width: 98%;" v-model="friend"></b-form-input>
                <b-icon icon="search" class="NoLink" style="width: 15px; height: 15px; margin-left: 725px; margin-top:-65px"/>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="row">
                Or add them from 
            </div>
            <div class="row container">
              <div class="col-4">
                <b-icon icon="facebook"  style="width: 25px; height: 25px;  margin-left: 100px;"/>
              </div>
              <div class="col-4">
                <b-icon icon="twitter"  style="width: 25px; height: 25px; margin-left: 100px;"/>
              </div>
              <div class="col-4">
                <b-icon icon="google"  style="width: 25px; height: 25px; margin-left: 100px;"/>
              </div>
            </div>
          </div>
        </form>
      </div>
    </b-modal>
  </div>
</template>

<script>

export default {
  name:'FriendsView',
  data: () =>({
    aux:[
          {name:"User 1", propmt:"has share his new training"},
          {name:"User 2", propmt:"has share his dinner"},
          {name:"User 3", propmt:"has share her run"},
          {name:"User 4", propmt:"has share his breakfast"},
          {name:"User 5", propmt:"has share his new training"}
    ],
    friend:"",
    aux_prompt:["has share his new training","has share his dinner","has share her run","has share his breakfast"]
  }),
 methods: {
    resetModal() {
        this.friend=""
    },
    handleOk(bvModalEvent) {
        // Prevent modal from closing
        bvModalEvent.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
    },
    handleSubmit(){
        if(this.friend!=""){
            var aux = {name: this.friend, propmt:this.aux_prompt[Math.floor(Math.random()*3)] }
            this.aux.push(aux)
        }
      } 
  }
}
</script>

<style>

</style>