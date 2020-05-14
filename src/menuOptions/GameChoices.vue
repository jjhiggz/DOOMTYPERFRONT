<template>
  <div class="nes-container game-choice-container with-title is-centered id-dark" v-if="gameChoicesRendered">
      <p class="title" id="title">CHOOSE YOUR FATE</p>
      <nav id='mylist' class="list nes-list is-circle">
        <p class="game-name">game1</p>
        <p class="game-name">game2</p>
        <p class="game-name">game3</p>
        <p class="game-name">game4</p>
        <p class="game-name">game5</p>
        <p class="game-name">game6</p>
        <p class="game-name">game7</p>
        <p class="game-name">game8</p>
        <p class="game-name">game9</p>
        <p class="game-name">game10</p>
        <p class="game-name">game11</p>
        <p class="game-name">game12</p>
        <p class="game-name">game13</p>
        <p class="game-name">game14</p>
        <p class="game-name">game15</p>
        <p class="game-name">game16</p>
        <p class="game-name">game17</p>
        <p class="game-name">game18</p>
        <p class="game-name">game19</p>
        <p class="game-name">game20</p>
        <p class="game-name">game1</p>
        <p class="game-name">game2</p>
        <p class="game-name">game3</p>
        <p class="game-name">game4</p>
        <p class="game-name">game5</p>
        <p class="game-name">game6</p>
        <p class="game-name">game7</p>
        <p class="game-name">game8</p>
        <p class="game-name">game9</p>
        <p class="game-name">game10</p>
        <p class="game-name">game11</p>
        <p class="game-name">game12</p>
        <p class="game-name">game13</p>
        <p class="game-name">game14</p>
        <p class="game-name">game15</p>
        <p class="game-name">game16</p>
        <p class="game-name">game17</p>
        <p class="game-name">game18</p>
        <p class="game-name">game19</p>
        <p class="game-name">game20</p>
      </nav>
  </div>
</template>

<script>
export default {
  name:"GameChoices",
  props:{
    gameChoicesRendered: Boolean,
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