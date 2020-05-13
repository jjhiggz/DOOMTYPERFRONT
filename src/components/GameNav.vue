<template>
  <div class="nav-bar">
    <p class="navbar-header">Welcome {name} select an option</p>
    <ul class="nes-lists" > 
      <li 
        class='menu-item'
        @click="setSelectedItem('Select a game')"
      >
        <span class="scary">†</span> 
        Select a Game
        <span class="scary">†</span> 
      </li>
      <li 
        class='menu-item'
        @click="setSelectedItem('Your Stats')"
      >
        <span class="scary">†</span> 
        Your Stats
        <span class="scary">†</span> 
      </li>
      <li 
        class='menu-item'
        @click="setSelectedItem('Leader Board')"
      >
        <span class="scary">†</span> 
        Leader Board
        <span class="scary">†</span> 
      </li>
      <li 
        class='menu-item'
        @click="setSelectedItem('Logout')"
      >
        <span class="scary">†</span> 
        Logout
        <span class="scary">†</span> 
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
    selectedItem: '',
    }
  },
  methods: {
    setSelectedItem: function(string){
      console.log(string)
      this.selectedItem = string
    },
  }
}
</script>


<style scoped lang="scss">

  .nav-bar{
    color:white;
  }
  .nes-lists{
    display: flex;
    justify-content: center;
  }
  .nes-container{
    border-color:red
  }
  li{
    list-style:none;
    width:100%;
  }
  .scary{
    opacity:0;
    animation: rotation 2s infinite linear;
  }
  .menu-item:hover{
    color:red;
    transform: scale(1.1);
    .scary{
      opacity: 1;
    }
  


  }
  


</style>