// Question no 56 

// Question 

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

//  Sample Input 1 
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

var merge = function(intervals) {
  intervals.sort((a,b)=>{
      return a[0]-b[0]
  })
  let output = [intervals[0]]

  for(let i=1;i<intervals.length;i++){
if(intervals[i][0]<=output[output.length-1][1]){
  output[output.length-1][1]= Math.max(intervals[i][1],output[output.length-1][1])
}else{
  output.push(intervals[i])
}
  }
  return output
};

console.log(merge([[1,6],[4,5]]));