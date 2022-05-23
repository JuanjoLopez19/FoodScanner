<template>
  <div>
    <div class="row">
      <div class="row mb-4">
        <b-button class="col-1" size="sm" v-b-modal.modal_exercise>Add exercise</b-button>
        <div class="col-11">
         <b-nav tabs align="center">
          <b-nav-item @click="tr=1">Training 1</b-nav-item>
          <b-nav-item @click="tr=2">Training 2</b-nav-item>
          <b-nav-item @click="tr=3">Training 3</b-nav-item>
          <b-nav-item @click="tr=4">Training 4</b-nav-item>
          </b-nav>
        </div>
      </div>
      <div class="row">
          <b-table striped hover :items="dataSelector"></b-table>
      </div>
    </div>
    <b-modal id="modal_exercise" class="modal" title="Add an exercise to your routine" hide-backdrop centered size="lg" @show="resetModal" @hidden="resetModal" @ok="handleOk">
      <div>
        <b-form-select v-model="selected" :options="options"></b-form-select>
        <form v-show="selected!=null" ref="form" @submit.stop.prevent="handleSubmit">
          <div class="row">
          <div class="col">
            <b-form-group label="Exercise" label-for="Exer-input">
              <b-form-input v-model="exer" list="my-list"></b-form-input>
            </b-form-group>
          </div>
          <div class="col">
            <b-form-group label="Series" label-for="Exer-input">
              <b-form-input v-model="ser" ></b-form-input>
            </b-form-group>
          </div>
          <div class="col">
           <b-form-group label="Weigth" label-for="Exer-input">
              <b-form-input v-model="wh" ></b-form-input>
            </b-form-group>
          </div>
        </div>
        </form>
      </div>
    </b-modal>
      <datalist id="my-list">
        <option v-for="x in aux" :key="x">{{x}}</option>
      </datalist>
  </div>
</template>

<script>
export default {
  name:"ExerciseView",
  data: () =>({
    tr:1,
    items: [
          { Exercise: "Bench Press",      Series: '7 / 5 / 5 / 4',       Weight: '50kg' },
          { Exercise: "Pull Ups",         Series: '10 / 8 / 6 / 6',      Weight: 'BW' },
          { Exercise: "DB Incline Press", Series: '10 / 8 / 6 / 6',      Weight: '12,5kg' },
          { Exercise: "Biceps curl",      Series: '12 / 12 / 10 / 10',   Weight: '10kg' },
          { Exercise: "Pull Down",        Series: '10 / 8 / 6 / 6',      Weight: '60kg' },
          
        ],
    items2: [
          { Exercise: "Squat",         Series: '7 / 5 / 5 / 4',       Weight: '50kg' },
          { Exercise: "Rumanian DL",   Series: '10 / 8 / 6 / 6',      Weight: 'BW' },
          { Exercise: "Leg Extension", Series: '10 / 8 / 6 / 6',      Weight: '12,5kg' },
          { Exercise: "Abductor",      Series: '12 / 12 / 10 / 10',   Weight: '10kg' },
          { Exercise: "Calf Raises",   Series: '10 / 8 / 6 / 6',      Weight: '60kg' },
        ],
    items3: [
          { Exercise: "Push ups",           Series: '7 / 5 / 5 / 4',       Weight: 'BW' },
          { Exercise: "Pullover",           Series: '10 / 8 / 6 / 6',      Weight: '15kg' },
          { Exercise: "Cable flies",        Series: '10 / 8 / 6 / 6',      Weight: '12,5kg' },
          { Exercise: "Row",                Series: '12 / 12 / 10 / 10',   Weight: '60kg' },
          { Exercise: "Triceps extension",  Series: '10 / 8 / 6 / 6',      Weight: '5kg' },
        ],
    items4: [
          { Exercise: "Deadlift",         Series: '7 / 5 / 5 / 4',       Weight: '90kg' },
          { Exercise: "Lunges",           Series: '10 / 8 / 6 / 6',      Weight: 'BW' },
          { Exercise: "Leg Curl",         Series: '10 / 8 / 6 / 6',      Weight: '40g' },
          { Exercise: "Aductor",          Series: '12 / 12 / 10 / 10',   Weight: '50kg' },
          { Exercise: "Abdominal crunch", Series: '10 / 8 / 6 / 6',      Weight: 'BW' },
        ],
    selected:null,
    exer:null,
    ser:null,
    wh:null,
    options:[
          { value: null, text: 'Choose a training', disabled:true },
          { value: 'items',   text: 'Training 1' },
          { value: 'items2',  text: 'Training 2' },
          { value: 'items3',  text: 'Training 3' },
          { value: 'items4',  text: 'Training 4' }
    ],
    aux:["Bench press","Squat","Leg Curl","Leg Extensions","Abdominal Crunch", "Pullover", "Pullup", "Pushups", "DB Incline Press","Aductor","Cable flies"]

  }),
  computed:{
    dataSelector(){
      if(this.tr==1){
        return this.items;
      }else if(this.tr==2){
        return this.items2;
      }else if(this.tr==3){
        return this.items3;
      }else{
        return this.items4;
      }
    }
  },
  methods: {
    resetModal() {
        this.selected=null
        this.exer=null
        this.ser=null
        this.wh=null
    },
    handleOk(bvModalEvent) {
        // Prevent modal from closing
        bvModalEvent.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
    },
    handleSubmit(){

        if(this.exer && this.ser && this.wh)  
        {
            var aux = {Exercise:this.exer, Series:this.ser,Weight: this.wh }
            switch(this.selected){
              case "items":
                this.items.push(aux)
              break;
              case "items2":
                this.items2.push(aux)
              break;
              case "items3":
                this.items3.push(aux)
              break;
              case "items4":
                this.items4.push(aux)
              break;
          }
        } 
    }

  }

}
</script>

<style>

</style>