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
    let profAbs = profitAbs(
      currentPriceVal,
      initialPriceVal,
      stockQuanVal
    ).toFixed(2);
    let profPercent = profitPercent(
      currentPriceVal,
      initialPriceVal,
      stockQuanVal
    ).toFixed(2);

    resOutput.innerText =
      "Woohoo!! Your Profit is " +
      profAbs +
      " and Percentage Profit is " +
      profPercent +
      "%";

    //change the color
    resOutput.style.color = "green";
  } else if (initialPriceVal > currentPriceVal) {
    let lAbs = lossAbs(currentPriceVal, initialPriceVal, stockQuanVal);
    let lPercent = lossPercent(
      currentPriceVal,
      initialPriceVal,
      stockQuanVal
    ).toFixed(2);

    resOutput.innerText =
      "Oh No!! Your loss is  " +
      lAbs +
      "  and Percentage Loss is " +
      lPercent +
      "%";

    //change the color
    resOutput.style.color = "red";
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
