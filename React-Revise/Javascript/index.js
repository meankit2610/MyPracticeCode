var arr = [1, 2, 3, 4, 5]
var arr2 = [3,4,6]
// console.log(...arr2(22,11))

//rest'
const myBio=(fn,ln,...other) => {
     console.log(fn+ln+other)
}
 myBio("ankit ","singh ","web Developer")