<script lang="ts">
  import Coins from './lib/Coins.svelte';
  import Heading from './lib/Heading.svelte';
  import Info from './lib/Info.svelte';
  import Links from './lib/Links.svelte';
</script>

<main>
  <div id="header"></div>
    <div class="left"></div>
    <div class="stuff">
      <Heading></Heading>
      <hr />
      <br /><br />
      <Links></Links>
      <br /><br />
      <Info></Info>
    <Coins></Coins>
    </div>
    <div class="right"></div>
    <div id="footer">
    </div>
</main>

<style>
* {
  max-width: 1000px;
  margin: auto;
}

div {
  border-radius: 5px;
  position: relative;
}

#header {
  height: 40px;
  width: 100%;
  background-color: rgb(50, 6, 59);
  z-index: 1;
}

#footer {
  height: 50px;
  width: 100%;
  background-color: rgb(50, 6, 59);
  clear: both;
  position: relative;
}

.left {
  height: 1500px;
  width: 45px;
  background-color: rgb(202, 201, 103);
  float: left;
  position: inherit;
}

.right {
  height: 1500px;
  width: 45px;
  background-color: rgb(202, 201, 103);
  float: right;
  position: inherit;
}

.stuff {
  display: inline-block;
  margin-top: 6px;
  margin-left: 55px;
  width: 75%;
  height: 1500px;
}

@media only screen and (max-width: 430px) {
  .left,
  .right {
    display: none;
  }
  .stuff {
    width: 100%;
    margin-left: 10px;
  }
}


</style>