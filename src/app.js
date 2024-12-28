import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))

// class Oldsyntax {
//     constructor(){
//         this.name = 'bunny'
//         this.getGreet = this.getGreet.bind(this)
//     }
//     getGreet() {
//         return `hi this is ${this.name}`
//     }

// }
// const oldsyntax = new Oldsyntax()
// const greet = oldsyntax.getGreet
// console.log(greet())

// //------------------------------------------------

// class Newsyntax {
//     name = 'Praneeth'
//     newGreet = () => {
//         return `hi this is ${this.name}`
//     }
// }

// const newsyntax = new Newsyntax()
// const gr = newsyntax.newGreet
// console.log(gr())

// ------------------------------------------------

// const Layout = (props) => {
//     return (
//         <div>
//             <p>Header</p>
//             {props.children}
//             <p>footer</p>
//         </div>
//     )
// }



// ReactDOM.render((
//     <Layout>    
//         <div>
//             <h1>Page title</h1>
//             <p>Page details</p>
//         </div> 
//     </Layout>
// ), document.getElementById('app'))