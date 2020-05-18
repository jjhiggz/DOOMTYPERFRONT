<template>
    <div v-bind:class="{'ten-sec': this.tenSecsLeft}" v-if="renders.timerRendered">
      <div class="property nes-container">
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
      renders: {
        type:Object
      }
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
        this.timeLeft = this.timerStartTime,
        this.$emit('endGame')
      )
    },
    startGame: function(){
      if(!this.interval){
        this.interval = setInterval(
          this.decrementTimeLeft
        , 1000)
      }
      this.$emit('startGame')
    },
  },
  computed: {
    gameActive: function(){
      return ( this.interval ? true : false )
    },
    tenSecsLeft: function(){
      return (this.timeLeft <= 10 ? true : false)
    },
    oddNumberCurrentTime: function(){
      return (this.timeLeft%2 !== 0 ? true : false )
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
    font-size: 4em;
  }
  .ten-sec p{
    color:red;
    transform:scale(1.3)
  }
  p{
    color:green;
  }
</style>