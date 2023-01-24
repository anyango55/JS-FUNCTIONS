/ Arrow
// arrow functions have implicit returns
// REGULAR FUNCTION
// function myFunction(name){
//   console.log('hi ${name}')
// }
// ARROW FUNCTION
// const myFunction = (name) =>{
//   console.log('hi ${name}')
// }

const sumArroww = (a,b) => {
  return a + b
}

const sumArrow = (a,b) => a + b

// arrow function with explicit return
const sumArrow2 = (a,b) => {
  return a+b
}
console.log(sumArrow2(10,8))
// arrow function with implicit return
// IMPRTANT: For implicit return remove squiglies{}
const sumArrow3 = (a,b) => a+b
