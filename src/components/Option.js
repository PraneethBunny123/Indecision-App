import React from "react"

//stateless function component
const Option = (props) => {
    return (
        <div className="option">
            <p className="option__text">{props.count}. {props.optionText}</p>
            <button 
                className="button button--link" 
                onClick={() => {
                    props.handleRemoveOption(props.optionText)
                }}
            >
                remove
            </button>
        </div>
    )
}

// // class based react component
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         )
//     }
// }

export default Option