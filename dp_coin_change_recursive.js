// You are given coins of different denominations and a total amount of money amount.
// Write a function to compute the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.
//
// Example 1:
//
// Input: coins = [1, 2, 5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:
//
// Input: coins = [2], amount = 3
// Output: -1

var coinChange = function(coins, targetAmount) {
  let result = coinChangeHelper(coins, targetAmount, {});
  return result === Infinity ? -1 : result;
};

function coinChangeHelper(coins, targetAmount, memo) { // returns # of coins to hit targetAmount
  if (targetAmount < 0) {
    return Infinity;
  }

  if (targetAmount === 0) {
    return 0;
  }

  let results = [];

  for (let i = 0; i < coins.length; i++) {
    let updatedTarget = targetAmount - coins[i];
    let minimumCoinsToReachTarget = (memo[updatedTarget] || coinChangeHelper(coins, updatedTarget, memo)) + 1;
    results.push(minimumCoinsToReachTarget);
  }

  memo[targetAmount] = Math.min(...results);
  return memo[targetAmount];
}

console.log(coinChange([3, 5], 5))
// 1: 10, 8, 6
// 2:     [9, 7, 5], [7, 5, 3], [5, 3, 1]
// 3: [8, 6, 4]... [4, 2, 0]
