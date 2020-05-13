<template>
  <div id="app" class='nes-container nav-brand is-centered' >
    <Title/>
    <SignIn />
    <GameNav />
    <Timer/>

  </div>
</template>

<script>

import SignIn from './components/SignIn.vue'
import Title from './components/Title.vue'
import GameNav from './components/GameNav.vue'
import Timer from './components/Timer.vue'


export default {
  name: 'App',
  data(){
    return{
      gameActive:false
    }
  },
  components: {
    SignIn,
    Title,
    GameNav,
    Timer,
  },
}
</script>

<style >
@import "../node_modules/nes.css/css/nes.css";
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'); 
/* Press Start 2P */
#app{
  height:3000px;
  background-color:black;
}
h1{
font-size: 100px;
}
SignIn{
  display: none;
}
</style>
