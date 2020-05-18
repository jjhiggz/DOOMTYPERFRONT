<template>
  <div class="nes-container game-choice-container with-title is-centered id-dark" v-if="render">
      <p class="title" id="title">CHOOSE YOUR FATE</p>
      <nav id='mylist' class="list nes-list is-circle">
        <p :key="game" v-for="game in games" class="game-name" @click='handleClick($event, game)'>
          {{game.name}}
        </p> 
      </nav>
  </div>
</template>

<script>
export default {
  name:"GameChoices",
  props:{
    render: {
      type:Object
    },
    games: {
      type:Array
    }
  },

  data(){
    return {
      gameOptions:[],
    }
  },
  methods: {
    handleClick: function(event, game){
      this.$emit('selectGame', game)
    },
    updateGame: function(game){
      this.gameProps.gameName =  game.name
      this.extractWords(game.words)
    },
    extractWords: function(jsonWords){
      const words = JSON.parse(jsonWords)
      this.gameProps.words = words
    },
  }
}
</script>

<style scoped lang="scss">
  .nes-container{
    background-image: url('https://i.ytimg.com/vi/5z9NzHoF4qg/maxresdefault.jpg');
    color:white;
    border-color: white;
  }
  nav{
    height: 500px;
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
  }
  p{
    color:white;
    background-color:black
  }
  #title{
    background-color:black;
    color:white;
  }
  p:hover{
    transform: scale(1.1);
    color:orangered;
  }
</style>