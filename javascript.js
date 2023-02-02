// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  input.sort((a, b) => a - b); // sort array
  let median;
  if (input.length % 2 !== 0) {
    median = input[Math.floor(input.length / 2)];
  } else {
    let mid = input.length / 2;
    median = (input[mid - 1] + input[mid]) / 2;
  }
  return median;
}

console.log(result(input));