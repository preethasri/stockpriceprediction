var stockPrice = document.querySelector(".purchasedPrice");
var stockQuantity = document.querySelector(".stockQuantity");
var currentPrice = document.querySelector(".currentPrice");
var submitBtn = document.querySelector(".submit");
var result = document.querySelector(".output");


function StockPrediction() {
    let sp = stockPrice.value;
    let stockQnty = stockQuantity.value;
    let cp = currentPrice.value;

    if (stockPrice.value == "" || stockQuantity.value == "" || currentPrice.value == "") {
        result.innerHTML = "Please Enter A Valid Input";
        return;

    }
    if (Math.sign(stockPrice.value == -1) || Math.sign(stockQuantity.value == -1) || Math.sign(currentPrice.value == -1) || stockPrice.value == 0 || stockQuantity.value == 0 || currentPrice.value == 0) {
        result.innerHTML = "Please Don't Enter Values Equal To Or Less Than Zero ";
        return;

    }
    if (sp > cp) {
        let loss = (sp - cp) * stockQnty;
        let lossPercent = (((sp - cp) * 100) / sp).toFixed(2)
        result.innerHTML = `You're Total Loss Is ${loss}$. You Lost ${lossPercent}% Of Your Stocks.`;
        document.body.classList.add('sadtheme');

    } else if (cp > sp) {
        let profit = (cp - sp) * stockQnty;
        let profitPercent = (((cp - sp) * 100) / sp).toFixed(1)
        result.innerHTML = `You're Total Profit Is ${profit}$. You Gain ${profitPercent}% Of Your Stocks.`;
        document.body.classList.add('Happytheme');

    } else if (sp === cp) {
        result.innerHTML = "Your Total Profit Is 0$ And You Gain 0.00% Of Your Stocks"

    }


}
submitBtn.addEventListener('click', StockPrediction)