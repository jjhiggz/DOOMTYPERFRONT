<template>
  <div
    class="nes-container is-centered"
    v-if="render"
  >
    <p class="title black-title-background">Please enter your information</p>
    <form class="nes-field is-inline">
      <label for="name_field">Your username</label>
      <input 
        v-model="userInput"
        type="text"
        id="name_field"
        placeholder='input your username here'
        class="nes-input"
        minlength="6"
        >
    </form>
    <div class="nes-field is-inline is-dark">
      <label for="name_field">Your password</label>
      <input
        v-model="passwordInput"
        type="password"
        id="name_field"
        placeholder='input your password here'
        class="nes-input">
    </div>
    <div class='button-spreader'>
      <a
        class="nes-btn"
        href="#"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >Submit</a>
      <div>
        &lt;-- sign in
      </div>
      <div class='green-when-button-hover'>
        or if you do not have an account -->
      </div>
      <a class="nes-btn" href="#">Sign Up</a>
    </div>
    <div>or sign in with google</div>
  </div>
</template>



<script>
import { required, maxLength } from 'vuelidate/lib/validators';

export default {
  name: 'SignIn',
  props: {
    msg: String,
    render:Object,
  },
  validations: {
    userInput: {required, maxLength: maxLength(10) },
  },
  computed: {
    userInputErrors(){
      const errors = [];
      if(!this.$v.userInput.$dirty) return errors;
      !this.$v.userInput.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.userInput.required && errors.push("Name is Required");
      return errors
    },

  },
  data(){
    
    return {
      userInput: '',
      passwordInput:'',
      hover: false,
    }
  }
}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    margin-top:20px;
  }
  .title{
    color:white;
    background-color:black;
  }

  #sign-in-container{
    display:flex;
    flex-direction:column;
    justify-content:center;
    height:500px;
    width:500px;
  }
  .nes-container{
    border-color:red;
    color:white;
  }
  h2{
    padding:30px;
  }
  img{
    height:80px;
    image-rendering: pixelated;
  }
  #sign-in-center{
    display:flex;
    justify-content:center;
  }
  .button-spreader{
    display:flex;
    justify-content:space-around;
    padding-left:100px;
  }
  .green-when-button-hoverl{
    color:green;
  }

</style>
