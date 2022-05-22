<template>
  <div class="row">
    <div>
     <h1 class="title">Register Form</h1>

      <form class="form" @submit.prevent="login">

        <div class="row mb-10">
          <div class="col">
            <div class="form-floating mb-3">
              <input type="text"  class="form-control" id="floatingName" placeholder="Name" required>
              <label for="floatingName">Name</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating mb-3">
              <input type="text"  class="form-control" id="floatingSurnames" placeholder="Surnames" required>
              <label for="floatingSurnames">Surname</label>
            </div>
          </div>
        </div>

        <div class="row mb-6">
          <div class="col">
            <div class="form-floating mb-3">
              <input type="text"  class="form-control" id="floatingUsername" placeholder="Username" required>
              <label for="floatingUsername">Username</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating mb-3">
              <input type="email"  class="form-control" id="floatingEmail" placeholder="Email" required>
              <label for="floatingEmail">Email</label>
            </div>
          </div>
        </div>

        <div class="row mb-6">
          <div class="col">
            <div class="form-floating mb-3">
              <input type="password"  class="form-control" id="floatingPwd" placeholder="PWD" required>
              <label for="floatingPwd">Password</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating mb-3">
             <input type="password"  class="form-control" id="floatingRpwd" placeholder="Rpwd" required>
          <label for="floatingRpwd">Repeat password</label>
          </div>
          </div>
        </div>

        <div class="row mb-6">
          <div class="form-floating form-group mb-3">
              <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                <option selected disabled>Open to select one</option>
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
            <div class="form-check">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
              <label class="form-check-label" for="inlineRadio1"><font-awesome-icon icon="fa-thin fa-mars" /></label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
              <label class="form-check-label" for="inlineRadio2"><font-awesome-icon icon="fa fa-venus" /></label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating mb-3">
              <input type="number"  class="form-control" id="floatingWh" placeholder="Weight" required>
              <label for="floatingWh">Weight</label>
            </div>
          </div>
          <div class="col">
            <div class="form-floating mb-3">
              <input type="number"  class="form-control" id="floatingH" placeholder="Height" required>
              <label for="floatingH">Height</label>
            </div>
          </div>
        </div>
    

       
        <button type="submit" class="btn btn-primary" id="btn">Sign up</button>
        
        <hr class="form-hr">

        <p class="msg">
            Already have an account?
            <router-link :to="{ name: 'login' }">Sing in now</router-link>
        </p>
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
    surnames:"",
    username:"",
    gender:"",
    activity:"",
    mode:""
  }
})
}
</script>

<style lang="scss" scoped>
#btn{
  margin-top: 10px;
}
.title {
  padding-top: 150px;
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

</style>

