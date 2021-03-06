// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function sumEvens(prev = 1, curr = 2, sum = 0) {
  let next;

  if(curr > 4000000) return sum;

  if(curr % 2 === 0) sum += curr;

  next = prev + curr;

  console.log(curr, sum)
  
  return sumEvens(curr, next, sum);
}

console.log(sumEvens())
