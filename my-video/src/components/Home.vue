<template>
  <div class="home">
   <h2 class="bannerName">MyVideo</h2>
    <div class="grid">
       <div class="videoToken">

       </div>
       <div class="videoToken">

       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
 .home {
   width: 100vw;
   height: 100vh;
   background-color: #2c3e50;

 }

 .bannerName {
   color: white;
   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
   text-align: center;
   font-size: 2vw;
   padding: 10px;
 }

 .grid {
   width: 80vw;

   border-left: 1px solid darkgray;
   border-right: 1px solid darkgray;
   margin: 0 auto;
   margin-top: 5vw;
   display: flex;
   padding-left: 2vw;
   padding-right: 2vw;
 }

 .videoToken {
   width: 12vw;
   height: 7vw;
   border: 1px solid gray;
   margin: 1vw;
 }
</style>
