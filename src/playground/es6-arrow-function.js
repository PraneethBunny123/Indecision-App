//es5 function
const square = function(x) {
    return x*x
}

console.log(square(3))

//es6 arrow function
// const squareArrow = (x) => {
//     return x*x*x
// }

const squareArrow = (x) => x*x*x

console.log(squareArrow(5))

// challange
const getFirstName = (Fullname) => {
    return Fullname.split(' ')[0]
} 

console.log(getFirstName('Gunturu Praneeth'))

const getNameArrow = (nam) => nam.split(' ')[0]

console.log(getNameArrow('Andrew Mead'))