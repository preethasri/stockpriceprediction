const stockPrice = document.querySelector(".purchasedPrice");
const stockQuantity = document.querySelector(".stockQuantity");
const currentPrice = document.querySelector(".currentPrice");
const submitBtn = document.querySelector(".submit");
const result = document.querySelector(".output");



function checkHandler() {

    let CP = stockPrice.value;
    let stockQty = stockQuantity.value;
    let SP = currentPrice.value;
    if (!isNaN(CP) && !isNaN(stockQty) && !isNaN(SP)) {
        CP = Number(CP);
        Qty = Number(stockQty);
        SP = Number(SP);
        if (CP > 0 && stockQty > 0 && SP > 0) {

            if (CP > SP) {
                const loss = ((CP - SP) * stockQty).toFixed(2);
                const lossPercentage = (((CP - SP) * 100) / CP).toFixed(2);
                result.innerHTML = `You lost ${lossPercentage}%. Your total loss is ${loss}Rupees`;
                document.body.classList.add('sadtheme')



            } else {
                const profit = ((SP - CP) * stockQty).toFixed(2)
                const profitPercentage = (((SP - CP) * 100) / CP).toFixed(2);
                result.innerHTML = `You gained ${profitPercentage}%. Your total profit is ${profit}Rupees`;
                document.body.classList.add('Happytheme')

            }
        } else {

            result.innerHTML = "please enter valid input"
        }
    } else {

        result.innerHTML = "Please enter valid input"
    }
}
submitBtn.addEventListener("click", checkHandler);