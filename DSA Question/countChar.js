// Write a function which takes a string and returns the count of each character in the string

let n = "hello world";

const allString = () => {
  let result = {};

  for (let i = 0; i < n.length; i++) {
    const element = n[i];

    if (result[element] > 0) {
      result[element]++;
    } else {
      result[element] = 1;
    }
  }
  return result;
};

console.log(allString());