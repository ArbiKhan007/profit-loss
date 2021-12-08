let currentPrice = document.querySelector("#current-price");
let stockQuan = document.querySelector("#stock-quantity");
let initialPrice = document.querySelector("#initial-price");
let submitBtn = document.querySelector("#submitBtn");
let resOutput = document.querySelector(".result__output");

submitBtn.addEventListener("click", function () {
  //Values in Floating point type
  let currentPriceVal = parseFloat(currentPrice.value);
  let initialPriceVal = parseFloat(initialPrice.value);
  let stockQuanVal = parseFloat(stockQuan.value);

  if (currentPriceVal > initialPriceVal) {
    resOutput.innerText =
      "Woohoo!! Your Profit is " +
      profitAbs(currentPriceVal, initialPriceVal, stockQuanVal) +
      " and Percentage Profit is " +
      profitPercent(currentPriceVal, initialPriceVal, stockQuanVal);
  } else if (initialPriceVal > currentPriceVal) {
    resOutput.innerText =
      "Oh No!! Your loss is  " +
      lossAbs(currentPriceVal, initialPriceVal, stockQuanVal) +
      "  and Percentage Loss is " +
      lossPercent(currentPriceVal, initialPriceVal, stockQuanVal);
  } else {
    resOutput.innerText = "Perfectly Balanced as all things should be.";
  }
});

//absolute profit
function profitAbs(currentPrice, initialPrice, stockQuantity) {
  return currentPrice * stockQuantity - initialPrice * stockQuantity;
}

//absolute loss
function lossAbs(currentPrice, initialPrice, stockQuantity) {
  return Math.abs(initialPrice - currentPrice) * stockQuantity;
}

function profitPercent(currentPrice, initialPrice, stockQuan) {
  return (
    (profitAbs(currentPrice, initialPrice, stockQuan) /
      (initialPrice * stockQuan)) *
    100
  );
}

function lossPercent(currentPrice, initialPrice, stockQuan) {
  return (
    (lossAbs(currentPrice, initialPrice, stockQuan) /
      (initialPrice * stockQuan)) *
    100
  );
}
