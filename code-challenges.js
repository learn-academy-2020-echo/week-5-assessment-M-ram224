// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

// create a function that takes a str
const codedMessage = (str) => {
  // .split() up the "str"
  splitStr = str.split("")
  // map over the str to change the str val
  mappedCode = splitStr.map((valA) => {
    // create if statement
    // need to change the vowels to a number
    // let valA = "a"
    // let valE = "e"
    // let valI = "i"
    // let valO = "o"
    
    if (valA === 4) {
      return 4
      // } else if ("e" === 3) {
      //   return 3
      // } else if ("i" === 1) {
      //   return 1
      // } else if ("o" === 0) {
      //   return 0
    }
  })
  //   return the .join() "str"
  return mappedCode.join()
}

// return coded message
console.log(codedMessage(secretCodeWord1))
// console.log(codedMessage(secretCodeWord2))

// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

// Create a function that takes an array
const onlyAs = (arr) => {
  // filter through the array
  filteredArr = arr.filter((str) => {
    // set the str.toLowerCase then find the str values that include the letter "a"
    return str.toLowerCase().includes("a")
  })
  // return the filteredArray
  return filteredArr
}

console.log(onlyAs(arrayOfWords))

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false
var hand4 = [3, 5, 3, 5, 3]
// Expected output: true

// function will take an array of nums
const full_house (arr) => {
    // identify the particular indexes numbers in the array
    // if 3nums and 2nums are the same and are identified as a full house return true
    // else if the numbers are identified as not a full house return false
    
}


// STRETCH:
var hand5 = ["K", 5, "K", 5, "K"]
// Expected output: true
var hand6 = ["A", "Q", "A", 5, 3]
// Expected output: false
