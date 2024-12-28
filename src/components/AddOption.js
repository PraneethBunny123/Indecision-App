import React from "react"

//we can use export default for class types and not for variable type like const, let etc..

export default class AddOption extends React.Component {
    state = {
        Error: undefined
    }
    //we dont need constructor and this as @babel already have built in plugins, also we don't need to bing any methods instead we have to use es6 arrow functions for them
    // constructor(props) {
    //     super(props)
    //     this.handleAddOption = this.handleAddOption.bind(this)
    //     this.state = {
    //         Error: undefined
    //     }
    // }
    handleAddOption = (e) => {
        e.preventDefault()

        const type = e.target.elements.typo.value.trim()
        const error = this.props.handleTypeOption(type)

        this.setState(() => ({Error: error}))

        if(!error) {
            e.target.elements.typo.value = ""
        }  
    }
    render() {
        return (
            <div>
                {this.state.Error && <p className="add-option-error">{this.state.Error}</p>}
                <form className="add-option-text" onSubmit={this.handleAddOption}>
                    <input className="add-option-text__input" type="text" name="typo"></input>
                    <button className="button">Add option</button>
                </form>
            </div>
        )
    }
}