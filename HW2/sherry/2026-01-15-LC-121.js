/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let low = 0;
    for(let i = 1; i < prices.length; i++){
        const profit = prices[i] - prices[low];
        max = Math.max(profit, max);
        if(profit < 0) low = i;
    }
    return max;
};