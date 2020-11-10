/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

const moveZeroes = (input) => {
  // move zeroes to the end of the array
    // iterate through input array 
    for(let i = 0; i < input.length; i++ ) {
       // condition that evaluates if number is a zero
       if(input[i] === 0) {
        // push zeroes to end of the array
        input.push(input[i]);
        // delete zero from the og spot it was in 
        input.splice(i, 1);
        
       } 
    }
    console.log(input)
    return input;
    
   
     
    

  // keep the other numbers in the same order
    // this would naturally happen by moving zeroes to the end 
}

  