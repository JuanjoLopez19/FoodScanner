<template>
  <div>
    <div class="row">
      <div class=" row left">
       <h2>Nutrition summary</h2> 
        <hr>
        <div class="row">
          <div class="col-5">
            <apexChart width="650" type="pie" :options="options" :series="series"> </apexChart>  
          </div>
          <div class="col-1">
          </div>
          <div class="col-6">
            <h3>Your meals for today</h3>
            <b-carousel
              id="carousel-1"
              :interval="4000"
              controls
              fade
              indicators
              img-width="1024"
              img-height="480"
              background="#ababab"
              style="text-shadow: 1px 1px 2px #333;"
              label-next=""
              label-prev=""
            >
            
              <b-carousel-slide 
                caption="Breakfast"
                text="Frech Omelet with a slice of bread, avocado and cherry tomatoes"
                :img-src="require('../assets/break.jpg')"
              ></b-carousel-slide>

              <b-carousel-slide 
                caption="MidMorning"
                text="The piece of fruit you want"
                :img-src="require('../assets/midlunch.jpg')"
              ></b-carousel-slide>

              <b-carousel-slide 
                caption="Lunch"
                text="Fresh pasta with vegetables and a piece of salmon"
                :img-src="require('../assets/lunch.jpg')"
              ></b-carousel-slide>

              <b-carousel-slide 
                caption="MidAfternoon"
                text="Greek yogurht, fruits and some kind of sugar free cereals"
                :img-src="require('../assets/merienda.jpg')"
              ></b-carousel-slide>

              <b-carousel-slide 
                caption="Dinner"
                text="A portion of Spanish Omelet"
                :img-src="require('../assets/dinner.jpg')"
              ></b-carousel-slide>

            </b-carousel>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class=" row left">
       <h2>Exercise summary</h2> 
        <hr>
        <div class="row">
          <div class="col-3">   
          </div>
          <div class="col-6">
            <h3>Your routine for today: <strong>UpperBody</strong></h3>
            <b-carousel
              id="carousel-2"
              :interval="4000"
              controls
              fade
              indicators
              img-width="1024"
              img-height="480"
              background="#ababab"
              style="text-shadow: 1px 1px 2px #333;"
              label-next=""
              label-prev=""
            >
            
              <b-carousel-slide 
                caption="Bench Press"
                text="Series --> 50kg 7/5/5/4"
                :img-src="require('../assets/Bench.jpg')"
              ></b-carousel-slide>

              <b-carousel-slide 
                caption="Pulldown"
                text="Series --> 60kg 10/8/6/6"
                :img-src="require('../assets/pulldown.jpg')"
              ></b-carousel-slide>

              <b-carousel-slide 
                caption="Incline DB Press"
                text="Series --> 12,5kg 10/8/6/6"
                :img-src="require('../assets/db.jpg')"
              ></b-carousel-slide>

              <b-carousel-slide 
                caption="Pullups"
                text="Series --> Bodyweight 10/8/6/6"
                :img-src="require('../assets/pull.jpg')"
              ></b-carousel-slide>

              <b-carousel-slide 
                caption="Biceps Curl"
                text="Series --> 10kg 12/12/10/10"
                :img-src="require('../assets/curl.jpg')"
              ></b-carousel-slide>

            </b-carousel>
          </div>
          <div class="col-3">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'MainComp',
  props: {
  },
  data: () =>({
    options: {
      labels: ['Protein', 'Carbs', 'Fat'],
      title:{
        text:"Macronutrients of the day"
      }
    },
    series: [40,50,10],
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
hr {
  height: 10px ;
  background-color: black ;
  color: black ;

}
</style>
