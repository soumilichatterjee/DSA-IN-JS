// Leetcode Question Number = 1859

// Question 
// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

// Sample Input Case 

// Input: s = "is2 sentence4 This1 a3"
// Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.


// Solution 


var sortSentence = function(s) {
  let str = s.split(" ")
  let arr=[]
let index
for(let i=0;i<str.length;i++){
index= Number(str[i].slice(-1)-1)
arr[index]= str[i].slice(0,str[i].length-1)

}
return arr.join(" ")
};

console.log(sortSentence("Myself2 Me1 I4 and3"))