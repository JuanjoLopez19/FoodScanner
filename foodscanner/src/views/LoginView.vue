<template>
  <div class="row">
    <div>
     <h1 class="title">FoodScanner</h1>

      <form class="form" @submit.prevent="login">
        <div class="form-floating mb-3 form-group">
          <input type="email" v-model="userLogin.email" class="form-control" id="floatingInput" placeholder="email@example.com" required>
          <label for="floatingInput">Email address</label>
        </div>

        <div class="form-floating form-group">
          <input type="password" v-model="userLogin.pwd" class="form-control" id="floatingPassword" placeholder="password" required>
          <label for="floatingPassword">Password</label>
        </div>

        <p v-if="error" class="msg-error">
          The user and the password doesn't match, please try again
        </p>
        <button type="submit" class="btn btn-primary" id="btn">Sign in</button>

        <hr class="form-hr">

        <p class="msg">
            Don't have an account?
            <router-link :to="{ name: 'register' }">Register now</router-link>
        </p>
      </form>
    </div>
    </div>
</template>

<script>
export default {
  name: 'LoginView',
  data: () =>({
    userLogin:{
      email:"",
      pwd:""
    },
    error: 0
  }),
  created(){
    const user = localStorage.getItem('login');
    if(!user)
    {
      var defaultEmail={email:'defaultEmail@example.com', password:'password', name:"defaultName", surnames:"defaultSurnames", username:"defaultUsername",gender:1,activity:2,mode:1,weight:73, height:1.76}
      var stringifiedLogin = JSON.stringify(defaultEmail);
      localStorage.setItem('defaultEmail', stringifiedLogin);
    }
  },

  methods:{
    login(){
        var strippedEmail = this.userLogin.email.split('@')
        const user = localStorage.getItem(strippedEmail[0]);
        var parseduser = JSON.parse(user);
        if(parseduser.email != this.userLogin.email || parseduser.password != this.userLogin.pwd)
        {
          this.error = 1;
        }
        else{
         this.error = 0;
         console.log('Do the redirection');
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
  padding-top: 200px;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
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

</style>