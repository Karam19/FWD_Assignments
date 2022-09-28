interface coinsType {
  id: string;
  name: string;
  min_size: number;
}

interface dataType {
  data: coinsType[];
}

function getCoins() {
  let coinsData: coinsType[];
  fetch("https://api.coinbase.com/v2/currencies")
    .then((response: Response) => response.json())
    .then((data: dataType) => {
      coinsData = data.data;
      let gridCell: HTMLElement | null;
      for (let i: number = 0; i < 11; i++) {
        gridCell = document.getElementById(`grid_cell_${i}`);
        if (gridCell) {
          gridCell.innerHTML =
            coinsData[i + 117].id + ": " + coinsData[i + 117].name;
        }
      }
    });
}
window.onload = getCoins;
