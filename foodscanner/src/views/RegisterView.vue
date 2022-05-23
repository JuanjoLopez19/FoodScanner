<template>
  <div class="row">
    <div>
     <h1 class="title">Register Form</h1>
      <form class="form" @submit.prevent="register">

        <div class="row mb-10">
          <div class="col">
            <div class="form-floating mb-3">
              <input type="text" v-model="userRegister.name" class="form-control" id="floatingName" placeholder="Name" required>
              <label for="floatingName">Name</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating mb-3">
              <input type="text"  class="form-control" v-model="userRegister.surname" id="floatingSurnames" placeholder="Surnames" required>
              <label for="floatingSurnames">Surname</label>
            </div>
          </div>
        </div>

        <div class="row mb-6">
          <div class="col">
            <div class="form-floating mb-3">
              <input type="text" v-model="userRegister.username" class="form-control" id="floatingUsername" placeholder="Username" required>
              <label for="floatingUsername">Username</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating mb-3">
              <input type="email" v-model="userRegister.email" class="form-control" id="floatingEmail" placeholder="Email" required>
              <label for="floatingEmail">Email</label>
            </div>
          </div>
        </div>

        <div class="row mb-6">
          <div class="col">
            <div class="form-floating mb-3">
              <input type="password" v-model="userRegister.password" class="form-control" id="floatingPwd" placeholder="PWD" required>
              <label for="floatingPwd">Password</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating mb-3">
             <input type="password" v-model="Rpwd" class="form-control" id="floatingRpwd" placeholder="Rpwd" required>
          <label for="floatingRpwd">Repeat password</label>
          </div>
          </div>
        </div>

        <div class="row mb-6">
          <div class="form-floating form-group mb-3">
              <select class="form-select" v-model="userRegister.activity" id="floatingSelect" aria-label="Floating label select example" required>
                <option selected disabled value="">Open to select one</option>
                <option value="1">Very active</option>
                <option value="2">Active</option>
                <option value="3">Medium activity</option>
                <option value="4">Low Activity</option>
                <option value="5">Sedentarism</option>
              </select>
              <label for="floatingSelect">Select your activity</label>
          </div>
        </div>
          
        <div class="row mb-6">
          <div class="col" id="radiobutton">
            <div class="form-check form-check-inline">
              <input class="form-check-input" v-model="userRegister.gender" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" required>
              <label class="form-check-label" for="inlineRadio1">Male</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" v-model="userRegister.gender" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" required>
              <label class="form-check-label" for="inlineRadio2">Female</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating mb-3">
              <input type="number"  v-model="userRegister.weight" class="form-control" id="floatingWh" placeholder="Weight" required min="1" step="0.1">
              <label for="floatingWh">Weight</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating mb-3">
              <input type="number" v-model="userRegister.height" class="form-control" id="floatingH" placeholder="Height" required min="1" step="0.1" >
              <label for="floatingH">Height</label>
            </div>
          </div>
        </div>

        <div class="row mb-6">
          <div class="form-floating form-group mb-3">
              <select class="form-select" v-model="userRegister.mode" id="floatingMode" aria-label="Floating label select example" required>
                <option selected disabled value="">Open to select one</option>
                <option value="1">Lose weight</option>
                <option value="2">keep weight</option>
                <option value="3">Gain weight</option>
                <option value="4">Get a healthier life</option>
              </select>
              <label for="floatingMode">Select your objective</label>
          </div>
        </div>

        <p v-if="error==1" class="msg-error">
          The email is already taken, choose another one
        </p>
        <p v-if="error==2" class="msg-error">
          The passwords don't match, check it out
        </p>
    
        <button type="submit" class="btn btn-primary" id="btn">Sign up</button>
        
        <hr class="form-hr">

        <p class="msg">
            Already have an account?
            <router-link :to="{ name: 'login' }">Sing in now</router-link>
        </p>

        <b-modal id="register-success" class="modal" title="Register correct" hide-backdrop="True" centered="True" size="lg" hide-footer>
          <div>
                <h1>Welcome to FoodScanner!!</h1>
                <small>You are one step closer of your new life</small>
                <div class="mb-6">
                    <b-button class="buttons" variant="outline-secondary"> <router-link :to="{ name: 'login' }"> Return to Log in </router-link></b-button>
                    <b-button class="buttons" variant="outline-primary"><router-link :to="{ name: 'main', params:{user: userRegister} }"> Sign In</router-link></b-button>
                </div>
          </div>
        </b-modal>

      </form>
    </div>
  </div>
</template>

<script>
export default{
  name: 'RegisterView',
  data:() =>({
  userRegister:{
    email:"",
    password:"",
    name:"",
    surname:"",
    username:"",
    gender:"",
    activity:"",
    mode:"",
    weight:"",
    height:""
  },
  error:0,
  Rpwd:"",
}),
  methods:{
    register (){
      var token = this.userRegister.email.split('@');
      var user = localStorage.getItem(token[0]);
      if(this.userRegister.password != this.Rpwd)
      {
        this.error = 2;
      }else if(!user)
      {
          var stringifiedRegister = JSON.stringify(this.userRegister);
          localStorage.setItem(token[0], stringifiedRegister);
          this.error = 0;
          this.$bvModal.show('register-success')
      }else{
        this.error = 1;
      }
    }
}
}
</script>

<style lang="scss" scoped>
#btn{
  margin-top: 10px;
}
.title {
  padding-top: 90px;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
  
}

.form-hr {
  color: white;
  align-self: center;
  margin: 2rem;
  width: 75%;
}

.msg{
color: white;
}

.msg-error{
  margin: 1rem 0 0;
  color: #ff4a96;
}

#radiobutton{
  color:white;
}

.color{
  color: white;
}

.buttons{

  margin-right: 10px;
}

a{
  text-decoration: none;
}


</style>

