// const user = {
//     name: 'Andrew',
//     cities: ['Phile', 'New york', 'Dublin'],
//     printplaceslived: function () {
//         this.cities.forEach(function (city) {
//             console.log(this.name + ' has lived in ' + city)
//         })
//     }
// }

// the above cannot work as this is bounded by funxtion in printplaceslives

// const user = {
//     name: 'Andrew',
//     cities: ['Phile', 'New york', 'Dublin'],
//     printplaceslived() {
//         this.cities.forEach( (city) => {
//             console.log(this.name + ' has lived in ' + city)
//         })
//         return 
//     }
// }

//  the above work cause => cannot bind "this"

// const user = {
//     name: 'Andrew',
//     cities: ['Phile', 'New york', 'Dublin'],
//     printplaceslived() {
//         const cityMsg =  this.cities.map((city) => {
//             return this.name + ' has lived in ' + city
//         })
//         return cityMsg
//     }
// }

//  the below is the optimised version 

const user = {
    name: 'Andrew',
    cities: ['Phile', 'New york', 'Dublin'],
    printplaceslived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city)
    }
}
console.log(user.printplaceslived())

// challange

const multiplier = {
    numbers: [2, 5, 7, 9],
    multiplyby: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyby)
    }
}

console.log(multiplier.multiply())