<template>
  <div id="app" class='nes-container nav-brand is-centered' >
    <Title :titleRendered="titleRendered"/>
    <SignIn :signInRendered="signInRendered"/>
    <GameNav :gameNavRendered="gameNavRendered"/>
    <GameChoices  :gameChoicesRendered="gameChoicesRendered"/>
    <Timer :timerRendered="timerRendered"/>
    <Game :gameRendered="gameRendered" />
  </div>
</template>

<script>

import SignIn from './components/SignIn.vue'
import Title from './components/Title.vue'
import GameNav from './components/GameNav.vue'
import Timer from './components/Timer.vue'

import GameChoices from './menuOptions/GameChoices.vue'

import Game from './gameComponents/Game.vue'



export default {
  name: 'App',
  data(){
    return{
      titleRendered:true,
      signInRendered:false,
      gameNavRendered:true,
      timerRendered:false,
      gameChoicesRendered:false,
      gameRendered:true,
      leaderBoardRendered:true,
      statsRendered:true,
      gameActive:false,
    }
  },
  components: {
    SignIn,
    Title,
    GameNav,
    Timer,
    GameChoices,
    Game,
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
.hide{
  display:none;
}
</style>
