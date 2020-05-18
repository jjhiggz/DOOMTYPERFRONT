<template>
<div id='game'>

  <div class="game-container nes-container" v-if="render">
    <div class="input-wrapper">
      <div class="test-input-group">
          <span
          class="test-input incorrect"
          id='test-input'
          type='text'
          >
          {{input}}
        </span>
        <!-- below will need a v-for directive to populatee the right witht he incomplete words -->
        <span 
          class="test-word"
        >
          fuck1
        </span>
      </div>
    </div>

    <div class="input-wrapper">
      <div class="test-prompt">
        <span class="test-word undefined">word</span>
        <span class="test-word undefined">word</span>
        <span class="test-word undefined">word</span>
        <span class="test-word undefined">word</span>
        <span class="test-word undefined">word</span>
        <span class="test-word undefined">word</span>
        <span class="test-word undefined">word</span>
        <span class="test-word undefined">word</span>
        <span class="test-word undefined">word</span>
        <span class="test-word undefined">word</span>
        <span class="test-word undefined">word</span>
        <span class="test-word undefined">word</span>
        <span class="test-word undefined">word</span>
        <span class="test-word undefined">word</span>
        <span class="test-word undefined">word</span>
        <span class="test-word undefined">word</span>
      </div>
    </div>
  </div>
  <input
    class="test-input incorrect"
    id='test-iniput'
    type='text'
    v-model="input"
    @input="handleInputChange"
  >
</div>
</template>

<script>
export default {
  name: 'Game',
  props: {
    render:{
      type:Object,
    },
    gameProps:{
      type:Object,
    }
  },
  updated(){
    this.$nextTick(function(){
      
    })
  },
  data(){
    return(
      {
      testWords:[],
      completeWords:[],
      currentWord:'',
      input: '',
      lastCharacter: '',
      }
    )
  },
  methods:{
    handleInputChange(){
      this.input = event.target.value
      this.lastCharacter = this.input.substr(-1)
      this.isSpace(this.lastCharacter) ? this.handleSpace() : this.handleCharacter()
    },
    isSpace(character){
      return character === ' ' ? true : false
    },
    handleSpace(){
      this.input = ''
    },
    handleCharacter(){

    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@800&family=Special+Elite&display=swap');

  .test-input{
    display: inline-block;
    line-height: 1.3em;
    vertical-align: middle;
  }

  .input-wrapper{
    min-width: 50%;
    max-width: 50%;
    float: right;
    text-align:right;
    white-space:nowrap;
  }
  .test-input-group, .test-prompt{
    height: inherit;
    line-height: 4.5em;
    text-rendering: optimizeLegibility;
    font-weight: 100;
    font-size: 1.5em;
    font-family: 'Special Elite', sans-serif;
    border: 0;
    outline: 0;
    vertical-align: middle;
  }
  
  #game{
    display: flex;
    flex-direction: column;
  }

  .test-input-group{
    float:left;
    text-align: right ;
    max-width: 100%;
    min-width: 100%;
    overflow:hidden;
    direction:rtl;

  }

  .test-prompt{
    float:left;
    text-align:left;
    min-width: 40%;
    overflow:hidden;
  }
  .game-container{
    color:green;
    display: flex;
    border-color:white;

    overflow:hidden;
    max-height:300px
  }
  span{
    padding-left: 5px;
  }
  #test-input{
    direction:ltr;
  }
  
</style>