<script lang="ts">
    import type { coinsType } from './../types/coinsTypes';
    import type { dataType } from './../types/dataType'; 
    export let coins: string[] = Array(11).fill('Loading...');

    function getCoins() {
        let coinsData: coinsType[];
        fetch("https://api.coinbase.com/v2/currencies")
        .then((response: Response) => response.json())
        .then((data: dataType) => {
            coinsData = data.data;
            for (let i: number = 0; i < 11; i++) {
                coins[i] = coinsData[i + 117].id + ": " + coinsData[i + 117].name;
        }
    });
}
</script>

<h1 class="coins-heading">Few coins with their ids</h1>
<button on:click={getCoins}>
	Click to load the coins
</button>
<div class="grid">
    <div class="grid-cell" id="grid_cell_0">{coins[0]}</div>
    <div class="grid-cell" id="grid_cell_1">{coins[1]}</div>
    <div class="grid-cell" id="grid_cell_2">{coins[2]}</div>
    <div class="grid-cell" id="grid_cell_3">{coins[3]}</div>
    <div class="grid-cell" id="grid_cell_4">{coins[4]}</div>
    <div class="grid-cell" id="grid_cell_5">{coins[5]}</div>
    <div class="grid-cell" id="grid_cell_6">{coins[6]}</div>
    <div class="grid-cell" id="grid_cell_7">{coins[7]}</div>
    <div class="grid-cell" id="grid_cell_8">{coins[8]}</div>
    <div class="grid-cell" id="grid_cell_9">{coins[9]}.</div>
    <div class="grid-cell" id="grid_cell_10">{coins[10]}</div>
</div>

<style>
    .grid-cell {
  height: 80px;
  width: 25%;
  min-width: 300px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.coins-heading {
  text-align: center;
}
.grid {
  display: flex;
  flex-flow: row wrap;

  background-image: linear-gradient(
    180deg,
    rgb(50, 6, 59) 50%,
    rgb(202, 201, 103) 50%
  );
  background-repeat: repeat;
  background-size: 100px 160px;
}
</style>