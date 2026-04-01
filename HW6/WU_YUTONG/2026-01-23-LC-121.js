var maxProfit = function(prices) {
    let price_max = 0;
    let price_min = prices[0];
    for (let p of prices) {
        price_max = Math.max(price_max, p - price_min);
        price_min = Math.min(price_min, p);
    }
    return price_max;
};
