// question no 1061 

// Question


// You are given two strings of the same length s1 and s2 and a string baseStr.

// We say s1[i] and s2[i] are equivalent characters.

// For example, if s1 = "abc" and s2 = "cde", then we have 'a' == 'c', 'b' == 'd', and 'c' == 'e'.
// Equivalent characters follow the usual rules of any equivalence relation:

// Reflexivity: 'a' == 'a'.
// Symmetry: 'a' == 'b' implies 'b' == 'a'.
// Transitivity: 'a' == 'b' and 'b' == 'c' implies 'a' == 'c'.
// For example, given the equivalency information from s1 = "abc" and s2 = "cde", "acd" and "aab" are equivalent strings of baseStr = "eed", and "aab" is the lexicographically smallest equivalent string of baseStr.

// Return the lexicographically smallest equivalent string of baseStr by using the equivalency information from s1 and s2.

//  Input 

// Input: s1 = "parker", s2 = "morris", baseStr = "parser"
// Output: "makkek"
// Explanation: Based on the equivalency information in s1 and s2, we can group their characters as [m,p], [a,o], [k,r,s], [e,i].
// The characters in each group are equivalent and sorted in lexicographical order.
// So the answer is "makkek".


// Solution 


var smallestEquivalentString = function(s1, s2, baseStr) {
  const n = s1.length;
  let UF = {};
  
  function find(val){
      if(!UF[val])
          UF[val] = val;
      if(val === UF[val]){
          return val;
      }
      return UF[val] = find(UF[val])
  }

  function union(x,y){
      const rootX = find(x);
      const rootY = find(y);
      if(rootX > rootY){
          UF[rootX] = rootY;
      }
      else{
          UF[rootY] = rootX;
      }
  }

  for(let i=0; i<n; i++){
      union(s1.charAt(i), s2.charAt(i));  
  }
  
  let ans = '';
  for(let i=0; i<baseStr.length; i++){
      ans += find(baseStr.charAt(i));
  }

  return ans;
};


console.log(smallestEquivalentString("hello", "world"));