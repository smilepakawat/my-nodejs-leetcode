/**
 * LeetCode 121. Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  let buy = prices[0];
  let max = 0;
  for (let i = 1; i < prices.length; ++i) {
    if (prices[i] < buy) {
      buy = prices[i];
      continue;
    }
    let profit = prices[i] - buy;
    if (profit > max) {
      max = profit;
    }
  }

  return max;
}

export default maxProfit;
