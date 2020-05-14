<template>
    <div class = "tbd" v-if="timerRendered">
      <div
        class="property nes-container"
      >
        <p>{{timeLeft}}</p>
      </div>
      <button class='tbd' @click="startGame">
        decrement
      </button>
    </div>
</template>

<script>

export default {
  name:'Timer',
    props: {
    timerRendered: Boolean,
  },
  data(){
    return {
      timerStartTime: 30,
      timeLeft: 30,
      interval: undefined,
    }
  },
  methods: {
    decrementTimeLeft: function(){
      this.timeLeft = this.timeLeft - 1
      this.timeLeft === 0 && (
        clearInterval(this.interval),
        this.interval = undefined,
        this.timeLeft = this.timerStartTime
      )
    },
    startGame: function(){
      if(!this.interval){
        this.interval = setInterval(
          this.decrementTimeLeft
        , 1000)
      }
    },
  },
  computed: {
    gameActive: function(){
      return ( this.interval ? true : false )
    }
  }
  
}
</script>

<style scoped>
  .timer-container{
  color:white;
  border-color: red;
  }
  .property{
    color:green;
    font-size: 4em;
  }
</style>