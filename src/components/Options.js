import React from "react"
import Option from "./Option"

//stateless function component
const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__yourOptions">Your options</h3>
                <button 
                    className="button button--link"
                    onClick={props.handleDeleteOptions}
                >
                    Remove All
                </button>
            </div>
            {props.options.length === 0 && <p className="widget__enterOptions">Enter options to start</p>}
            {props.options.map((opt, index) => 
                <Option 
                    key={opt} 
                    optionText={opt} 
                    count={index+1}
                    handleRemoveOption={props.handleRemoveOption}
                />)
            }
        </div>
    )
}

// // class based react component
// class Options extends React.Component {

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((opt) => <Option key={opt} optionText={opt}/>
//                     )
//                 }
//             </div>
//         )
//     }
// }

export default Options