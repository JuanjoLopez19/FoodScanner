<template>
  <div>
    <div class="row mb-5">
      <b-button class="col-1" size="sm" v-b-modal.modal_nutrition>Add meal</b-button>
    </div>
    <div class="row mb-5">
      <div class="col-6">
          <div class="row">
            <h5 class="left">The amount of calories you got for today are: <strong>{{get_MBA}}</strong>Kcal</h5>
          </div>
          <div class="row form-check">
            <div class="row left">
              <h2>Protein</h2>
            </div>
            <div class="row mb-5">
              <div class="col-10">
                <b-progress class="w-75" height="2rem" :value="currentProte" :max="maxProte" show-progress animated variant="primary"></b-progress>
              </div>
               <div class="col-2" style="margin-left: -160px;">
                of {{maxProte}} grams
              </div>
            </div>
          </div>
          <div class="row form-check">
            <div class="row left">
              <h2>Carbs</h2>
            </div>
            <div class="row mb-5">
              <div class="col-10">
                <b-progress class="w-75" height="2rem" :value="currentCarbs" :max="maxCarbs" show-progress animated variant="success"></b-progress>
              </div>
               <div class="col-2" style="margin-left: -150px; ">
                  of {{maxCarbs}} grams
              </div>
            </div>
          </div>
          <div class="row form-check">
            <div class="row left">
              <h2>Fats</h2>
            </div>
            <div class="row mb-5">
              <div class="col-10">
                <b-progress class="w-75" height="2rem" :value="currentFat" :max="maxFat" show-progress animated variant="warning"></b-progress>
              </div>
               <div class="col-2" style="margin-left: -150px;">
                  of {{maxFat}} grams
              </div>
            </div>
          </div>
      </div>
      <div class="col-6">
          <div class="row mb-5">
            <h3 class="col-10 left">Your bodywheight today: <strong>{{Person.weight}}</strong></h3> 
            <b-button class="col-2" size="sm" v-b-modal.modal_peso style="margin-left: -150px;">Add BodyWeight</b-button>
          </div>
          <div class="row">
            <apexChart width="650"  type="line" :options="options" :series="series"> </apexChart>
          </div>
      </div>
    </div>
    <div class="row">
      <div class="left row mb-5 ">
        <h2>Nutrition summary</h2> 
        <hr>
      </div>
      <div>
        <div class="col mb-5">
          <b-nav  tabs  fill align="center">
            <b-nav-item @click="meal=1">Breakfast     </b-nav-item>
            <b-nav-item @click="meal=2">Mid morning   </b-nav-item>
            <b-nav-item @click="meal=3">Lunch         </b-nav-item>
            <b-nav-item @click="meal=4">Mid afternoon </b-nav-item>
            <b-nav-item @click="meal=5">Dinner        </b-nav-item>
          </b-nav>
        </div>
        <div class="row">
          <b-table class="w-75" style="margin-left: 160px;" striped hover :items="dataSelector"></b-table>
      </div>
      </div>
      
    </div>

    <b-modal id="modal_nutrition" class="modal" title="Add an exercise to your routine" hide-backdrop centered size="lg" @show="resetModal2" @hidden="resetModal2" @ok="handleOk2">
      <div>
        <b-form-select v-model="selected" :options="options2"></b-form-select>
        <form v-show="selected!=null" ref="form" @submit.stop.prevent="handleSubmit">
          <div class="row">
            <div class="col">
              <b-form-group label="Search a meal" label-for="Exer-input">
                <b-form-input style="width: 98%;" v-model="name"></b-form-input>
                <b-icon icon="search" class="NoLink" style="width: 15px; height: 15px; margin-left: 725px; margin-top:-65px"/>
              </b-form-group>
            </div>
          </div>
          <div class="row">
            <div class="row">
                Or scan it with a photo
            </div>
            <div class="row">
              <p class="col-3"></p>
              <b-button class="col-6" @click="onPickFile">Upload a picture <b-icon icon="camera" style="width: 20px; height: 20px; margin-left: 10px;"/></b-button>
              <input type="file" style="display: none" ref="fileInput" accept="image/*" @change="onFilePicked"/>
              <p class="col-3"></p>
            </div>
            <div v-show="picked">
              <ul style="align:center">
                  <li> Protein: {{prote}} gr  </li> 
                  <li> Carbs: {{carbs}} gr    </li> 
                  <li> Fats: {{fats}} gr      </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </b-modal>

    <b-modal id="modal_peso" class="modal" title="Add yours today BodyWeight" hide-backdrop centered size="sm" @show="resetModal" @hidden="resetModal" @ok="handleOk" >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <div class="form-floating mb-3">
          <input type="number"  v-model="peso" class="form-control" id="floatingWh" placeholder="Weight" min="1" step="0.1">
          <label for="floatingWh">Weight</label>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>


