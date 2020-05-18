<template>
  <div id="app" class='nes-container nav-brand is-centered' >
    <Title
      :render="renders.titleRendered"
    />
    <SignIn
      :render="renders.signInRendered"
    />
    <GameNav 
      :render="renders.gameNavRendered"
    />
    <GameChoices
      :render="renders.gameNavRendered"
      :games="games"
      @selectGame = "selectGame"
      />
    <Timer
      :renders="renders"
      @endGame = "handleEndGame"
      @startGame = 'handleStartGame'
    />
    <Game
      :render="renders.gameRendered"
      :gameProps="gameProps"
    />
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
      renders: {
        titleRendered:false,
        signInRendered:false,
        gameNavRendered:false,
        timerRendered:false,
        gameChoicesRendered:false,
        gameRendered:true,
        leaderBoardRendered:false,
        statsRendered:false,
      },
      gameProps: {
        gameName:'',
        gameID:0,
        gameActive:false,
        gameWords:[],
        completedWordCount:0,
        correctWordCount:0,
      },
      games:[]
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
  mounted: function(){
      this.$nextTick(function(){
      fetch('http://localhost:9000/games')
        .then(response => response.json())
        .then(games => this.populateGames(games))
      })
  },
  methods: {
    handleEndGame(){
      this.gameProps.gameActive = false
    },
    handleStartGame(){
      this.gameProps.gameActive = true
    },
    populateGames(games){
      let allGames = []
      games.forEach(game => {
        allGames.push(game)
      })
      this.games = allGames
    },
    selectGame({name, id, words}){
      this.gameProps.gameName = name
      this.gameProps.gameID = id
      this.extractWords(words)
    },
    extractWords: function(jsonWords){
      const words = JSON.parse(jsonWords)
      this.gameProps.gameWords = words
    },
  }
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
