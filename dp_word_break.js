// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.
//
// Note:
//
// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:
//
// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:
//
// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
// Example 3:
//
// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false

function findValidChain(allRanges, str, deadEnds, start=0) {
  let endIdx = str.length - 1;

  //guard clause - there is no start index
  if (!allRanges[start]) {
    return false;
  }

  //base case - start index key includes end index as a value
  if (allRanges[start].includes(endIdx)) {
    return true;
  }

  //generic - take end indexes of current start key.
  //if any are cached as dead ends, ignore
  //if not cached, see if they can be valid chain to end
  let endIndices = allRanges[start]
  for (let i = 0; i < endIndices.length; i += 1) {
    let nextStart = endIndices[i] + 1;
    if (deadEnds[nextStart]) {
      continue;
    }

    if (findValidChain(allRanges, str, deadEnds, endIndices[i] + 1)) {
      return true;
    }
  }

  deadEnds[start] = true;
  return false;
}

//this function looks for dict words in string and returns start/end pointers
//in a hash
function findRanges(str, wordDict) {
  let allRanges = {};

  for (let i = 0; i < wordDict.length; i += 1) {
    let word = wordDict[i];
    for (let j = 0; j <= str.length - word.length; j += 1) {
      let substr = str.slice(j, j + word.length);
      if (substr === word) {
        if (allRanges[j]) {
          allRanges[j].push(j + word.length - 1);
        } else {
          allRanges[j] = [j + word.length - 1];
        }
      }
    }
  }

  return allRanges;
}

function wordBreak(str, wordDict, deadEnds={}) {
  let allRanges = findRanges(str, wordDict);
  return findValidChain(allRanges, str, deadEnds);
}

let str = 'catsanddogs';
let wordDict = ['cats', 'and', 'sand', 'dogs'];

console.log(wordBreak(str, wordDict));