export default {
  name:"NutritionView",
  data:()=>({
    Person:"",
    peso:null,
    currentProte:"50",
    currentCarbs:"120",
    currentFat:"30",
    maxProte:"",
    maxCarbs:"",
    maxFat:"",
    meal:1,
    selected:null,
    prote:null,
    carbs:null,
    fats:null,
    picked:null,
    name:null,
    series: [{
              name: "Bodyweight",
              data: [70.5, 72.4, 71.3, 72, 72.7, 72.9, 72, 71.7, 72.4]
          }],
    options:{
      dataLabels: {
        enabled: true
      },
        stroke: {
        curve: 'smooth',
      },
      title:{
        text: "Summary of Bodyweight",
        align: "left"
      },
      xaxis:{
        categories: ["05-05-2022","06-05-2022","07-05-2022","08-05-2022","09-05-2022","10-05-2022","11-05-2022","12-05-2022","13-05-2022"]
      },
      chart:{ 
        zoom:{
          enabled: false
        }
      }
    },
    items: [
          { Food: "Tomatoes Cherrys",      Calories: '40 Kcal',             Weight: '70 gr',   Protein:"0 gr",    Carbs:"12 gr",      Fats:"0 gr"},
          { Food: "Avocado",               Calories: '80 kcal',             Weight: '50 gr',   Protein:"1 gr",    Carbs:"4.25 gr",    Fats:"7.35gr" },
          { Food: "Scramble eggs",         Calories: '150 Kcal',            Weight: '2 units', Protein:"12 gr",   Carbs:"0.6 gr",     Fats:"9 gr" },
          { Food: "Bread",                 Calories: '266 Kcal',            Weight: '100 g',   Protein:"7,64 gr",  Carbs:"50.61 gr",  Fats:"3.29 gr" },
        ],
    items2: [
          { Food: "Banana",         Calories: '105 Kcal',     Weight: '1 unit', Protein:"1.29 gr" , Carbs:"26.95 gr" , Fats:"0.39 gr"},
          { Food: "Fresh Cheese",   Calories: '72 Kcal',      Weight: '65 gr',  Protein:"20gr" , Carbs:"50gr" , Fats:"10gr"},
          { Food: "Bread",          Calories: '266 Kcal',     Weight: '100 g',  Protein:"7,64 gr",  Carbs:"50.61 gr",  Fats:"3.29 gr" },
        ],
    items3: [
          { Food: "Fresh Pasta",          Calories: '72 Kcal',      Weight: '65 gr',  Protein:"20gr" , Carbs:"50gr" , Fats:"10gr"},
          { Food: "Brocoli",              Calories: '72 Kcal',      Weight: '65 gr',  Protein:"20gr" , Carbs:"50gr" , Fats:"10gr"},
          { Food: "Gouda Cheese",         Calories: '72 Kcal',      Weight: '65 gr',  Protein:"20gr" , Carbs:"50gr" , Fats:"10gr"},
          { Food: "Salmon",               Calories: '72 Kcal',      Weight: '65 gr',  Protein:"20gr" , Carbs:"50gr" , Fats:"10gr"},
        ],
    items4: [
          { Food: "Greek Yogurth",        Calories: '72 Kcal',            Weight: '65 gr',  Protein:"20gr" ,    Carbs:"50gr" ,      Fats:"10gr"},
          { Food: "Strawberry",           Calories: '105 Kcal',           Weight: '1 unit', Protein:"1.29 gr" , Carbs:"26.95 gr" ,  Fats:"0.39 gr"},
          { Food: "Rice Cereals",         Calories: '72 Kcal',            Weight: '65 gr',  Protein:"20gr" ,    Carbs:"50gr" ,      Fats:"10gr"},
          { Food: "Oat Flakes",           Calories: '12 / 12 / 10 / 10',  Weight: '50kg',   Protein:"20gr" ,    Carbs:"50gr" ,      Fats:"10gr"},
          { Food: "Peanut Butter",        Calories: '12 / 12 / 10 / 10',  Weight: '50kg',   Protein:"20gr" ,    Carbs:"50gr" ,      Fats:"10gr"},
        ],
    items5: [
          { Food: "Spanish Omelet", Calories: '72 Kcal',      Weight: '65 gr',    Protein:"20gr" ,    Carbs:"50gr",       Fats:"10gr"},
          { Food: "Bread",          Calories: '266 Kcal',     Weight: '100 g',    Protein:"7,64 gr",  Carbs:"50.61 gr",   Fats:"3.29 gr" },
          { Food: "Banana",        Calories: '105 Kcal',     Weight: '1 unit',   Protein:"1.29 gr" , Carbs:"26.95 gr",   Fats:"0.39 gr"},
          { Food: "Milk",           Calories: '72 Kcal',      Weight: '65 gr',    Protein:"20gr" ,    Carbs:"50gr",       Fats:"10gr"},
        ],
    options2:[
          { value: null, text: 'Choose your meal', disabled:true },
          { value: 'items',   text: 'Breakfast' },
          { value: 'items2',  text: 'Mid morning' },
          { value: 'items3',  text: 'Lunch' },
          { value: 'items4',  text: 'Mid afternoon' },
          { value: 'items5',  text: 'Dinner' }
    ],
  }),
  props:{
    aux:Object
  },
  created(){
    this.Person = this.aux
    this.maxProte =this.Person.weight *2; 
    this.maxCarbs =this.Person.weight *4;
    this.maxFat =this.Person.weight *1;
  },
  methods: {
    resetModal() {
        this.peso=null
    },
    handleOk(bvModalEvent) {
        // Prevent modal from closing
        bvModalEvent.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
    },
    handleSubmit(){
        const d = new Date()
        const fecha = d.toISOString().split('T')[0]
        if(this.peso != null){
          var f = this.options.xaxis.categories;
          var c =  this.series[0].data;
          f.push(fecha)
          c.push(this.peso)
          this.options.xaxis.categories = f;
          this.series[0].data = c
          this.Person.weight= this.peso
        }
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked () {
        this.fats = Math.floor(Math.random()*220+1)
        this.carbs = Math.floor(Math.random()*220+1)
        this.prote = Math.floor(Math.random()*220+1)
        this.picked = true
    },
    resetModal2() {
        this.selected=null
        this.carbs=null
        this.prote=null
        this.fats=null
        this.picked=null
    },
    handleOk2(bvModalEvent) {
        // Prevent modal from closing
        bvModalEvent.preventDefault()
        // Trigger submit handler
        this.handleSubmit2()
    },
    handleSubmit2(){
        if(this.picked){
          var aux = { Food: "Photo Scan", Calories: '450 Kcal', Weight: '387 gr', Protein: this.prote + " gr", Carbs: this.carbs + " gr", Fats:this.fats + " gr"}

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
              case "items5":
                this.items5.push(aux)
              break;
          }
        }
        else if(this.name){ 
          this.fats = Math.floor(Math.random()*220+1)
          this.carbs = Math.floor(Math.random()*220+1)
          this.prote = Math.floor(Math.random()*220+1)

          aux = { Food: this.name, Calories: '450 Kcal', Weight: '387 gr', Protein: this.prote + " gr", Carbs: this.carbs + " gr", Fats:this.fats + " gr"}

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
              case "items5":
                this.items5.push(aux)
              break;
          }
        }
    }
  },
  computed:{ 
    get_MBA(){
      const h = this.Person.height;
      const w = this.Person.weight;
      const edad = Math.floor(Math.random()*75)+1
      const ac = this.Person.activity;
      return (((10*w) + (6.25*h) - (5*edad) + 5)*ac)
    },
    dataSelector(){
      if(this.meal==1){
        return this.items;
      }else if(this.meal==2){
        return this.items2;
      }else if(this.meal==3){
        return this.items3;
      }else if(this.meal==4){
        return this.items4;
      }else{
        return this.items5;
      }
    }
  }
}
</script>

<style>
hr {
  height: 10px !important;
  background-color: black !important;
  color: black !important;

}
</style>