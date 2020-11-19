// we have a list of int that contains at least one repeating int
// we want to find the repeating int



const repeatedNTimes = (A) => {
  //create a dictionary 
    // const seenIntegers = {}
      let integersSeen = {};
      
  // iterate through the list of integers
    // for (A.length)
      for (let i = 0; i < A.length; i++) {
          
          // if int is not in the dictionary, add to dictionary and assign value
          if(A[i] in integersSeen) return A[i]
          
      // this means its only seen once        
          integersSeen[A[i]] = 0
    
      }
  
  }