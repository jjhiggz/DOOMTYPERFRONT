<template>
<div id='game'>

  <div class="game-container nes-container" v-if="gameRendered">
    <div class="input-wrapper">
      <div class="test-input-group">
          <span
          class="test-input incorrect"
          id='test-input'
          type='text'
          >
          {{input}}
        </span>
        <span class="test-word">fuck1</span>
        <span class="test-word">fuck2</span>
        <span class="test-word">fuck3</span>
        <span class="test-word">fuck4</span>
        <span class="test-word">fuck5</span>

        <span class="test-word">fuck6</span>
        <span class="test-word">fuck7</span>
        <span class="test-word">fuck8</span>
        <span class="test-word">fuck9</span>
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
  >
</div>
</template>

<script>
export default {
  name: 'Game',
  props: {
    gameRendered: Boolean,
  },
  data(){
    return(
      {
        input: ''
      }
    )
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