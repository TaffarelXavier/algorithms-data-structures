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
  let memo = [0];
  return coinChangeHelper(coins, targetAmount, memo)
};

function coinChangeHelper(coins, targetAmount, memo) {
  for (let i = 1; i <= targetAmount; i++) {
    if (memo[i] === undefined) memo[i] = Infinity;

    coins.forEach(coin => {
      if (i >= coin) {
        let difference = i - coin;
        memo[i] = Math.min(memo[difference] + 1, memo[i]);
      }
    })
  }

  // console.log(memo);
  return memo[targetAmount] === Infinity ? -1 : memo[targetAmount];
}


// console.log(coinChange([186,419,83,408], 6249))
console.log(coinChange([3,5,8,11], 21))
