class Person {

    constructor(name = "Anonymous", age = 0) {
        this.name = name
        this.age = age
    }

    getGreeting () {

        return `Hi. I am ${this.name}!`
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {

    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }

    hasMajor() {
        return !!this.major
    }

    getDescription() {
        let descr = super.getDescription()
        if(this.hasMajor()){
            descr += ` Their major is ${this.major}.`
        }

        return descr
    }
}

class Traveler extends Student{

    constructor(name, age, major, location){
        super(name, age, major)
        this.location = location
    }

    hasLocation(){
        return !!this.location
    }

    getGreeting() {
        let greet = super.getGreeting()

        if (this.hasLocation()) {
            greet += ` I'm visiting from ${this.location}`
        }

        return greet
    }
}

const me = new Traveler("Praneeth", 23, "computer science", "India")
console.log(me.getGreeting())

const other = new Traveler()
console.log(other.getGreeting())

// console.log(me.hasLocation(), other.hasLocation())
